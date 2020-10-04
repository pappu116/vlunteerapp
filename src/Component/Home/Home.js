import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import NavBar from "../ComnComponent/Navbar/NavBar";
import Item from "./Item/Item";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://blooming-refuge-67435.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const inputStyle = {
    width: "40%",
    marginLeft: "26%",
  };

  return (
    <Container>
      <NavBar />
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
        <InputGroup className="mb-3">
          <input
            style={inputStyle}
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      {product.map((pd) => (
        <Item key={pd._id} pd={pd}></Item>
      ))}
    </Container>
  );
};

export default Home;
