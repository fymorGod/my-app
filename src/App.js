import api from "./api";
import { useState } from 'react';
import './styles/global.css';
function App() {
  const [valor, setValor] = useState([]);

  async function handleDate(){
    const response = await api.get('');
    console.log(response.data.data)
    setValor(response.data.data);
  }

  return (
    <>
      <div className='container'>
        <h2>Listando dados</h2>
      <div className="box">
        {valor.map((val) => (
          <table key={val.id}>
            <tr>
              <td>{val.name}</td>
            </tr>
            
          </table>
          
        ))}
      </div>
      <button onClick={handleDate}>dale</button>
      </div>
    
    </>
  );
}

export default App;
