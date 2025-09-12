import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
	iconId: string;
	title: string;
	description: string;
};

export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<Icon iconId={props.iconId} />
			<SkillTitle>{props.title}</SkillTitle>
			<SkillDescription>{props.description}</SkillDescription>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
	width: 33%;
	background-color: rgb(161, 117, 156);
	border: 1px solid black;
`;
const SkillTitle = styled.h3`
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #fff;
`;
const SkillDescription = styled.p``;
