import './TopNav.css';

function TopNav(){
    const usuarioActual = "Juan Perez";
    return(
        <header className='topnav'>
            <div className='buscador'>
                <input type="text" className='input-buscar' placeholder='buscar...'/>
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🛎️</span>
                <div className='avatar'>JP</div>
                <span className='nombre-usuario'>hola, {usuarioActual}</span>
            </div>
        </header>
    );
}

export default TopNav;