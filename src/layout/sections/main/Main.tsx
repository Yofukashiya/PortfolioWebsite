import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper
					direction="row"
					align="center"
					justify="space-between"
				>
					<div>
						<SmallText>Hi There, 👋</SmallText>
						<Name>
							I am <span>Roman Maslov</span>
						</Name>
						<MainTitle>A Web Developer.</MainTitle>
					</div>
					<PhotoWrapper>
						<StyledImg src={photo} alt="Photo" />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	background-color: rgb(122, 195, 213);
	height: 100vh;
	display: flex;
`;

const StyledImg = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
	display: block;
`;

const SmallText = styled.span`
	display: block;
	font-weight: 400;
	font-size: 14px;
	text-align: left;
`;

const Name = styled.h2`
	font-weight: 700;
	font-size: 50px;
	letter-spacing: 0.05em;
	text-align: left;
	margin: 10px 0;

	span {
		position: relative;
		z-index: 1;

		&::before {
			content: "";
			position: absolute;
			top: 70%;
			display: inline-block;
			width: 100%;
			height: 20px;
			background-color: ${Theme.color.accent};
			z-index: -1;
		}
	}
`;

const MainTitle = styled.h1`
	font-weight: 400;
	font-size: 27px;
	text-align: left;
`;

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		top: -24px;
		left: 24px;
		width: 360px;
		height: 470px;
		border: 5px solid ${Theme.color.accent};
		z-index: -1;
	}
`;
