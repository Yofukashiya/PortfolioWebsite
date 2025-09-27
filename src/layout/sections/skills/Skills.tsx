import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

const skillData = [
	{
		iconId: "html",
		title: "html5",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "css",
		title: "css3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "react",
		title: "react",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "typescript",
		title: "typescript",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "styled-components",
		title: "Styled Components",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
	{
		iconId: "figma",
		title: "Web Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
	},
];

export const Skills: React.FC = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap="wrap" align="center" justify="center">
					{skillData.map((skill, index) => {
						return (
							<Skill
								iconId={skill.iconId}
								title={skill.title}
								description={skill.description}
								key={index}
							></Skill>
						);
					})}
				</FlexWrapper>
			</Container>
		</StyledSkills>
	);
};

const StyledSkills = styled.section``;
