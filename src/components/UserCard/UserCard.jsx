import { ContainerUserCard } from "./UserCard.styled";
import Logo from "components/Logo/Logo";
import UserAvatar from "components/UserAvatar/UserAvatar";
import TextInfo from "components/TextInfo/TextInfo";
export default function UserCard () {
	return (
		<ContainerUserCard>
		<Logo/>
		<UserAvatar/>
		<TextInfo quantity={"777"} value = {"tweets"} mb = {"16"}/>
		<TextInfo quantity={"100.500"} value = {"followers"} mb = {"26"}/>
		</ContainerUserCard>
	)
}