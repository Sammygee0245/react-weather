import React,{useState,useRef} from "react";
import "./Todo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faAdd,faTrash,faCheck,faCircleXmark} from "@fortawesome/free-solid-svg-icons"

let TaskList = ()=>{

    const inputV = useRef()

    let [task,setTask] =useState([])

    let [InputValue,setInputValue] = useState("")

    let handelChange = (event)=>{
        setInputValue(event.target.value)
    }

    let addTodo = ()=>{
       if(InputValue === ""){
        alert("Please add task")
        return
       }else{
        let list = {
            id: task.length === 0 ? 1 : task[task.length-1].id+1,
            taskName:InputValue,
            completed : false
        }

        setTask([...task,list])
        setInputValue("")
       }
    }
    console.log(task)

    let check = (id)=>{
        setTask(
            task.map((list)=>{
                if(list.id===id){
                    return {...list,completed:true}
                }else{
                    return list
                }
            })
        )
    }

    let uncheck = (comp)=>{
        setTask(
            task.map((list)=>{
                if(list.id === comp){
                    return {...list,completed:false}
                }else{
                    return list
                }
            })
        )
    }

    let remove = (id)=>{
        setTask(
            task.filter((list)=>{
                if(list.id === id){
                    return false
                }else{
                    return true
                }
            })
        )
    }


    return(
        <div>
            <div className="inputback">
            <h1>Add Task</h1>
            <div className="addInput">
                <input
                ref={inputV}
                onChange={handelChange}
                value = {InputValue}
                placeholder="Add Task" 
                className="input"/>
                <FontAwesomeIcon title="Add Task" onClick={addTodo} icon={faAdd}  className="addtotaskbtn"></FontAwesomeIcon>
            </div>
            </div>
           
            <div className="taskshow">
                <h2>Task</h2>
                {
                task.map((list)=>{
                    return(
                        <div className="displayTask">
                            <div className="text">
                              <p className="num">{list.id}</p>
                              <p style={{textDecoration : list.completed ? "line-through":"none"}} className="List">{list.taskName}</p>
                            </div>
                            <div className="upicons">
                               {list.completed ? <FontAwesomeIcon onClick={()=>uncheck(list.id)} title="check" className="ccheck" icon={faCircleXmark}></FontAwesomeIcon>: <FontAwesomeIcon onClick={()=>check(list.id)} title="check" className="check" icon={faCheck}></FontAwesomeIcon>}
                                <FontAwesomeIcon title="delete" onClick={()=>remove(list.id)} className="del" icon={faTrash}></FontAwesomeIcon>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TaskList