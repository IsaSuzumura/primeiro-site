import React from 'react';
import ReactDOM from 'react-dom/client';
import Cores from './Components/Cores';
import Cadastro from './Components/Cadastro';
import Nome from './Components/Nome';


const nome = ReactDOM.createRoot(document.getElementById('nome'));
nome.render(
  <React.StrictMode>
    <Nome />
  </React.StrictMode>
);

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

const cores = ReactDOM.createRoot(document.getElementById('cores'));
cores.render(
  <React.StrictMode>
    <Cores />
  </React.StrictMode>
);