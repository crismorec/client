import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "./IndexPage.css";

const IndexPage = () => {
  return (
    <main>
      {/* <h1 className='title'>Bienvenid@s a la MERN Coasters - UNAB!</h1> */}
      {/* <section class="wrapper">
                <div class="top">MERN-UNAB</div>
                <div class="bottom" aria-hidden="true">MERN-UNAB</div>
            </section> */}
      <NavBar />
      <div className="row">
        <div className="col">
          <Hero />
        </div>
      </div>
      <hr />
      <div className="options">
        <Link to="/galeria">Ver galeria</Link>
        <br></br>
        {/* <Link to="/detalles/:coaster_id">Ver detalles</Link> */}
        <Link to="/detalles/63a38792cd3b82001c6cc125">Ver Hulk -></Link>
        {/* <Link to="/detalles/5e8ef56a60fa824d1e2db3be">Ver Hulk</Link> */}
      </div>

      <Footer />
    </main>
  );
};

export default IndexPage;
