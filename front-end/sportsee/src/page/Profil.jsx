import React from 'react'
import { useParams } from 'react-router-dom'
import useCallData from '../hook/useCallData'
import Erreur from './error'
import styled from 'styled-components'
import Activité from '../component/Activité'
import Tag from '../component/tag'
import energy from '../asset/energy.svg'

const DivProfil = styled.div`
    margin: 110px;
    margin-top: 60px;
    margin-bottom: 0px;
    display: flex;
    flex-wrap: wrap;
    .NameColor {
        color: red;
    }
    .title {
        font-size: 18px;
        width: 100%
    }
    .titleTxt {
        width: 100%;
    }
    .TagContainer {
        display: flex;
        flex-direction: column;
        margin: 30px;
        margin-top: 70px;
    }
`

function Profil() {
    const { id } = useParams()
    const {userData, userActivity, error} = useCallData(id)

    if(error) {
        return <Erreur />
    }

    if(userData) {
        console.log(userData.keyData)
    }
    


    
    return (
        <DivProfil>
           <h1 className='titleTxt'>Bonjour <span className='NameColor'>{userData?.userInfos?.firstName}</span></h1>
           <p className='title'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
           <Activité userActivity={userActivity}/>
           <div className='TagContainer'>
            {/* {userData?.keyData.map(item => {
                return 
            }
            )} */}
            <Tag image={energy} keydata={""}/>
            <Tag image={energy} keydata={""}/>
           </div>
        </DivProfil>
       
    )
}

export default Profil
