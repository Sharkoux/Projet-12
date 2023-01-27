import { Link } from "react-router-dom"
import styled from "styled-components"


const ErrorTxt = styled.h1`
    font-size: 180px;
    display: flex;
    justify-content: center;
    margin-top: 300px;
`
const Links = styled(Link)`
    display: flex;
    margin: auto;
   justify-content: center
`

function Erreur() {
    return (
        <div >
            <ErrorTxt>Erreur 404</ErrorTxt>
            <Links to='/'>Retourner sur la page d'accueil</Links>
        </div>
    )
}

export default Erreur
