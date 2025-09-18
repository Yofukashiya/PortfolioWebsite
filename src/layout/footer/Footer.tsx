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
							<SocialIconLink>
								<Icon
									iconId={"instagram"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink>
								<Icon
									iconId={"telegram"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink>
								<Icon
									iconId={"vkontakte"}
									width={"21px"}
									height={"21px"}
									viewBox={"0 0 21 21"}
								/>
							</SocialIconLink>
						</SocialIconItem>
						<SocialIconItem>
							<SocialIconLink>
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
	min-height: 30vh;
`;

const Name = styled.span``;

const SocialIconsList = styled.ul`
	display: flex;
	gap: 20px;
`;

const SocialIconItem = styled.li``;

const SocialIconLink = styled.a``;

const Copyright = styled.small``;
