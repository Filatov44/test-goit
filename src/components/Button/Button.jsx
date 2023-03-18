import { FollowButton } from "./Button.styled";

export default function ButtonCounter ({btnTitle, ...props }) {
	
	return (
		<FollowButton {...props}>{btnTitle}</FollowButton>
	);
};