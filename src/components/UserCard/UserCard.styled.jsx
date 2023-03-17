import styled from 'styled-components';
import heroBg from "../../img/hero-bg.png";

export const ContainerUserCard = styled.div`
	width: 380px;
	height: 460px;
	display: flex;
  	flex-direction: column;
	background-image: url(${heroBg}),
   	linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
	background-repeat: no-repeat;
	background-size: 308px 168px, auto;
	background-position: 36px 28px, 100%;
	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;
`;