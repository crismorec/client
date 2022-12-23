import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" src="https://misiontic2022.gov.co/746/articles-159999_foto_marquesina.jpg" alt="" width="200" height="80"></img>
            <h1 class="display-5 fw-bold">Bienvenid@s a MERN - UNAB!</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Proyecto Final Ciclo 4</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/galeria">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Galeria Montañas Rusas</button>
                    </Link>
                    <Link to="detalles/63a38792cd3b82001c6cc125">
                        <button type="button" class="btn btn-success btn-lg px-4 gap-3">Ver Montaña Hulk</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Hero;

