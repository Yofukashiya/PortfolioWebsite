import { Icon } from "../../../../components/icon/Icon";
import { S } from "./Skill_Style";

type SkillPropsType = {
	iconId: string;
	title: string;
	description: string;
};

export const Skill = (props: SkillPropsType) => {
	return (
		<S.Skill>
			<S.IconWrapper>
				<Icon iconId={props.iconId} />
			</S.IconWrapper>
			<S.SkillTitle>{props.title}</S.SkillTitle>
			<S.SkillDescription>{props.description}</S.SkillDescription>
		</S.Skill>
	);
};
