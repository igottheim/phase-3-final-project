function UserTasks({currentTasks}){
    console.log(currentTasks)
       let tasks=  currentTasks.map((a)=> <h1> Task Name: {a.name}  Priority: {a.priority}  Category: {a.category_id}</h1>)
    
        return(
            <div>{tasks}</div>
        )
    }
    
    export default UserTasks