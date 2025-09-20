import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
	return (
		<StyledTestimony>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper justify="center" align="center" direction="column">
					<IconWrapper>
						<Icon iconId="quote" />
					</IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
	background-color: rgb(248, 148, 54);

	${IconWrapper} {
		margin-top: 40px;
		margin-bottom: 82px;
	}
`;
