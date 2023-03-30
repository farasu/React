import "./App.css";
import ExpenseItme from "./component/ExpenseItem";
import ExpsenseForm from './component/form/ExpenseForm';

function App() {
  return (
    <div className="App">
      <div>
        <h1>This is my first application in ReactJs</h1>
      </div>
      <body>
        <ExpsenseForm />
        <ExpenseItme></ExpenseItme>
      </body>
    </div>
  );
}

export default App;
