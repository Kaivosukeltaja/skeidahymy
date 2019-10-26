import React, { Component } from 'react';
import { ratingGroups } from './data';
import PrintResults from './components/print/PrintResults';
import Header from './components/Header';
import Form from './components/screen/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingGroups,
      placeName: '',
      placeAddress: '',
      notes: '',
    };
    this.changeRating = this.changeRating.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }

  changeRating(name) {
    return (event) => {
      const value = event.target.value;
      this.setState((state) => {
        const ratingGroups = state.ratingGroups.map((group) => (
          group.name === name ? { ...group, rating: value } : group
        ))

        return { ratingGroups } 
      });
    }
  }

  changeFieldValue(name) {
    return (event) => {
      const value = event.target.value;
      this.setState((state) => ({
        [name]: value,
      }));
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form 
          ratingGroups={this.state.ratingGroups}
          placeName={this.state.placeName}
          placeAddress={this.state.placeAddress}
          notes={this.state.notes}
          changeRating={this.changeRating}
          changeFieldValue={this.changeFieldValue}
        />
        <PrintResults
          ratingGroups={this.state.ratingGroups}
          placeName={this.state.placeName}
          placeAddress={this.state.placeAddress}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
