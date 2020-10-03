import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Item from "./Item/Item";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://blooming-refuge-67435.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container>
      {product.map((pd) => (
        <Item pd={pd}></Item>
      ))}
    </Container>
  );
};

export default Home;
