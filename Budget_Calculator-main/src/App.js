import './App.css'; 
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import React from 'react';


const initalExpenses = [

  {id : uuidv4(), charge: "rent", amount:1600},
  {id : uuidv4(), charge: "car payment", amount:400},
  {id : uuidv4(), charge: "credit ard bill", amount:1200}
]




function App() {

const [expenses,setExpenses]=useState(initalExpenses);



  return (
  <>
<Alert />
<h1>Budget calculator</h1>
<main className='App'>
<ExpenseForm/>
<ExpenseList expenses={expenses} />
</main>
<h1>Total Spendind : <span className='total'>
  ${expenses.reduce((acc,curr)=>{

    return (acc+= curr.amount);
  },0)}
  </span>
  </h1>
</>      
);
}

export default App;
