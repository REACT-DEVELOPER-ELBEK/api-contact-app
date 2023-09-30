import { useState } from "react";
import "./Style.scss";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameArr, setFirstNameArr] = useState([]);

  const [lastName, setLastName] = useState("");
  const [lastNameArr, setLastNameArr] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberArr, setPhoneNumberArr] = useState([]);

  function getValue(e) {
    setFirstNameArr([...firstNameArr, firstName]);
    setLastNameArr([...lastNameArr, lastName]);
    setPhoneNumberArr([...phoneNumberArr, phoneNumber]);
    e.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <div className="input">
        <label><RiContactsFill /></label>
        <Form.Control
          type="text"
          style={{ width: "250px" }}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className="input">
        <label><RiContactsFill /></label>
        <Form.Control
          type="text"
          style={{ width: "250px" }}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <div className="input">
        <label><BsFillTelephoneFill /></label>
        <Form.Control
          type="tel"
          style={{ width: "250px" }}
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        <Button variant="outline-primary" onClick={getValue} type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
}

export default App;
