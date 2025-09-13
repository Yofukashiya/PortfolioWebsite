import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";

export const Slogan = () => {
	return (
		<StyledSlogan>
			<Container>
				<FlexWrapper direction="column" align="center">
					<SectionTitle>I Am Available For Freelance</SectionTitle>
					<StyledButton>Hire me</StyledButton>
				</FlexWrapper>
			</Container>
		</StyledSlogan>
	);
};

const StyledSlogan = styled.section`
	background-color: rgb(137, 68, 68);
	min-height: 30vh;
`;
