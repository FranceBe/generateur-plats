import React, { Component } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import { getRandomRecipe } from './plats';

class App extends Component {

    state = {};

    constructor (props) {
        super(props)

        this.state = {};

        this.displayPlat = this.displayPlat.bind(this);
    }

    componentWillMount() {
        this.displayPlat();
    }

    displayPlat () {
        const plat = getRandomRecipe(this.state.nom)
        this.setState({ nom: plat });
    }


  render() {
    return (
      <div className='whatToEat'>
        <header className="appHeader">
          <h1 className="title">Voici une idée :</h1>
        </header>
        <Recipe details={this.state} />
        <button className="button" onClick={this.displayPlat} >Qu'est-ce qu'on mange ?</button>
      </div>
    );
  }
}

export default App;
