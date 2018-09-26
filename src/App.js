import React, { Component } from "react";
import store from "./store";
import user from "./images/user.png";
import "./App.css";
import { setProfession } from "./actions";

class App extends Component {
  handleProfessionUpdate = () => {
    //a list of professions
    const professions = [
      "Dancer",
      "Fashion Designer",
      "Bartender",
      "Wrestler",
      "Librarian",
      "Singer",
      "Coder",
      "Teacher"
    ];
    //pick a random profession from the list above
    const randomProfession =
      professions[Math.floor(Math.random() * professions.length)];
    //dispatch action creator with random professions
    store.dispatch(setProfession(randomProfession));
  };

  render() {
    const { name, description, likes, location } = store.getState();
    store.speak();
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>

        <div className="App__update">
          <button onClick={this.handleProfessionUpdate}>
            Change user's profession
          </button>
        </div>
      </div>
    );
  }
}

export default App;
