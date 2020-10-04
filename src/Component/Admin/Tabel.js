import React, { useEffect, useState } from "react";
import logo from "../../logos/trash-2 9.png";
import { Table } from "react-bootstrap";
import Bar from "../ComnComponent/Bar/Bar";

const Tabel = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://blooming-refuge-67435.herokuapp.com/allUser")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  // deledetd code start
  const handelDelet = (email) => {
    fetch(`https://blooming-refuge-67435.herokuapp.com/delete/${email}`, {
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
          {item.map((itm) => (
            <tr key={itm._id}>
              <td>{itm.fullName}</td>
              <td>{itm.email}</td>
              <td>{itm.date}</td>
              <td>{itm.volunteerName}</td>
              <td>
                <img
                  src={logo}
                  onClick={() => handelDelet(itm.email)}
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
