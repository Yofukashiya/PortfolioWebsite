import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { css } from "styled-components";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={false}>
				<span></span>
			</BurgerButton>

			<MobileMenuPopup isOpen={false}>
				<ul>
					{props.menuItems.map((item, index) => {
						return (
							<ListItem key={index}>
								<Link href={`#${item.toLowerCase()}`}>
									{item}
									<Mask>
										<span>{item}</span>
									</Mask>
									<Mask>
										<span>{item}</span>
									</Mask>
								</Link>
							</ListItem>
						);
					})}
				</ul>
			</MobileMenuPopup>
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav`
	display: none;

	@media ${Theme.media.tablet} {
		display: block;
	}
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(31, 31, 32, 0.9);
	z-index: 20;
	display: none;

	${(props) =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			display: flex;
			align-items: center;
			justify-content: center;
		`}

	ul {
		display: flex;
		gap: 30px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	top: -100px;
	right: -100px;
	width: 200px;
	height: 200px;
	z-index: 30;

	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${Theme.color.font};
		position: absolute;
		left: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`}

		&::before {
			content: "";
			display: block;
			width: 36px;
			height: 2px;
			background-color: ${Theme.color.font};
			position: absolute;
			transform: translateY(-10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: translateY(0) rotate(-45deg);
				`}
		}

		&::after {
			content: "";
			display: block;
			width: 26px;
			height: 2px;
			background-color: ${Theme.color.font};
			position: absolute;
			transform: translateY(10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					width: 36px;
					transform: translateY(0) rotate(45deg);
				`}
		}
	}
`;

const Link = styled.a`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 700;
	font-size: 24px;
	color: transparent;
	position: relative;
	display: inline-block;

	&:focus {
		outline: 2px solid ${Theme.color.accent};
		outline-offset: 4px;
		border-radius: 4px;
	}

	&:focus-visible {
		outline: 2px solid ${Theme.color.accent};
		outline-offset: 4px;
		border-radius: 4px;
	}
`;

const Mask = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow: hidden;
	color: ${Theme.color.accent};
	pointer-events: none;

	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`;

const ListItem = styled.li`
	position: relative;

	&::before {
		content: "";
		display: inline-block;
		height: 2px;
		background-color: ${Theme.color.accent};
		position: absolute;
		top: 50%;
		left: -10px;
		right: -10px;
		z-index: 1;
		transform: scale(0);
	}

	&:hover,
	&:focus-within {
		&::before {
			transform: scale(1);
		}

		${Mask} {
			color: ${Theme.color.font};
			transform: skewX(12deg) translateX(3px);

			& + ${Mask} {
				transform: skewX(12deg) translateX(-3px);
			}
		}
	}
`;
