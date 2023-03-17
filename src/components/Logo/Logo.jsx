import { ContainerLogo, LogoImg } from "./Logo.styled";
import logo from "../../img/Logo.png";

export default function Logo () {

	return(
			<ContainerLogo>
			<LogoImg src={logo} alt="Logo GoIT"/>
			</ContainerLogo>
	)
};