import Header from "./components/Header";
import Main from "./components/Main";
import Task from "./components/Task";

// const tasks = ["meeting 10am", "gym 6m", "party 10pm"];
const tasks = [
  { id: 1 ,title: "go to gym", isCompleted: false },
  { id: 2 ,title: "take a break", isCompleted: false },
  { id: 3 ,title: "Buy a Coke", isCompleted: true },
];
const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />

      {tasks.map((item,index) => (
        <Task title={item.title} isCompleted={item.isCompleted} key={index}/>
      ))}
    </div>
  );
};

export default App;
