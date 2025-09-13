import styled from "styled-components";

type WorkPropsType = {
	src: string;
	title: string;
	text: string;
};

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<Image src={props.src} alt="" />
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<Link href="#">Demo</Link>
			<Link href="#">Code</Link>
		</StyledWork>
	);
};

const StyledWork = styled.div`
	background-color: rgb(55, 50, 50);
	max-width: 540px;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`;

const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
