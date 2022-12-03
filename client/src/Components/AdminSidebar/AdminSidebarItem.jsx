import React from "react";
import styles from "./AdminSidebarItem.module.css";

const AdminSidebarItem = (props) => {
	return (
		<div className={styles["admin-sidebar-item"]}>
			<img src={props.icon} alt="" />
			<p>{props.iconName}</p>
		</div>
	);
};

export default AdminSidebarItem;
