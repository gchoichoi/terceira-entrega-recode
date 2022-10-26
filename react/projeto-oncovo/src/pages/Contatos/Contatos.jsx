import React, { useState } from "react";

export default function Contatos() {
  return (
    <div className="container">
          <h2> Quer saber mais? Entre em contato conosco!</h2>

          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputName">Nome completo</label>
                <input type="nome" class="form-control" id="inputNome" placeholder="nome"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input type="email" className="form-control" id="inlineFormInputGroup" placeholder="nome@email.com"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="inputTelefone">Telefone</label>
              <input type="text" className="form-control" id="inputNumber" placeholder="(31) 99999-9999"/>
            </div>
            <div className="form-group">
              <label for="selecaoMotivo">Qual o motivo do seu contato?</label>
              <select className="form-control" id="selecaoMotivo">
                <option>Escolha uma opção</option>
                <option>Mais Informações</option>
                <option>Elogios</option>
                <option>Reclamações</option>
              </select>
            </div>

            <div className="form-group">
              <label for="textArea">O que você gostaria de nos informar?</label>
              <textarea className="form-control" id="textArea" rows="3"></textarea>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                  Aceito receber informativos e promoções por email.
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-danger">Enviar</button>
          </form>
          
        </div>
  )
}
