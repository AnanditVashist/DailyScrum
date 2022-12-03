import React from "react";
import AdminSidebarItem from "../../Components/AdminSidebar/AdminSidebarItem";
import styles from "./AdminSidebar.module.css";
import settingsIcon from "../../Assets/icons/settings.svg";
import employeesIcon from "../../Assets/icons/employees.svg";
import checkinsIcon from "../../Assets/icons/checkins.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AdminSidebar = () => {
	return (
		<div className={styles["admin-sidebar"]}>
			<Link to="/checkin">
				<AdminSidebarItem iconName="Checkins" icon={checkinsIcon} />
			</Link>
			<AdminSidebarItem iconName="Employees" icon={employeesIcon} />
			<AdminSidebarItem iconName="Settings" icon={settingsIcon} />
		</div>
	);
};

export default AdminSidebar;
