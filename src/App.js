//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    descricao: "Primeira Atividade",
    prioridade: "Baixa",
    titulo: "Atividade"
  },
  {
    id: 2,
    descricao: "Segunda Atividade",
    prioridade: "Baixa",
    titulo: "Atividade"
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
      titulo: document.getElementById('titulo').value,
      prioridade: document.getElementById('prioridade').value,
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">ID</label>
          <input id="id" type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Descrição</label>
          <input id="descricao" type="text" className="form-control" />
        </div>

        <hr />

        <div className="col-12">
          <button className="btn btn-outline-secondary" onClick={addAtividade}>+ Atividade</button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map(
          ativ => (
            <div key={ativ.id} className='card mb-2 shadow-sm'>
              <div className='card-body'>
                <div className="d-flex justify-content-between">
                  <h5 className="cadr-title">
                    <span className="badge bg-secondary me-1">{ativ.id}</span>
                    - {ativ.titulo}
                  </h5>
                  <h6>
                    Prioridade:
                    <span className="ms-1 text-black">
                      <i className="me-1 far fa-frown-open"></i>
                      {ativ.prioridade}
                    </span>
                  </h6>
                </div>

                <p className='card-text'>{ativ.descricao}</p>

                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                  <button className='btn btn-sm btn-outline-primary me-2'>
                    <i className='fa fa-pen me-2'></i>
                    Editar
                  </button>

                  <button className='btn btn-outline-danger'>
                    <i className='fa fa-trash-o me-2'></i>
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div >
    </>
  );
}

export default App;
