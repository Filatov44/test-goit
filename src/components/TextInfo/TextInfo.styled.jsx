import styled from 'styled-components';

export const InfoText = styled.p`
	font-size: 20px;
	font-weight: 500;
	line-height: 1.2;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${props => props.mb || 0}px;
	text-transform: uppercase;
	color: #ebd8ff;
`;

export const InfoFollowers = styled.p`
	font-size: 20px;
	font-weight: 500;
	line-height: 1.2;
	text-transform: uppercase;
	color: #ebd8ff;
`