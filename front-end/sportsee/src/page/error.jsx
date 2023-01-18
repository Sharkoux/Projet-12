import styled from "styled-components"


const ErrorTxt = styled.h1`
    font-size: 180px;
    display: flex;
    justify-content: center;
    margin-top: 300px;
`



function Erreur() {
    return (
        <div >
            <ErrorTxt>Erreur 404</ErrorTxt>
        </div>
    )
}

export default Erreur
