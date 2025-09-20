import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FlexWrapper direction={"column"} align={"center"}>
					<Name>Roman</Name>
					<SocialIconsList>
						<SocialIconItem>
							<SocialIconLink href={"https://www.instagram.com"}>
								<Icon
									iconId={"instagram"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink href={"https://t.me"}>
								<Icon
									iconId={"telegram"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink href={"https://vk.com"}>
								<Icon
									iconId={"vkontakte"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink href={"https://linkedin.com"}>
								<Icon
									iconId={"linkedin"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
					</SocialIconsList>
					<Copyright>
						© 2025 Roman Maslov, All Rights Reserved.
					</Copyright>
				</FlexWrapper>
			</Container>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
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
