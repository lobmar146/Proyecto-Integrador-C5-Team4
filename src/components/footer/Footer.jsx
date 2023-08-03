
import styled from 'styled-components'

import { GiSoccerBall } from 'react-icons/gi'


export default function Footer() {

  return(
    <>
    <StyleFooter>
          
         <div>  <GiSoccerBall /> 4Football 2023  &copy; </div>
          
           </StyleFooter>
    </>
  )

}
const StyleFooter = styled.footer`
align-items: center;
background-color: grey; 
display: flex;
height: 2rem;
justify-content: center;

`;

