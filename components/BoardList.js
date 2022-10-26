import React, { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import BoardDetails from "./BoardDetails";
import NewBoardForm from "../components/BoardForm";
import styles from "../styles/Home.module.css";

const BoardList = () => {
  const { tasks } = useContext(BoardContext);
  const backlogArray = tasks.filter(item => item.status === "backlog");
  const activeArray = tasks.filter(item => item.status === "active");
  const reviewArray = tasks.filter(item => item.status === "review");
  const resolvedArray = tasks.filter(item => item.status === "resolved");

  return tasks.length ? (
    <div>
      <div className={styles.title}>
        <h1>Agile Task Board</h1>
      </div>

      <div className={styles.boardList}>
        <div className={styles.boardSection}>
          <h4>BACKLOG</h4>
          <div className={styles.taskSection}>
            {backlogArray.length >= 1
              ? backlogArray.map(backlog => {
                  return <BoardDetails task={backlog} key={backlog.id} />;
                })
              : ""}
            <NewBoardForm />
          </div>
        </div>

        <div className={styles.boardSection}>
          <h4>ACTIVE</h4>
          <div className={styles.taskSection}>
            {activeArray.length >= 1
              ? activeArray.map(active => {
                  return <BoardDetails task={active} key={active.id} />;
                })
              : ""}
          </div>
        </div>

        <div className={styles.boardSection}>
          <h4>IN REVIEW</h4>
          <div className={styles.taskSection}>
            {reviewArray.length >= 1
              ? reviewArray.map(review => {
                  return <BoardDetails task={review} key={review.id} />;
                })
              : ""}
          </div>
        </div>

        <div className={styles.boardSection}>
          <h4>RESOLVED</h4>
          <div className={styles.taskSection}>
            {resolvedArray.length >= 1
              ? resolvedArray.map(resolved => {
                  return <BoardDetails task={resolved} key={resolved.id} />;
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>no tasks</div>
  );
};

export default BoardList;
