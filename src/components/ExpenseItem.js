// import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="App-components">
      <div>Date: {props.date}</div>
      <div>title: {props.title}</div>
      <div>Amount: {props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
