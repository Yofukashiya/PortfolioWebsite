import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer_Styles";

const socialLinks = [
	{
		iconId: "instagram",
		href: "https://www.instagram.com",
	},
	{
		iconId: "telegram",
		href: "https://t.me",
	},
	{
		iconId: "vkontakte",
		href: "https://vk.com",
	},
	{
		iconId: "linkedin",
		href: "https://linkedin.com",
	},
];

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<Container>
				<FlexWrapper direction={"column"} align={"center"}>
					<S.Name>Roman</S.Name>
					<S.SocialIconsList>
						{socialLinks.map((link) => {
							return (
								<S.SocialIconItem key={link.iconId}>
									<S.SocialIconLink href={link.href}>
										<Icon
											iconId={link.iconId}
											width={"21px"}
											height={"21px"}
											viewBox={"0 0 21 21"}
										/>
									</S.SocialIconLink>
								</S.SocialIconItem>
							);
						})}
					</S.SocialIconsList>
					<S.Copyright>
						© 2025 Roman Maslov, All Rights Reserved.
					</S.Copyright>
				</FlexWrapper>
			</Container>
		</S.Footer>
	);
};
