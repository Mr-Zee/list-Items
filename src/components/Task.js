const Task = (props) => {
  return (
    <div className="task">
      <p> {props.title}</p>
      <p>{props.isCompleted ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
