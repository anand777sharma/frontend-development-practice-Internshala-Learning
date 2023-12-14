import {Accordion, Container} from "react-bootstrap";
// importing Component from React-Bootstrap
import{useEffect, useState} from "react";
// importing hooks from react


function TodoList(){
const [todo, setTodo] = useState([]);
// use state is used to store the todo data. 

const getData= async ()=>{// getting data from backend and storing it in res variables
    try {
        const res=await fetch("http://localhost:5000/todo");
        const data=await res.json(); // converting data into json and storing it in data variables
        setTodo(data);//chnaging the state of todo data from blank array to jason data comming from backend
    } catch (error) {
        setTodo([]);//if error occured then also the blank array will be send to the frontend as response
        console.log(error);
    }


}
useEffect(()=>{
    getData()
},[])
    
return (
    // fragment are used to wrap multiple elements without adding an extra node
    <>
      {/* Container component is used for complete width */}
      <Container>
        {/* Accordion component is use to display a collapsible list of todos */}
        <Accordion className="m-4 p-3 bg-light shadow-lg rounded-4">

          {/* Mapping todo array to create Accordion items */}
          {todo.map((item, index) => (
            <Accordion.Item key={index} eventKey={index} className="border-0 bg-light">
              {/* Accordion header displaying todo title */}
              <Accordion.Header className="border-bottom">{item.todo}</Accordion.Header>
              
              {/* Accordion body showing todo description */}
              <Accordion.Body>
                {item.des}
              </Accordion.Body>
            </Accordion.Item>
          ))}
          
        </Accordion>
      </Container>
    </>
  );
}

// exporting TodoList component as the default export
export default TodoList;