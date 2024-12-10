import React from "react";
import styles from "./index.module.css";

const UserTile = ({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) => {
  return (
    <div className={styles["usertile"]} onClick={onClick}>
      <div className={styles["name"]}>{name}</div>
    </div>
  );
};

export default UserTile;
