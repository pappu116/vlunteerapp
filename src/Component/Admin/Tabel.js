import React, { useEffect, useState } from "react";
import logo from "../../logos/trash-2 9.png";
import { Table } from "react-bootstrap";
import Bar from "../ComnComponent/Bar/Bar";

const Tabel = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  // deledetd code start
  const handelDelet = (email) => {
    fetch(`http://localhost:5000/delete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert(" User Deleted successfully");
        }
      });
  };

  // deledetd code End
  return (
    <>
      <Bar name="Volunteer register list" />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Name</th>
            <th> Email ID</th>
            <th>Registion date</th>
            <th>Volunteer list</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((prd) => (
            <tr key={prd._id}>
              <td>{prd.fullName}</td>
              <td>{prd.email}</td>
              <td>{prd.date}</td>
              <td>{prd.volunteerName}</td>
              <td>
                <img
                  src={logo}
                  onClick={() => handelDelet(prd.email)}
                  style={{
                    height: "30px",
                    background: "red",
                    padding: "3px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabel;
