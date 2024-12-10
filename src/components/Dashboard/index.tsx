import React from "react";
import styles from "./index.module.css";
import UserTile from "src/components/UserTile";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [people, setPeople] = useState([]);
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("https://forinterview.onrender.com/people");
      const result = await res.json();
      console.log("ya hai dtta: ", result);
      setPeople(result);
    })();
  }, []);

  const getUserData = async (personId) => {
    const res = await fetch(
      `https://forinterview.onrender.com/people/${personId}`
    );
    const result = await res.json();
    setPersonData(result);
    console.log("ya hai person dtta: ", result);
  };

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["recommended-users"]}>
        <div className={styles["heading"]}>Most Recommended</div>
        <div className={styles["list-one"]}>
          {people.slice(0, 4).map((person, index) => {
            return <UserTile key={index} name={person.name} />;
          })}
        </div>
        <div className={styles["info"]}>
          Recommendation are based onyour skill requirements and candidates
          performance
        </div>
        <div className={styles["list-two"]}>
          {people.map((person, index) => {
            return (
              <UserTile
                key={index}
                name={person.name}
                onClick={() => getUserData(person.id)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["data"]}>
        <div className={styles["tabs"]}>
          <div className={styles["tab"]} style={{ backgroundColor: "green" }}>
            Compare View
          </div>
          <div className={styles["tab"]}>individual View</div>
          <div className={styles["tab"]}>shortlisted candidates</div>
        </div>
        <div className={styles["main-dashboard"]}>
          <div className={styles["property-list"]}>
            {!personData && <p>Please select a person to see its data</p>}
            {/* {personData &&
              personData.map((person, index) => {
                return (
                  <span className={styles["property"]}>
                    {personData.data.data.skillset.skills.name}
                  </span>
                );
              })} */}
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
            <span className={styles["property"]}>Property - 1</span>
          </div>
          <div className={styles["property-data"]}>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
            <div className={styles["property-square"]}></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
