import React, {useState} from 'react';



const cambio = {
  BRL: 1,
  USD: 0.20,
  EUR: 0.18,
  GBP: 0.16,
  JPY: 30.25,
}


const Conversao = () => {
  const [quantidadeInicial, setQuantidadeInicial] = useState(0);
  const [quantidadeFinal, setQuantidadeFinal] = useState(0);
  const [conversaoInicial, setConversaoInicial] = useState('BRL'); 
  const [conversaoFinal, setConversaoFinal] = useState('USD');  


const calculo = () => {
  const calc = cambio[conversaoInicial] /cambio[conversaoFinal];
  const valorFinal = quantidadeInicial / calc;

  setQuantidadeFinal(valorFinal.toFixed(2));

};

return (
  <div className="conversão">
    <h2> Conversor de Moedas</h2>
    <div>
      <input
      type="number"
      value={quantidadeInicial}
      onChange={(e) => setQuantidadeInicial(e.target.value)}
      />

      <select 
      value={conversaoInicial}
        onChange={(e) => setConversaoInicial(e.target.value)}>
          {Object.keys(cambio).map((parametro) => (
            <option key={parametro} value={parametro}>{parametro}</option>
          ))}
      </select>

      para 

      
      <select 
      value={conversaoFinal}
        onChange={(e) => setConversaoFinal(e.target.value)}>

          {Object.keys(cambio).map((parametro) => (

            <option key={parametro} value={parametro}>{parametro}</option>
          ))}
      </select>
      <button onClick={calculo}>Converter</button>

    </div>
    <p>{`${quantidadeInicial} ${conversaoInicial} equivale a ${quantidadeFinal}`}</p>
  </div>
);

};

export default Conversao;