import React from "react";

const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
                        <a class="nav-link" href="/galeria">Galeria Montañas Rusas</a>
                        <a class="nav-link" href="/detalles/63a38792cd3b82001c6cc125">Ver Montaña Hulk</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

