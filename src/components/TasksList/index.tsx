import React from "react";
import { handleClickCheck } from "../../utils/taskFunctionGlobal";
import {BiTrash} from 'react-icons/bi'

interface props {
    id:number
    content:string
    status:boolean
    tasks:{id:number,content:string,status:boolean}[]
    setTasks:React.Dispatch<React.SetStateAction<{id:number,content:string,status:boolean}[]>>
}
function TasksList({id,content,status,tasks,setTasks}:props){  
        return(
            <>
        <div  className="shadow-lg flex  justify-between items-center mt-4  bg-grayToDoList500 rounded-lg border border-[#333333] p-4 gap-3 relative">
            <input defaultChecked={status}  readOnly={true} className='  invisible  rounded-full ' type="checkbox"  name={`checkBox_${status}`} id={`checkBox_${id}`}/>
            <label onClick={()=> handleClickCheck(id,tasks,setTasks)} htmlFor={`checkBox_${id}`} className="checkList  "  ></label>

            <p className={` transition-all  break-all px-4 relative block flex-grow text-white ${status? ' line-through opacity-50':''}`}>{content}</p>
            <BiTrash className="h-5 w-5  text-white"  ></BiTrash>
        </div>
            </>
        )
}


export default TasksList