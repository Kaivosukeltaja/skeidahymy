import React, { Component } from 'react';
import './App.scss';
import RatingGroup from './components/RatingGroup';
import { ratingGroups } from './data';
import PrintResults from './components/PrintResults';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingGroups,
    };
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

  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-form">
          { this.state.ratingGroups.map((group) => (
            <RatingGroup key={group.name} group={group} onChange={this.changeRating(group.name)} />
          ))}
        </div>
        <PrintResults ratingGroups={this.state.ratingGroups} />
      </div>
    );
  }
}

export default App;
