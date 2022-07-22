import Logo from "./components/Logo"
import NewTask from "./components/NewTask"



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
      <section className="">
      <div>
       
        </div>
      </section>
    </div>
  )
}

export default App
