import './Sidebar.css';

function Sidebar(){
    const nombreAdmin = 'Admin Pro'
    return(
        <aside className='sidebar'>
            <div className='sidebar-logo'>
                <h2>{nombreAdmin}</h2>
            </div>
            <ul className='sidebar-menu'>
                <li className='activo'>Panel General</li>
                <li>Usuario</li>
                <li>Productos</li>
                <li>Configuración</li>
            </ul>
            <div className='sidebar-footer'>
                <button className='btn-logout'>Cerrar Sesión</button>
            </div>
        </aside>
    );

}
export default Sidebar;