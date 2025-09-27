import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
	display: inline-block;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 0.07em;
	text-transform: uppercase;
	color: ${Theme.color.font};
	position: relative;
	width: 174px;
	height: 32px;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		display: inline-block;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		width: 50%;
		height: 10px;
		background-color: ${Theme.color.accent};
		z-index: -1;
	}

	&:hover {
		&::before {
			width: 100%;
			height: 100%;
		}
	}
`;
