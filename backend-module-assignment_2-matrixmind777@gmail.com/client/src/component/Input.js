
import React from 'react';
import { useState } from 'react';


function Input() {

    const [todo, setTodo] = useState({ id: "", todo: "", des: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/todo", {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: { 'Content-Type': 'application/json' },
        })

        console.log(JSON.stringify(todo));
        if (res.status === 201) {
            alert("Todo added successfully");
            setTodo({ id:"", todo: "", des: "" })
        }
    }
    return (
        <>
            <div className="container">
                <div className="card m-4 p-3 shadow-lg rounded-4 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Enter Your Todo</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              
                                <input 
                                className="form-control"
                                 type="text" 
                                 id='todoId' 
                                 placeholder='input todo id' 
                                 value={todo.id} 
                                 required onChange={(e) => { setTodo({ ...todo, id: e.target.value }); }} 
                                 />
                            </div>
                            <div className="mb-3">
                               
                                <input 
                                className="form-control"
                                 type="text" 
                                 id='todos' 
                                 placeholder='input todo' 
                                 value={todo.todo} 
                                 required onChange={(e) => { setTodo({ ...todo, todo: e.target.value }); }}
                                  />
                            </div>
                            <div className="mb-3">
                              
                                <textarea type="text" 
                                className="form-control"
                                 rows="3" 
                                 placeholder='Describe your todo' 
                                 id="description" 
                                 required 
                                 value={todo.des} onChange={(e) => { setTodo({ ...todo, des: e.target.value }); }} />
                            </div>
                            <div className="mb-3">
                                <button 
                                className='btn btn-lg text-light'
                                 type="submit" 
                                 style={{backgroundColor:"#9091e0"}} >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Input;