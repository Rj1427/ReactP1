import React from 'react';

const QuestionItem = ({ item, selectedAns }) => {
    return (
        <div>
            {item && item.map((text, index) => {
                return <div key={index} className="list-group">
                    <button type="button" className="list-group-item list-group-item-action" onClick={() => selectedAns(text)}>{text}</button>
                </div>;
            })}
        </div>
    );
}

export default QuestionItem;