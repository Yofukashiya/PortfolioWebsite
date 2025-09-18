import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href="">
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
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
	}
`;

const Link = styled.a`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 700;
	font-size: 24px;
	color: transparent;
`;

const Mask = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow: hidden;
	color: ${Theme.color.accent};

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

	&:hover {
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
