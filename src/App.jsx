import { useState, useEffect } from "react";
import "./Style.scss";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios("http://localhost:3000/users")
  //     .then((response) => setPost(response.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const [post, setPost] = useState({
    firstName: "",
    lasName: "",
    phoneNumber: ""
  });
  function getValue(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", { post })
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }
  function inputValue(event){
    setPost({[event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <form>
        <div className="input">
          <label>
            <RiContactsFill />
          </label>
          <Form.Control
            type="text"
            style={{ width: "250px" }}
            placeholder="First name"
            onChange={inputValue}
            name="firstName"
          />
        </div>
        <div className="input">
          <label>
            <RiContactsFill />
          </label>
          <Form.Control
            type="text"
            style={{ width: "250px" }}
            placeholder="Last name"
            onChange={inputValue}
            name="lastName"
          />
        </div>
        <div className="input">
          <label>
            <BsFillTelephoneFill />
          </label>
          <Form.Control
            type="tel"
            style={{ width: "250px" }}
            placeholder="Phone number"
            onChange={inputValue}
            name="phoneNumber"
          />
        </div>
        <Button variant="outline-primary" onClick={getValue} type="submit">
          Add contact
        </Button>
      </form>
      <div className="contact__list">
        <div className="contact__item">
          {
            post.map((item, index)=>{
              return (<p key={index}>{item.post.firstName }</p>)
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
