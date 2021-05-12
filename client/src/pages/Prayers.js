import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import '../style.css';

function Prayers() {
  // Setting our component's initial state
  const [Prayers, setPrayers] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Prayers and store them with setPrayers
  useEffect(() => {
    loadPrayers()
  }, [])

  // Loads all Prayers and sets them to Prayers
  function loadPrayers() {
    API.getPrayers()
      .then(res => 
        setPrayers(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Prayer from the database with a given id, then reloads Prayers from the db
  function deletePrayer(id) {
    API.deletePrayer(id)
      .then(res => loadPrayers())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savePrayer method to save the Prayer data
  // Then reload Prayers from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    
      API.savePrayer({
        name: formObject.name,
        details: formObject.details
      })
        .then(res => loadPrayers())
        .catch(err => console.log(err));
    
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1 id= 'newPrayer' style={{ fontFamily: 'Amatic SC', cursive: true, color: 'white', fontSize: 60}} >New Prayer Request</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              {/* <Select
                onChange={handleInputChange}
                name="type"
                placeholder="Type (required)"
              /> */}
              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details (Leave empty if unspoken)"
              />
              <FormBtn
                // disabled={!(formObject.name)}
                onClick={handleFormSubmit}
              >
                Submit Prayer
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1  id= 'myPrayers' style={{ fontFamily: 'Amatic SC', cursive: true, color: 'white', fontSize: 60 }} >Prayers</h1>
            </Jumbotron>
            {Prayers.length ? (
              <List>
                {Prayers.map(Prayer => (
                  <ListItem key={Prayer._id}>
                    <Link to={"/Prayers/" + Prayer._id}>
                      <strong>
                        {Prayer.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deletePrayer(Prayer._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <>
              <h3>Need Prayers</h3>
              </>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Prayers;
