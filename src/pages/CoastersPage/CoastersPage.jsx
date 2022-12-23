import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar';

import './CoastersPage.css'

const CoastersPage = () => {

    // HOOK UseState --> const coaster
    const [coasters, setCoasters] = useState([])

    // se realiza el llamado mediante Ajax
    const loadCoasters = () => {
        fetch('http://localhost:5005/api/coasters')
            .then(res => res.json()) // async
            //.then(allCoaster => console.log(allCoaster)) // solo para validar el consumo
            .then(allCoasters => setCoasters(allCoasters)) // al llegar las montañasRusas se guardan usando el método SetCoaster
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    }

    loadCoasters()

    return (
        <main>
            <NavBar />
            {/* <h1>Listado de montañas rusas</h1> */}
            <section class="wrapper">
                <div class="top">Montañas rusas</div>
                <div class="bottom" aria-hidden="true">Montañas rusas</div>
            </section>
            {/* <Link to="/">Ir al inicio</Link> */}
            <hr />
            {coasters.map(infoCadaUnaDeLasMontanhas => {
                return (
                    <Link
                        to={`/detalles/${infoCadaUnaDeLasMontanhas._id}`} >

                        <button className='coaster-card' id={infoCadaUnaDeLasMontanhas._id}>
                            <img src={infoCadaUnaDeLasMontanhas.imageUrl}></img>
                            <h3>{infoCadaUnaDeLasMontanhas.title}</h3>
                            <h4>{infoCadaUnaDeLasMontanhas.length}</h4>
                            <h4>{infoCadaUnaDeLasMontanhas._id}</h4>
                            {/* <h3>{eachCoaster.name}</h3> */}
                        </button>
                    </Link>
                )
            })}
            <hr />
            <Link to="/">
                <img
                    src={require('../assets/ir-a-inicio.png')}
                    alt="Ir a inicio 2"
                    height="90"
                    width="90"
                />
            </Link>
        </main>
    )
}

export default CoastersPage


