import React from "react";
import style from "./Button.module.css";

const Button = ({ type, children, color, onClick, display }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			style={{ backgroundColor: color, display: display }}
			className={style.button}>
			{children}
		</button>
	);
};

export default Button;
