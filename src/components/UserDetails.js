import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserDetails = (props) => {
    let history = useHistory();
    const [name, setName] = useState("");

    const onStartClick = (e) => {
        e.preventDefault();
        if (name == "") {
            alert("Please Enter Your Name !!!");
        } else {
            history.push("/question");
        }

    }

    const userName = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 offset-md-3 center-form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Your Name : </label>
                    <input type="text" className="form-control user-name" value={name} onChange={userName} id="exampleInputEmail1" placeholder="Name..." />
                </div>
                <button type="button" className="btn btn-primary btnStyle" onClick={(e) => onStartClick(e)}>Start</button>
                <p className="pt-3">Enter your name, answer the questions and share with your buddy to know how well he/she is knows about you.You can see the results once your buddy submit the answers !!!</p>
            </div>
        </div>);
}

export default UserDetails;