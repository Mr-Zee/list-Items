import Header from "./components/Header";
import Main from "./components/Main";
import Task from "./components/Task";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Task title={"Grocery to buy"} />
      <Task title={"Grocery to buy"} />
      <Task title={"Grocery to buy"} />
    </div>
  );
};

export default App;
