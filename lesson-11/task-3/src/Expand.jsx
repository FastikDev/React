import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ children, isOpen, onClose, title}) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button 
                    className="expand__toggle-btn"
                    onClick={onClose}>
                        <FontAwesomeIcon 
                        icon={isOpen ? faChevronUp : faChevronDown}
                        className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} 
                    />
                </button>
            </div>
            <div className="expand__content">
                {!isOpen ? null : children}
            </div>
        </div>
    );
};

export default Expand;