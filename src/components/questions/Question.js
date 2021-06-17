import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';
import '../../style.css';
import { useHistory } from 'react-router-dom';

const Question = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [counter, setCounter] = useState(1)
    const [ansArray, setansArray] = useState([])
    let history = useHistory();

    useEffect(() => {
        fetch('/assets/questions.json').then(function (response) {
            return response.text();
        }).then(function (j) {

            console.log(j);
        });
        if (counter > allQuestions.length) {
            history.push("/share", ansArray)
        }
    }, [ansArray])

    const allQuestions = [{
        id: 1,
        question: 'If you went to see a movie together, which of these genres would you most likely pick?',
        options: ["Drama", "Action", "Thriller", "Horror"]
    },
    {
        id: 2,
        question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
    },
        // {
        //     id: 3,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 4,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 5,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 6,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 7,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 8,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 9,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 10,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 11,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 12,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 13,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 14,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
        // {
        //     id: 15,
        //     question: 'If you got some free time, which activity would you most enjoy engaging in with your partner?',
        //     options: ["Relaxing at home, eating & watching movies", "Relaxing on the beach ", "Reading a book", "Volunteering at a homeless shelter"]
        // },
    ]

    const selectedAns = (event) => {
        if (counter <= allQuestions.length) {
            setansArray([...ansArray, { ...allQuestions[currentIndex], ans: event }]);
            if (currentIndex !== allQuestions.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
            ansArray.forEach(item => console.log(item.id));
            setCounter(counter + 1);
        }
    }


    const skipQuestion = () => {
        if (allQuestions.length - 1 !== currentIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 offset-md-3 center-form">
                <button className="btn btn-danger skip-question" onClick={() => skipQuestion()}>skip question</button>
                <span className="float-right">Question: {currentIndex + 1}/{allQuestions.length}</span>
                <div className="card" className="card-width">
                    <div className="card-body p-0">
                        <h5 className="card-title">{allQuestions[currentIndex].question}</h5>
                        <QuestionItem item={allQuestions[currentIndex].options} selectedAns={selectedAns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;