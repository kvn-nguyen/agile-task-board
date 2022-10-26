import React, { useContext, useState } from "react";
import { BoardContext } from "../contexts/BoardContext";
import styles from "../styles/Home.module.css";

const BoardDetails = ({ task }) => {
  const { removeTask, updateStatus } = useContext(BoardContext);
  const { title, description, status, id } = task;
  const selection = [
    { value: "backlog", label: "Backlog" },
    { value: "active", label: "Active" },
    { value: "review", label: "Review" },
    { value: "resolved", label: "Resolved" }
  ];

  const setTaskColor = color => {
    switch (color) {
      case "backlog":
        return styles.backlogDot;
      case "active":
        return styles.activeDot;
      case "review":
        return styles.reviewDot;
      case "resolved":
        return styles.resolvedDot;
    }
  };

  return (
    <div className={styles.task}>
      <form>
        <label htmlFor="status">State: </label>
        <select
          value={status}
          name="status"
          id="status"
          onChange={e => updateStatus(e, id)}
        >
          {selection.map(item => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </form>
      <h5>
        Task ID: {id + 1000} <span className={setTaskColor(status)}></span>
      </h5>
      <h5>Task: {title}</h5>
      <p>Description: {description}</p>
      <button onClick={() => removeTask(id)}>Close Task</button>
    </div>
  );
};

export default BoardDetails;

/*
const x = [{value: 'backlog', label: 'Backlog'}, {value: 'active', label: 'Active'} ...etc]
{x.map(item =>
  <option value={item.value}>{item.label}</option>
)} 
*/
