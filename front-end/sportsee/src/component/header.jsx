import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../asset/LogoSportSee.png'
import styled from 'styled-components'

// Rules css (styled-component)
const ContainerHeader = styled.div`
    display: flex;
    height: 90px;
    background-color: rgba(2, 2, 3, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;
    .HeaderImg {
        height: 60px;
        margin: 20px;
    }
`
const ContainerLink = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 90px;
    margin-left: 200px;
    .TxtLink {
        color: white;
    }
`



/**
 * Generate Header component
 * @return { ReactDOM }
 */

function Header() {
   

    return (
        <ContainerHeader>
             <img className="HeaderImg" src={logo} alt="logo" />
             <ContainerLink>
                <NavLink to='/'>
                    <p className='TxtLink'>
                        Accueil
                    </p>
                </NavLink>
                <NavLink>
                    <p className='TxtLink'>
                        Profil
                    </p>
                </NavLink>
                <NavLink>
                    <p className='TxtLink'>
                        Réglage
                    </p>
                </NavLink>
                <NavLink>
                    <p className='TxtLink'> 
                        Communauté
                    </p>
                </NavLink>
             </ContainerLink>
            
        </ContainerHeader>
    )
}

export default Header
