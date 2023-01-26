import React from 'react'
import { useParams } from 'react-router-dom'
import useCallData from '../hook/useCallData'
import Erreur from './error'
import styled from 'styled-components'
import Activité from '../component/Activité'
import Tag from '../component/tag'
import energy from '../asset/energy.png'
import proteine from '../asset/protein-icon.png'
import lipide from '../asset/cheeseburger.png'
import apple from '../asset/apple.png'
import Durée from '../component/Durée'
import RadarCharts from '../component/Radar'
import Score from '../component/Score'



const DivProfil = styled.div`
    margin: 4%;
    margin-top: 60px;
    margin-bottom: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
        width: 20%;
        margin-top: 70px;
    }
    .ChartsContainer {
        margin-top: 30px;
        display: flex;
        gap: 30px;
    }
    .ActivityContainer {
        width: 75%
    }
`

function Profil() {
    let res;
    const { id } = useParams()
    const {userData, userActivity, userSession, userPerformance, error} = useCallData(id)

    if(error) {
        return <Erreur />
    }

    if(userData.keyData) {
        
        const formatData = {
        calorieCount: {label: 'Calories', icon: {energy}},
        carbohydrateCount: {label: 'Glucides', icon: {apple}},
        lipIdCount: {label: 'Lipides', icon: {lipide}},
        proteinCount: {label: 'Proteines', icon: {proteine}},
      }

        res = Object.entries(userData?.keyData).map(([key, value], index) => {
        return {key, value, label: formatData[key].label, icon: formatData[key].icon}
      })
       
    }
    
    
    return (
        <DivProfil>
           <h1 className='titleTxt'>Bonjour <span className='NameColor'>{userData?.userInfos?.firstName}</span></h1>
           <p className='title'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
           <div className='ActivityContainer'>
           <Activité userActivity={userActivity}/>
           
           <div className='ChartsContainer'>
           <Durée datas={userSession}/>
           <RadarCharts datas={userPerformance} />
           <Score datas={userData}/>
           </div>
           </div>
           <div className='TagContainer'>
            {res?.map((item, index) => {
                return (
                    <Tag  keydata={item} key={index}/>
                )
                
            }
            )}
           </div>
        </DivProfil>
       
    )
}

export default Profil
