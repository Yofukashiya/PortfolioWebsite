import styled from "styled-components";
import photo from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

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
						<span>Hi There</span>
						<h1>I am Roman Maslov</h1>
						<span>A Web Developer.</span>
					</div>
					<div>
						<StyledImg src={photo} alt="Photo" />
					</div>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	background-color: rgb(122, 195, 213);
	height: 100vh;
`;

const StyledImg = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
	display: block;
`;
