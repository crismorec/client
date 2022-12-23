import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './CoasterDetails.css'

const CoasterDetails = () => {

    // HOOK UseParams
    const { coaster_id } = useParams()

    // HOOK UseState
    const [coaster, setCoaster] = useState({})


    const loadCosterDetails = () => {
        // fetch(`http://localhost:5005/api/details/${coaster_id}`)
        fetch(`http://localhost:5005/api/details/${coaster_id}`)
            .then(response => response.json())
            .then(coaster => setCoaster(coaster)) // al llegar las montañasRusas se guardan usando el método SetCoaster
    }

    loadCosterDetails()

    return (
        <main className="coaster-details">
            <NavBar />
            <h1>Detalles de {coaster.title}</h1>
            <hr />

            <img src={coaster.imageUrl} alt="coaster imageUrl" />

            <article>
                <p>{coaster.description}</p>
                <h3>Especificaciones</h3>
                <ul>
                    <li>Longitud: {coaster.length}</li>
                    {/* <li>Inversiones: {coaster.height}</li> */}
                    <li>Inversiones: {coaster.inversions}</li>
                </ul>

                <Link to="/galeria">Volver</Link>
            </article>
            <Footer />
        </main>
    )
}

export default CoasterDetails