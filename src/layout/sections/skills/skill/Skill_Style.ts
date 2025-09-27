import styled from "styled-components";

const Skill = styled.div`
	width: 380px;
	padding: 62px 20px 40px;

	@media screen and (max-width: 842px) {
		width: 330px;
		padding: 42px 10px 30px;
	}
`;

const IconWrapper = styled.div`
	position: relative;

	&::before {
	content: "";
	display: inline-block;
	width: 80px;
	height: 80px;
	background: rgba(255, 255, 255, 0.1);
	transform: rotate(45deg) translate(-50%, -50%);
	position: absolute;
	left: 50%;
	top: 50%;
	transform-origin: top left;
`;

const SkillTitle = styled.h3`
	text-transform: uppercase;
	margin-bottom: 15px;
	margin-top: 70px;
`;

const SkillDescription = styled.p`
	text-align: center;
`;

export const S = {
	Skill,
	IconWrapper,
	SkillTitle,
	SkillDescription,
};
