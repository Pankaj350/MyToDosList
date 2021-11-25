import React,{useState}  from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
         e.preventDefault();
         if(!title || !desc){
             alert("Title or Description cnnot be blank");
    
         }
         addTodo(title, desc);
    }
    return (
        <div className= "container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="Tittle" className="form-label">Todo Tittle</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Tittle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc}onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
               
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
