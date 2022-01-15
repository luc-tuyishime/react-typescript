import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

// Type definition
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 44,
      note: "Lorem ipsum dollar sit amet",
    },
  ]);

  return (
    <div className="App">
      <p>people invited to my party</p>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
