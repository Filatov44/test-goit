import { ContainerUserCard } from "./UserCard.styled";
import Logo from "components/Logo/Logo";
import UserAvatar from "components/UserAvatar/UserAvatar";
import TextInfo from "components/TextInfo/TextInfo";
import ButtonCounter from "components/Button/Button";
import { useState } from "react";



export default function UserCard () {

	const [follow, setFollow] = useState(JSON.parse(localStorage.getItem("isfollow")) || false);
	
	const [valueFollowers, setValueFollowers] = useState(parseInt(localStorage.getItem("followers")) || 100500);

	

	const addFollow = () => {
		
		const value = valueFollowers + 1;
		const isFollow = true;

		setValueFollowers(value)
		setFollow(isFollow);
		
		console.log(value);
		localStorage.setItem("followers", JSON.stringify(value));
		localStorage.setItem("isfollow", JSON.stringify(isFollow));
	};

	const delFollow = () => {

		const value = valueFollowers - 1;
		const isFollow = false;

		setValueFollowers(value);
		setFollow(isFollow);

		localStorage.setItem("followers", JSON.stringify(value));
		localStorage.setItem("isfollow", JSON.stringify(isFollow));
	};


	return (
		<ContainerUserCard>
		<Logo/>
		<UserAvatar/>
		<TextInfo quantity={"777"} value = {"tweets"} mb = {"16"}/>
		<TextInfo quantity={valueFollowers} value = {"followers"} mb = {"26"}/>
		{follow ? <ButtonCounter btnTitle="following" bgcActive=" #5CD3A8" bgchActive="#9DE4CA" onClick={delFollow}/>: <ButtonCounter btnTitle="follow" bgcActive="" bgchActive="" onClick={addFollow}/>}
		</ContainerUserCard>
	)
}