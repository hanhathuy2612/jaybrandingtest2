import React from 'react'
import './CommonButton.scss'
import PropTypes from 'prop-types'

function CommonButton(props) {
    const { text, icon } = props
    return (
        <div className="CommonButton__wrapper">
            <div className="CommonButton__behind-box"></div>
            <button className="CommonButton__button">
                <img
                    src={icon}
                    alt="archiveRight"
                    className="CommonButton__button-icon"
                />
                <span className="CommonButton__button-text">{text}</span>
            </button>
        </div>
    )
}

CommonButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.any,
}

export default CommonButton
