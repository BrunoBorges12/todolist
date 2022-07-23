import { useEffect, useState } from "react"
import Logo from "./components/Logo"
import NewTask from "./components/NewTask"
import TasksList from "./components/TasksList"



function App() {
  const [tasks,setTasks] =  useState<{content:string,status:boolean,id:number}[]>([])
const [cont,setCont] =useState(tasks)
useEffect(()=>{
  if(tasks.length  > 0){

    setCont(tasks.filter(task => task.status))
  }

},[tasks])
 
  return (
    <div className="w-full h-screen  bg-grayToDoList500  ">
      <section className="bg-blackToDoList flex flex-col justify-center items-center eft-0 right-0 h-[200px]">
        <div>
            <Logo   />
        </div>
        <div>
          <NewTask setTasks={setTasks}/>
        </div>
      </section>
      <section className="  gap-6 w-[736px] mx-auto  justify-center mt-20">
      <div className="flex  justify-between w-full">
           <span className=" text-blueList ">Tarefas criadas <span className=" rounded-full mx-2 text-[#D9D9D9]   text-xs py-1  px-2 bg-grayToDoList400 gap-2">{tasks.length}</span></span>

           <span className="text-blueList ">Concluidas <span className=" rounded-full mx-2 text-[#D9D9D9]   text-xs py-1  px-2 bg-grayToDoList400 gap-2"> {cont.length} de {tasks.length}</span></span>
      </div>
      <>
        {tasks.length > 0 ?   tasks.map((task)=>{
          return <TasksList setTasks={setTasks} key={task.id}   
          id={task.id} 
          content={task.content} 
          status={task.status} 
          tasks={tasks} />
        }):(<div className=" flex flex-col items-center mt-20">
            <img src="/Clipboard.png" alt="Clipboard"  />
            <span className=" w-[316px] mt-5 text-white  text-base font-bold align-top opacity-50">Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer</span>
        </div>)}  

        </>
        
      </section>
    </div>
  )
}

export default App
