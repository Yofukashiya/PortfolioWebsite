import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap="wrap" justify="space-between" align="center">
					<Skill
						iconId="html"
						title="html5"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
					<Skill
						iconId="css"
						title="css3"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
					<Skill
						iconId="react"
						title="react"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
					<Skill
						iconId="typescript"
						title="typescript"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
					<Skill
						iconId="styled-components"
						title="Styled Components"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
					<Skill
						iconId="figma"
						title="Web Design"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
					></Skill>
				</FlexWrapper>
			</Container>
		</StyledSkills>
	);
};

const StyledSkills = styled.section``;
