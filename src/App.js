import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenselist = [
    // https://github.com/dhruvagrawal1055/first_application
    {
      id: 'e1',
      title: "Faltu",
      amount: 250,
      date: new Date()
    },
    {
      // id: e2,
      title: "Faltu2",
      amount: 500,
      date: new Date()
    },
    {
      // id: e3,
      title: "Faltu3",
      amount: 156,
      date: new Date()
    },
    {
      // id: e4,
      title: "Faltu4",
      amount: 106,
      date: new Date()
    }

  ]
  return (
    <div className="background3">
      <div className="App-header">
        <h1>Hello World</h1>
      </div>
      <ExpenseItem title = {expenselist[0].title} amount = {expenselist[0].amount} date = {expenselist[0].date.toISOString()}></ExpenseItem>
      <ExpenseItem title = {expenselist[1].title} amount = {expenselist[1].amount} date = {expenselist[1].date.toISOString()}></ExpenseItem>
      <ExpenseItem title = {expenselist[2].title} amount = {expenselist[2].amount} date = {expenselist[2].date.toISOString()}></ExpenseItem>
      <ExpenseItem title={expenselist[3].title} amount={expenselist[3].amount} date={expenselist[3].date.toISOString()}></ExpenseItem>
      </div>
  );
}

export default App;
