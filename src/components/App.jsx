import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createCard(ent) {
  return (
    <Entry
      emoji={ent.emoji}
      name={ent.name}
      description={ent.meaning}
      key={ent.id}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
