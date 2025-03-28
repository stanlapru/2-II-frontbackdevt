import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

const MainPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Привет, мир!</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <p>Это первый текстовый блок. Он содержит некоторую информацию.</p>
        </div>
        <div className="col-md-6">
          <p>Это второй текстовый блок. Он расположен в другой колонке.</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="custom-button">Нажми меня</button>
      </div>
    </div>
  );
};

export default MainPage;
