import styled from 'styled-components';

export const UserAvatarContainer = styled.div`
	position: relative;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #EBD8FF;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
	margin-left: auto;
	margin-right: auto;
	margin-top: 136px;
	margin-bottom: 26px;
	/* border: 1px dotted green; */
	

	&:before {
		content: "";
		position: absolute;
		top: 36px;
		right: 80px;
		display: block;
		height: 8px;
		width: 150px;
		background-color: #EBD8FF;
		box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
	}

	&:after {
		content: "";
		position: absolute;
		top: 36px;
		left: 80px;
		display: block;
		height: 8px;
		width: 150px;
		background-color: #EBD8FF;
		box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
	}

	/* box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF; */
`;

export const UserAvatarImg = styled.img`
	width: 64px;
	height: 64px;
	display: block;
	margin-top: 8px;
	margin-left: auto;
	margin-right: auto;
	
	
	/* border: 1px solid red; */
`