import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
	src: string;
	title: string;
	text: string;
};

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<ImageWrapper>
				<Image src={props.src} alt="" />
				<Button>View project</Button>
			</ImageWrapper>

			<StyledWorkContent>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<FlexWrapper gap={"20px"}>
					<Link href="#">Demo</Link>
					<Link href="#">Code</Link>
				</FlexWrapper>
			</StyledWorkContent>
		</StyledWork>
	);
};

const StyledWork = styled.div`
	background-color: ${Theme.color.secondaryBg};
	max-width: 540px;
	width: 100%;

	${Link} {
		padding: 10px 0;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	heigh: 260px;

	&:hover {
		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			backdrop-filter: blur(8px);
			background: rgba(0, 0, 0, 0.3);
		}

		${Button} {
			display: block;
		}
	}

	${Button} {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: none;

		&::before {
			width: 100%;
			height: 100%;
		}
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const StyledWorkContent = styled.div`
	padding: 25px 20px;
`;

const Title = styled.h3`
	margin-bottom: 15px;
`;
const Text = styled.p`
	margin-bottom: 10px;
`;
