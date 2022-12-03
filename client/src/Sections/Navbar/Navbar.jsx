import React from "react";
import LogoContainer from "../../Components/Navbar/LogoContainer/LogoContainer";
import ProfileIcon from "../../Components/Navbar/ProfileIcon/ProfileIcon";
import style from "./Navbar.module.css";
const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style["navbar-container"]}>
				<LogoContainer></LogoContainer>
				<ProfileIcon></ProfileIcon>
			</div>
		</div>
	);
};

export default Navbar;
