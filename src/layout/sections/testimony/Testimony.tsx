import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";
// IconWrapper from Skill_Style
import { S } from "../skills/skill/Skill_Style";

export const Testimony = () => {
	return (
		<StyledTestimony>
			<Container>
				<SectionTitle>Testimony</SectionTitle>
				<FlexWrapper justify="center" align="center" direction="column">
					<S.IconWrapper>
						<Icon iconId="quote" />
					</S.IconWrapper>
					<Slider />
				</FlexWrapper>
			</Container>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
	background-color: rgb(248, 148, 54);

	${S.IconWrapper} {
		margin-top: 40px;
		margin-bottom: 82px;
	}
`;
