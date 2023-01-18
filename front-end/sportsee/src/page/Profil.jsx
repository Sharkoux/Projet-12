import React from 'react'
import { useParams } from 'react-router-dom'
import useCallData from '../hook/useCallData'
import Erreur from './error'
import styled from 'styled-components'
import Activité from '../component/Activité'

const DivProfil = styled.div`
    margin: 110px;
    margin-top: 60px;
    .NameColor {
        color: red;
    }
`

function Profil() {
    const { id } = useParams()
    const {userData, userActivity, error} = useCallData(id)

    if(error) {
        return <Erreur />
    }
    console.log(userData)

    return (
        <DivProfil>
           <h1>Bonjour <span className='NameColor'>{userData?.userInfos?.firstName}</span></h1>
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
           <Activité userActivity={userActivity}/>
        </DivProfil>
       
    )
}

export default Profil
