import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import Tab from "./components/tabs";
import Weather from "./components/weather";
import Autocomplete from "./components/autocomplete";

const panes = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' }
];

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];


function Root() {
  return (
    <div>
      <Clock />
      <Weather />
      <div className="interactive">
        <Tab panes={panes} />
        <Autocomplete names={names} />
      </div>
    </div>
  );
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root />, root);
});