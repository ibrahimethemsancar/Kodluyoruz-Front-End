import {useState} from 'react'
import Form from '../Form'

function List({ToDo}) {
    const[toggle,setToggle]=useState(false)
	const[deco,setDeco]=useState(false)
	function Delete(e){
		const target =e.target
		if(target.matches("button")){
			target.parentNode.remove()
		}
	}
	function tick(){
		
		setToggle(!toggle)
	
	}
	 function textDecoration(e){
		setDeco(!deco)	
		 if(deco==true){
			 
			e.target.className="decoration"
		 }else if(deco==false){
			
			 e.target.className=""
		 }
		 
		 
	 }
    return (
		
		<ul className="todo-list">
			{
			ToDo.map((item,i)=>

				<li key={i} className="completed"   >
					<div className="view"  >
						<input className="toggle" type="checkbox" onClick={tick}  />
							<label onClick={textDecoration}>{item.todolist}</label>
					<button className="destroy" onClick={Delete}></button>
					</div>
				</li>
			)
			}
		
	</ul>
 
    )
}

export default List
