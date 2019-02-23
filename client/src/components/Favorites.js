import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import API from '../utils/API';

export default class Favorites extends Component {
  state = {
    favorites: []
  }

  //when the component mounts, get all saved favorites
  componentDidMount() {
    this.loadFavorites();
    console.log("STATE OF FAVORITES COMPONENT: ")
    console.log(this.state)
  }


  loadFavorites = () => {
    API.getFavorites()
      .then(res => res.json)
      .then(res => this.setState({
        favorites: res.data
      }))
      .catch(err => console.log(err));
  }



  render() {

    const headStyle = {
      fontSize: "4rem",
      textAlign: "center",
      color: "#666"
    }

    const containerStyle = {
      marginTop: "20px",
      marginBottom: "20px"
    }

    return (
      <Container style={containerStyle}>

        <h2 style={headStyle}>Favorites</h2>

        {this.state.favorites.length >= 1 ? (
          <ListGroup>
            {this.state.favorites.map(result => (

              <ListGroupItem key={result._id}>
                {result.name}
              </ListGroupItem>

            ))}
          </ListGroup>
        ) : (
            <p>No favorites</p>
          )
        }

      </Container>
    )
  }




}

