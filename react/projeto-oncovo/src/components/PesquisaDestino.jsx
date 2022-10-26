import React from 'react'

export default function PesquisaDestino() {
  return (
    <section id="campo-pesquisa" class="container">
        <div class="espacamento">
          <h2> Escolha seu destino</h2>
          <form>
            <div class="row">
              <div class="col-8">
                <input type="text" class="form-control" placeholder="Procure pelo seu próximo destino..."/>
              </div>
              <div class="col-4">
                {/* colocar esse botão pra retornar uma página com os destinos cadastrados até o momento */}
                <button type="button" class="btn btn-danger">Pesquisar</button> 
              </div>
            </div>
          </form>
        </div>
        
      </section>
  )
}
