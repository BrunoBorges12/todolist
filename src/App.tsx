import { useEffect, useState } from "react"
import Logo from "./components/Logo"
import NewTask from "./components/NewTask"
import TasksList from "./components/TasksList"



function App() {
  const [tasks,setTasks] =  useState([ {
    id: 1,
    status: true,
    content: 'Fazer comida'
    
  },
  {
    id: 2,
    content: 'Estudar 3 horas',
    status: true
  },
  {
    id: 3,
    content: 'Estudar 6 horas',
    status: false
  }
])
const [cont,setCont] =useState(tasks)
useEffect(()=>{
   setCont(tasks.filter(task => task.status))

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
        {tasks.map((task)=>{
          return <TasksList setTasks={setTasks} key={task.id}   
          id={task.id} 
          content={task.content} 
          status={task.status} 
          tasks={tasks} />
        })}
        </>
        
      </section>
    </div>
  )
}

export default App
