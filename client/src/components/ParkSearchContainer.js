import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Nav, NavLink, NavItem } from 'reactstrap'
import SearchBar from "./SearchBar";
import API from "../utils/API";
import FaveButton from './FaveButton';

class ParkSearchContainer extends Component {
  state = {
    results: [],
    search: "",
    favorited: "",
  };

  componentDidMount() {
    this.searchParks('wa')
  }

  searchParks = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.data });
        console.log("STATE OF PARKSEARCHCONTAINER COMPONENT");
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  addToFavorites = name => {
    this.setState({favorited : name})
    API.addToFavorites({
      name: this.state.favorited
    })
    console.log("addToFavorites STATE: ")
    console.log(this.state) 
  }

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.searchParks(this.state.search);
  };

  render() {
    return (
      <Container>

        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />


        {this.state.results.length ? (
          <ListGroup>
            {this.state.results.slice(0, 5).map(result => (

              <ListGroupItem key={result.id}>
                <h4>{result.fullName}</h4>
                {result.description}
                <Nav>
                  <NavItem>
                    <NavLink href={result.url}>{result.name}</NavLink>
                  </NavItem>
                </Nav>

                <FaveButton onClick={() => this.addToFavorites(result.name)}/>
              </ListGroupItem>

            ))}
          </ListGroup>
        ) : (
            <h3>Search for Parks in your Favorite State!</h3>
          )
        }


      </Container>
    );
  }
}

export default ParkSearchContainer;
