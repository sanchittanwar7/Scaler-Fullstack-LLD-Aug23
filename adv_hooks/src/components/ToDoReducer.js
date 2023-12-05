import { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";
import { formReducer, taskReducer } from "./reducer";

const ToDoReducer = () => {
  const [list, dispatch] = useReducer(taskReducer, []);

  const [task, dispatchTask] = useReducer(formReducer, {
    title: "",
    by: "",
  });

  const handleTask = (e) => {
    e.preventDefault();
    dispatchTask({
      type: "HANDLE_TASK",
      field: e.target.name,
      payload: e.target.value,
    });
    // dispatchTask({
    //   type: "HANDLE_TASK",
    //   payload: {
    //     key: e.target.name,
    //     value: e.target.value,
    //   },
    // });
  };

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    dispatchTask({
      type: "HANDLE_TASK",
      field: "title",
      payload: "",
    });
    dispatchTask({
        type: "HANDLE_TASK",
        field: "by",
        payload: "",
      });
  };

  const markDone = (id) => {
    dispatch({
      type: "DONE_TASK",
      payload: id,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  return (
    <>
      <div>
        <h1>My TodoList</h1>
        <div>
          I want to do{" "}
          <input
            type="text"
            value={task.title}
            name="title"
            onChange={handleTask}
          />{" "}
          by{" "}
          <input type="date" name="by" value={task.by} onChange={handleTask} />
          <button className="wishBtn" onClick={addTask}>
            Add a Task
          </button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title}</strong> is due by {item.by}
              </span>
              <span>
                <TiTick size={24} onClick={() => markDone(item.id)} />
              </span>
              <span>
                <TiTrash size={24} onClick={() => deleteTask(item.id)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoReducer;
