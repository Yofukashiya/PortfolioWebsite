import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Link = styled.a`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	padding: 10px;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		display: inline-block;
		bottom: 6px;
		left: 0;
		right: 0;
		background-color: ${Theme.color.accent};
		z-index: -1;
	}

	&:hover {
		&::before {
			height: 10px;
		}
	}
`;
