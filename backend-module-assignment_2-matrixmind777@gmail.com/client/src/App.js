
import './App.css';
import Input from "./component/Input"
import TodoList from "./component/TodoList"
import {Container} from "react-bootstrap";

function App() {
  return (
    <div>
      <div className="display-5 fw-bold text-center text-white my-4">
        Lets do it..!!!!
      </div>
      <Container>
        <div className="row">
          <div className="col-lg-6 my-auto">
            <Input/>
          </div>
          <div className="col-lg-6 my-auto">
            <TodoList />
          </div>
        </div>
      </Container>

    </div>
  );
}

export default App;
