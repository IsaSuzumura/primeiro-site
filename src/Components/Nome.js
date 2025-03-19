import {useState, useEffect} from 'react';

function Nome(){
    const[nome, setNome] = useState('');
    const nomeStorage = localStorage.getItem('@nome');

    useEffect(() => {
      if (nomeStorage){
        setNome(JSON.parse(nomeStorage))
      } else {
        const nomeDig = prompt("Qual seu nome?");
        if(nomeDig) {
          setNome(nomeDig);
          localStorage.setItem('@nome', JSON.stringify(nomeDig));
        }
      }
    }, [])

    return (
      <h1>{nome}, sua lista de Tarefas</h1>
    );
} 

  export default Nome;