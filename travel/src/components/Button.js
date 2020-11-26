import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/button.scss';

const STYLES=['btn--primary', 'btn--outline'];
const SIZES=['btn--medium', 'btn--large'];

const Button = props => {
    const { children, type, onClick, buttonStyle, buttonSize }=props;
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
};

export default Button;