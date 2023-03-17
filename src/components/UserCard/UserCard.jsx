import { ContainerUserCard } from "./UserCard.styled";
import Logo from "components/Logo/Logo";
import UserAvatar from "components/UserAvatar/UserAvatar";
export default function UserCard () {
	return (
		<ContainerUserCard>
		<Logo/>
		<UserAvatar/>
		</ContainerUserCard>
	)
}