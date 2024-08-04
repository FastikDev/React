import React from "react";
import PropTypes from 'prop-types';

const Expand = ({ children, isOpen, onClose, title }) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button 
                    className="expand__toggle-btn"
                    onClick={onClose}>
                    <i className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
                </button>
            </div>
            <div className="expand__content">
                {isOpen ? children : null}
            </div>
        </div>
    );
};

Expand.protoType = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    title: PropTypes.string,
    onToggle: PropTypes.func.isRequired
  };
  
  Expand.defaultProps = {
    isOpen: false,
    title: ''
  };

export default Expand;
