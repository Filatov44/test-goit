import styled from 'styled-components';

export const FollowButton = styled.button`
	width: 196px;
	padding: 14px 0;
	background-color: ${props => props.bgcActive || "#EBD8FF"};
	color: #373737;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;
	border: none;
	font-weight: 600;
	font-size: 18px;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	margin-right: auto;
	margin-left: auto;


	&:hover {
		background-color: ${props => props.bgchActive || "#C691FF"};
	 };

	& :focus {
		background-color: ${props => props.bgchActive || "#C691FF"};
	} 

`;