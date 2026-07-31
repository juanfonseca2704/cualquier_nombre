/*Todo archivo en react va en mayuscula*/

import './App.css';
import DashboardLayout from './layouts/DashboardLayout';
import { Routes, Route } from 'react-router-dom';
import PanelGeneral from './pages/PanelGeneral';
import Configuracion from './pages/Configuracion';
import Productos from './pages/Productos';
import NotFound from './pages/NotFound';


function App(){
    return(
        <Routes>
            <Route path="/" element={<DashboardLayout/>}>
                <Route index element={<PanelGeneral/>}/>
                <Route path="productos" element={<Productos/>}/>
                <Route path="configuracion" element={<Configuracion/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
};

export default App;
/*Estas tres lineas simepre deben estar*/