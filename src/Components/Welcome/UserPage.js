import React, { useEffect, useState } from 'react';

import Header from './Header';

import Sidebar from './Sidebar';

import { Link, useNavigate } from 'react-router-dom';

import { Button, Table, Row, Col, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Doctors from './Doctors';

import axios from 'axios';

import './AdminPage.css';

// import './User.css';

import Users from "./Users";




function UserPage() {

  const [users,setUsers] = useState([]);

  const navigate = useNavigate();




  const handleEdit = (id, name, email, contact, password, role) => {

    localStorage.setItem('Name', name);

    localStorage.setItem('Email', email);

    localStorage.setItem('Contact', contact);

    localStorage.setItem('Password', password);

    localStorage.setItem('Role', role);

    localStorage.setItem('Id', id);

  };


const url="https://localhost:7264/api/users";

useEffect(()=>{
  getUsers();
},[])

const getUsers=()=>{
  axios.get(`${url}`)
  .then((response)=>{
    const allUsers=response.data;
    setUsers(allUsers);
    console.log(allUsers);
  })
  .catch((error)=>{
    console.error(`Error:${error}`);
  })
}

  const deleteUser = (userId) => {

    var url = 'https://localhost:3000/user/' + userId;

    axios

      .delete(url)

      .then((res) => { })

      .catch((err) => { });

    navigate('/user');

  };




  return (

    <>

      <Header />

      <Container fluid>

        <Row>

          <Col md={2}>

            <Sidebar />

          </Col>

          <Col md={10}>

            <div id="main">

              <article>

                <h2 style={{ textAlign: 'center' }}>List of Users</h2>

                <br />

                <Link to="/adduser">

                  <Button size="lg">Add User</Button>

                </Link>

                <br />

                <br />




                <div style={{ margin: '2rem' }}>

                  <Table striped bordered hover size="sm">

                    <thead>

                      <tr>

                        <th>Name</th>

                        <th>Eamil</th>

                        <th>Contact</th>

                        <th>Role</th>

                        <th>Actions</th>

                      </tr>

                    </thead>

                    <tbody>

                      {users && users.length > 0 ? (

                        users.map((user,index) => {

                          return (

                            <tr key={index}>

                              <td>{user.name}</td>

                              <td>{user.email}</td>

                              <td>{user.mobileNumber}</td>

                              <td>{user.role}</td>

                              <td>

                                <Link to={`/edituser`}>

                                  <Button

                                    onClick={() =>

                                      handleEdit(

                                        user.id,

                                        user.Name,

                                        user.Email,

                                        user.Contact,

                                        user.Password,

                                        user.Role

                                      )

                                    }

                                  >

                                    Edit

                                  </Button>

                                </Link>

                                &nbsp;

                                <Button

                                  onClick={() => deleteUser(user.id)}

                                >

                                  Delete

                                </Button>

                              </td>

                            </tr>

                          );

                        })

                      ) : (

                        <tr>

                          <td colSpan={4}>No data available</td>

                        </tr>

                      )}

                    </tbody>

                  </Table>

                </div>

              </article>

            </div>

          </Col>

        </Row>

      </Container>

    </>

  );

}




export default UserPage;