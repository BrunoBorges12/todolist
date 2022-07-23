 export const  handleClickCheck =  (id:number,task:{id:number,status:boolean}[],setTasks:any) => {
    const taskIndex = task.findIndex((task) => {
        return task.id ===  id;
    });
    const tempTasks = [...task];
    tempTasks[taskIndex].status = !tempTasks[taskIndex].status;
    console.log('temp',tempTasks   )
    setTasks(tempTasks)
}
        