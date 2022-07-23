import React from "react";
import { handleClickCheck } from "../../utils/taskFunctionGlobal";

interface props {
    id:number
    content:string
    status:boolean
    tasks:{id:number,content:string,status:boolean}[]
    setTasks:React.Dispatch<React.SetStateAction<{}[]>>
}
function TasksList({id,content,status,tasks,setTasks}:props){  
        console.log(status)
        return(
            <>
        <div  className="shadow-lg flex flex-nowrap items-center mt-4  bg-grayToDoList500 rounded-lg border border-[#333333] p-4 gap-3">
            <input defaultChecked={status} readOnly={true} type="checkbox" onClick={()=> handleClickCheck(id,tasks,setTasks)} name={` checkBox_${status}`} id={` checkBox_${status}`}/>
            <p className={`  px-7 text-white ${status? ' line-through':''}`}>{content}</p>
            <img src="Vector1.png" alt="lixeira" />
        </div>
            </>
        )
}

export default TasksList