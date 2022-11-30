import React from "react";
import style from "./LogoContainer.module.css";
import pencil from "../../Assets/pencil.png";
const LogoContainer = () => {
	return (
			<div id={style["logo-container"]}>
				<img src={pencil} alt="pencil"></img>
				<h2>DailyScrum</h2>
			</div>
	);
};

export default LogoContainer;