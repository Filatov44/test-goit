import { UserAvatarContainer, UserAvatarImg } from "./UserAvatar.styled";
import userAvatar from "../../img/userAvatar.png"

export default function UserAvatar () {

	return (
		<UserAvatarContainer>
			<UserAvatarImg src={userAvatar}/>
		</UserAvatarContainer>
	)
};