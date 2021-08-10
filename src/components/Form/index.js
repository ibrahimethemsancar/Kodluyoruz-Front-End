import {useState} from 'react'


function Form({addToDo, ToDo}) {
    const [form,setForm]=useState({todolist:''})
    const onChangeInput =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(form.todolist===''){
            return false
        }
        addToDo([...ToDo,form])
        setForm({todolist:''})
    //  console.log(form)
    }
   
    return (
        
        <header className="header">
		<h1>todos</h1>
		<form onClick={onSubmit}>
			<input name='todolist' className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput}  value={form.todolist}/>
            <button >Add</button>
		</form>
	</header>
    )
}

export default Form
