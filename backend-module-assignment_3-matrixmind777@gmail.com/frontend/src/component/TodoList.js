import '../App.css';
import { Accordion, Container } from "react-bootstrap";
// importing Component from React-Bootstrap
import { useEffect, useState } from "react";
// importing hooks from react


function TodoList() {
  const [todo, setTodo] = useState([]);
  // use state is used to store the todo data. 

  const getData = async () => {// getting data from backend and storing it in res variables
    try {
      const res = await fetch("http://localhost:5000/todo");
      const data = await res.json(); // converting data into json and storing it in data variables
      setTodo(data);//chnaging the state of todo data from blank array to jason data comming from backend
    } catch (error) {
      setTodo([]);//if error occured then also the blank array will be send to the frontend as response
      console.log(error);
    }


  }
  useEffect(() => {
    getData()
  }, [todo])

  return (
    // fragment are used to wrap multiple elements without adding an extra node
    <>
      {/* Container component is used for complete width */}
      <Container>
        <h1 className="text-light text-center">You have {todo.length} tasks pending....</h1>
        {/* Accordion component is use to display a collapsible list of todos */}
        <Accordion className="p-2 bg-light shadow-lg rounded-4">

          {/* Mapping todo array to create Accordion items */}
          {todo.map((item, index) => (
            <Accordion.Item key={index} eventKey={index} className="border-0 bg-light">
              {/* Accordion header displaying todo title */}
              <div className="d-flex justify-content-around align-items-top">
                <div style={{ width: "70%" }}>
                  <Accordion.Header className="shadow-sm mb-3 rounded-3">{item.todo}</Accordion.Header>

                  {/* Accordion body showing todo description */}
                  <Accordion.Body>
                    {item.des}
                  </Accordion.Body>
                </div>
                <div>
                  <button className="btn btn-delet rounded-3 shadow"><i class="far fa-trash-alt fa-lg"></i></button>
                  <button className="btn btn-delet rounded-3 shadow"><i class="far fa-edit fa-lg"></i></button>
                </div>
              </div>


            </Accordion.Item>
          ))}

        </Accordion>
      </Container>
    </>
  );
}

// exporting TodoList component as the default export
export default TodoList;