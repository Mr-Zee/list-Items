const Task = (props) => {
  return (
    <div className="task" style={props.isCompleted ? {color: 'green'} :{color: 'red'}}>
      <p> {props.title}</p>
      <p>{props.isCompleted ? "Yes" : "No"}</p>
    </div>
  );
};

export default Task;
