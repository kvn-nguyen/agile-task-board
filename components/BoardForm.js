import React, { useContext, useState } from "react";
import { BoardContext } from "../contexts/BoardContext";
import styles from "../styles/Home.module.css";

const NewBoardForm = () => {
  const { addTask } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("backlog");
  const [itemID, setItemID] = useState(1);
  const [displayTask, setDisplayTask] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    addTask(title, description, itemID, status);
    setTitle("");
    setDescription("");
    setDisplayTask(false);
    setItemID(itemID + 1);
  };

  const updateDisplay = () => {
    setDisplayTask(!displayTask);
  };

  const cancelTask = e => {
    e.preventDefault();
    setDisplayTask(false);
  };

  return (
    <div className={styles.inputForm}>
      <form>
        {displayTask ? (
          <div className={styles.formInput}>
            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <textarea
              type="text"
              placeholder="Task description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <div className={styles.buttonSelect}>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={cancelTask}>Cancel</button>
            </div>
          </div>
        ) : (
          <input
            className={styles.formAddTask}
            name="addTask"
            onClick={updateDisplay}
            placeholder="+ Add a task"
          />
        )}
      </form>
    </div>
  );
};

export default NewBoardForm;
