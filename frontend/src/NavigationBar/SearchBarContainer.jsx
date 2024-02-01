import React, { Component } from "react";
import "./SearchBarContainer.css";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      inputValue: "", // Dodaj stan do przechowywania wartości inputa
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = async (searchValue) => {
    try {
      const response = await fetch(
        `http://localhost:9000/api/getImages?search=${searchValue}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }); // Aktualizuj stan po zmianie wartości inputa
  };

  handleButtonClick = async () => {
    try {
      const { inputValue } = this.state; // Pobierz wartość z inputa
      const data = await this.fetchData(inputValue); // Przekaż wartość do funkcji fetchData
      console.log(data);
      // Tutaj możesz zaktualizować stan komponentu lub wykonać inne operacje na podstawie danych
    } catch (error) {
      console.error("Error in handleButtonClick:", error);
    }
  };

  render() {
    return (
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name="searchText"
          placeholder="Search"
          value={this.state.inputValue} // Ustaw wartość inputa na podstawie stanu
          onChange={this.handleInputChange} // Dodaj obsługę zmiany wartości inputa
        />
        <button
          className="searchButton"
          href="#"
          onClick={this.handleButtonClick}>
          <i className="material-icons"></i>
        </button>
      </div>
    );
  }
}

export default SearchBarContainer;
