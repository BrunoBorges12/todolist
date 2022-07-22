import {IoIosAddCircleOutline} from 'react-icons/io'

function NewTask() {
    return(
        <div className=" flex justify-center  left-[calc(50%-736px/2)] top-[180px]  w-[734px] absolute">
            <input type="text" className=" bg-grayToDoList500 w-[734px]  placeholder:text-grayToDoList100  px-4  py-2   border border-blackToDoList relative  text-grayToDoList100 rounded-lg  " placeholder="Adicione uma nova tarefa" />
            <button className=" bg-blueDark rounded-lg p-4 mx-2 flex items-center text-white  "><span>Criar</span> <span className='px-1'> <IoIosAddCircleOutline className='h-5 w-5' /></span> </button>
        </div>
    )
}


export default NewTask