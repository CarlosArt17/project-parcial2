import React from 'react';
import '../styles/home.css';

function HomePage() {
    return (
        <body>
        <div className="profile-container">
            <div className="profile-details">
                <h1 className="profile-name">Carlos Arturo Jose Fragoso</h1>
                <h2 className="profile-matricula">MATRICULA: zS20006730</h2>
                <h2>Bienvenido al baul de tus recuerdos</h2>
                <h3>Esta aplicacion esta hecha para que puedas almanecar todos tus recuerdos y siempre<br />
                tengas un lugar donde guardarlos, espero te sea de ayuda y cualquier duda me puedes contactar</h3>
            </div>
            <footer className="footer">
                <p>
                    © 2023 PhotoArt17. Todos los derechos reservados.
                </p>
                <p>
                    
                </p>
                <p>
                    Contacto: carlosjosefra@gmail.com
                </p>
            </footer>
        </div>
        </body>
    );
}

export default HomePage;