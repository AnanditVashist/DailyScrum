import React from "react";
import style from "./LogoContainer.module.css";
import pencil from "../../../Assets/icons/pencil.png";
const LogoContainer = () => {
	return (
		<div className={style["logo-container"]}>
			<img src={pencil} alt="pencil"></img>
			<h2>DailyScrum</h2>
		</div>
	);
};

export default LogoContainer;
