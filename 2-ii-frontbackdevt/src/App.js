import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Hotel Budapest core</h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <p className="text-box">Why are we stopping at a Barley Field? Well, hello there, chaps. Documents, please. With pleasure. It's not a very flattering portrait, I'm afraid, I was once considered a great beauty.</p>
        </div>
        <div className="col-md-6">
          <p className="text-box">What's the F. stand for, Fritz? Franz? Franz. I knew it! He's making a funny face. That's a Migratory Visa with stage three worker status, Franz, darling, he's with me. Come outside, please. Now wait a minute, sit down, Zero. His papers are in order, I cross-referenced them myself with The Bureau of Labor and Servitude. You can't arrest him simply because he's a bloody immigrant, he hasn't done anything wrong!</p>
        </div>
      </div>

      <div className="text-center mt-3">
        <button className="btn custom-button">Stop it! Stop, damn you!</button>
      </div>
    </div>
  );
}

export default App;
