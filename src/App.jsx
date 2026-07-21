/*Todo archivo en react va en mayuscula*/

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Tarjeta from './components/Tarjeta';

function App(){
    return(
        <div>
            <Header /> 
            <main>
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </main>
            <Footer />
        </div>
    )
};

export default App;
/*Estas tres lineas simepre deben estar*/