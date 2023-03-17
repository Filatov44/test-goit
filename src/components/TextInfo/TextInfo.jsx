import { InfoText } from "./TextInfo.styled";

export default function TextInfo(props) {

	return (
		<InfoText {...props}>{props.quantity} {props.value}</InfoText>
	)
}