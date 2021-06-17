import React, { useState } from 'react';
import '../style.css'

const Share = (props) => {
    console.log(props)
    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 offset-md-3 center-form">
                {/* <button className="btn btn-danger skip-question">skip question</button> */}
                <span className="float-right"></span>
                <div className="card card-width">
                    <div className="card-body p-0">
                       <h5 className="card-title">Results Page</h5>
                    {props.history.location.state.map((item, index)=> <p key={index}>{item.ans}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;