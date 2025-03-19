import { useState, useEffect } from "react";

function Cores() {
  const [corFundo, setCorFundo] = useState("#ffffff");

  useEffect(() => {
    const corStorage = localStorage.getItem('@corFundo');
    if (corStorage) {
      setCorFundo(corStorage);
      document.body.style.backgroundColor = corStorage;
    }
  }, []);

  const handleCorFundoChange = (e) => {
    setCorFundo(e.target.value);
    localStorage.setItem("corFundo", e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <div>
      <div>
        <label>Escolha uma cor:</label>
        <div>
          <label>
            <input
              type="radio"
              name="cor"
              value="red"
              onChange={handleCorFundoChange}
            /> Vermelho
          </label>
          <label>
            <input
              type="radio"
              name="cor"
              value="blue"
              onChange={handleCorFundoChange}
            /> Azul
          </label>
          <label>
            <input
              type="radio"
              name="cor"
              value="green"
              onChange={handleCorFundoChange}
            /> Verde
          </label>
          <label>
            <input
              type="radio"
              name="cor"
              value="yellow"
              onChange={handleCorFundoChange}
            /> Amarelo
          </label>
        </div>
      </div>
    </div>
  );
}

export default Cores;