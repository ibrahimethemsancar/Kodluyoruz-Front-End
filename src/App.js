import './App.css';
import List from './components/List'
import {useState,useEffect} from 'react'
import Form from './components/Form'

function App() {
  const[toggleAll,setToggleAll]=useState(false)
  const [ToDo,setToDo]=useState([
    {
        todolist:'Learn React'
    },
    {
        todolist:'Learn JavaScript'
    }
])

useEffect(()=>{
    console.log(ToDo)
},[ToDo])

function check(){
  setToggleAll(!toggleAll)
}
  return (
    <div className="App">
      <section className="todoapp">


      <Form addToDo={setToDo} ToDo={ToDo} />


	{/* <!-- This section should be hidden by default and shown when there are todos --> */}
	<section className="main">
		<input className="toggle-all" type="checkbox" onClick={check}/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<List ToDo={ToDo} />
	</section>

	{/* <!-- This footer should hidden by default and shown when there are todos --> */}
	<footer className="footer">

		{/* <!-- This should be `0 items left` by default --> */}
		<span className="todo-count">
			<strong>2</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className="selected">All</a>
			</li>
			<li>
				<a>Active</a>
			</li>
			<li>
				<a>Completed</a>
			</li>
		</ul>

		{/* <!-- Hidden if no completed items are left ↓ --> */}
		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>

    </div>
  );
}

export default App;
