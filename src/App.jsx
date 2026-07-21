/*Todo archivo en react va en mayuscula*/
import './App.css';

function App(){
  const items =['React','Node','Javascript']

  return(
        <section>
        <div>Hola Mundo</div>
        <ul>
            {
                items.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </section>
  );
}

export default App;
/*Estas tres lineas simepre deben estar*/