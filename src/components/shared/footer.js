import React, { useState } from 'react';

const Footer = () => {

    const [stateModal, setModal] = useState(false)
    const footer = {
        position: "absolute",
        right: 30,
        left: 15,
        bottom: 0,
        backgroundColor: '#20232a',
        padding: ' 10px',
        borderRadius: 5,
        color: "#61dafb",
        boxShadow: "5px 5px 5px slategrey"
    }
    return (
        <div>
            {stateModal && <div className="modalPopup">
                modal popup shows
            </div>}
            <div style={footer}>
                <span>&copy; Test Your Bond </span>
                <span className="float-right mr-2" onClick={() => setModal(true)}>Contact</span>
            </div>
        </div>
    )
}

export default Footer;