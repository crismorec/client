import React from "react";

const Footer = () => {
    return (
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
                {/* <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="/"></use></svg>
            </a> */}
                <p class="text-muted">© UNAB - 2022 Versión 1.0.0.2</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5>Sección</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Sección</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/galeria" class="nav-link p-0 text-muted">Galeria Montañas Rusas</a></li>
                    <li class="nav-item mb-2"><a href="/detalles/6379a14cb9422955ba2022dd" class="nav-link p-0 text-muted">Ver Montaña Hulk</a></li>
                </ul>
            </div>
        </footer>
    );
}


// const Saludar = () => {
//     return (
//         <h1>   Hello World </h1>
//     )
// }

export default Footer;

