import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Footer = styled.footer`
	background-color: ${Theme.color.primaryBg};
	padding: 40px 0;
`;

const Name = styled.span`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 700;
	font-size: 22px;
	letter-spacing: 0.14em;
	color: ${Theme.color.font};
`;

const SocialIconsList = styled.ul`
	display: flex;
	gap: 20px;
	margin: 30px 0;
`;

const SocialIconItem = styled.li``;

const SocialIconLink = styled.a`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.1);
	width: 35px;
	height: 35px;
	border-radius: 50%;
	color: ${Theme.color.accent};

	&:hover {
		background-color: ${Theme.color.accent};
		color: ${Theme.color.primaryBg};
		transform: translateY(-4px);
	}
`;

const Copyright = styled.small`
	font-weight: 400;
	font-size: 12px;
	text-align: center;
	color: rgba(255, 255, 255, 0.5);
`;

export const S = {
	Footer,
	Name,
	SocialIconsList,
	SocialIconItem,
	SocialIconLink,
	Copyright,
};
