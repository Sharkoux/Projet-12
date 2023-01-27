import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import icon1 from '../asset/icon1.png'
import icon2 from '../asset/icon2.png'
import icon3 from '../asset/icon3.png'
import icon4 from '../asset/icon4.png'

const ContainerDash = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 110%;
    color: white;
    align-items: center;
    position: absolute;
    @media only screen and (max-width : 1500px) {
        height: 130%;
    }
    .ContainerLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        gap: 15px;
    }
    .TxtCopi {
        font-size: 12px;
        width: 140px;
        transform: rotate(-90deg);
        margin-bottom: 80px;
       
    }
`


function Dashboard() {
    

    return (
        <ContainerDash>
            <div className='ContainerLink'>
                <NavLink> 
                    <img src={icon1}></img>
                </NavLink>
                <NavLink> 
                    <img src={icon2}></img>
                </NavLink>
                <NavLink> 
                    <img src={icon3}></img>
                </NavLink>
                <NavLink> 
                    <img src={icon4}></img>
                </NavLink>
            </div>
            <p className='TxtCopi'>Copiryght, SportSee 2020</p>
        </ContainerDash>
    )
}

export default Dashboard
