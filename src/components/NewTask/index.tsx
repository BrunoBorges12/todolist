import React, { Dispatch, useState } from 'react'
import {IoIosAddCircleOutline} from 'react-icons/io'
interface  props {
     setTasks: React.Dispatch<React.SetStateAction<{}[]>>
}
function NewTask({setTasks}:props) {
    const [newTask,setNewTask] = useState('')
    let task ={}
    console.log(newTask)
    function newTaskTitleFunction () {
        const max = 100
        if(newTask.length === 0){
            alert('Por favor  a lista não pode ser vazia')
        }else{
            task = {
                id:Math.random() * max,
                content:newTask,
                status:false
            }
        }
        

        setTasks(prev=>[...prev,task])

    }
    return(
        <div className=" flex justify-center  left-[calc(50%-736px/2)] top-[180px]  w-[734px] absolute">
            <input onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" className=" bg-grayToDoList500 w-[734px]  placeholder:text-grayToDoList100  px-4  py-2   border border-blackToDoList relative  text-grayToDoList100 rounded-lg  "  placeholder="Adicione uma nova tarefa" />
            <button  onClick={newTaskTitleFunction} className=" bg-blueDark rounded-lg p-4 mx-2 flex items-center text-white  "><span>Criar</span> <span className='px-1'> <IoIosAddCircleOutline className='h-5 w-5'  /></span> </button>
        </div>
    )
}


export default NewTask