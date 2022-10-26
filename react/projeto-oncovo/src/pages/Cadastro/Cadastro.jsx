import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="container">
        <div className="justify-content-center">
            <div className="row">
                <h2 > Cadastre-se aqui!</h2>
            </div>
           

            <form  className="align-self-center">
                <div className=" col-md-5 mb-3">
                    <label for="exampleInputName" className="form-label">Nome</label>
                    <input type="email" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                </div>
                <div className="col-md-5 mb-3">
                    <label for="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
                </div>
                <div className="col-md-5 mb-3">
                    <label for="exampleInputPassword" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword"/>
                </div>
                <button type="submit" className="btn btn-danger">Cadastrar</button>
            </form>
        </div>
          
    </div>
  )
}
