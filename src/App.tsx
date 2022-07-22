import Logo from "./components/Logo"
import NewTask from "./components/NewTask"
import TasksList from "./components/TasksList"



function App() {

  return (
    <div className="w-full h-screen  bg-grayToDoList500  ">
      <section className="bg-blackToDoList flex flex-col justify-center items-center eft-0 right-0 h-[200px]">
        <div>
            <Logo   />
        </div>
        <div>
          <NewTask/>
        </div>
      </section>
      <section className="  gap-6 w-[736px] mx-auto  justify-center mt-20">
      <div className="flex  justify-between w-full">
           <span className=" text-blueList ">Tarefas criadas <span className=" rounded-full mx-2 text-[#D9D9D9]   text-xs py-1  px-2 bg-grayToDoList400 gap-2">1</span></span>

           <span className="text-blueList ">Concluidas <span className=" rounded-full mx-2 text-[#D9D9D9]   text-xs py-1  px-2 bg-grayToDoList400 gap-2">1 de 3</span></span>
      </div>
        <TasksList/>
        
      </section>
    </div>
  )
}

export default App
