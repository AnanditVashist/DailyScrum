import React from "react";
import style from "./FlexContainer.module.css";
const FlexContainer = ({ children }) => {
	return <section className={style.container}>{children}</section>;
};

export default FlexContainer;
