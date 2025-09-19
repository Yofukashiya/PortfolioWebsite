import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
	position: relative;
	font-weight: 600;
	font-size: 36px;
	letter-spacing: 0.14em;
	color: #fff;
	text-align: center;
	margin-bottom: 90px;

	&::before {
		content: "";
		position: absolute;
		display: inline-block;
		width: 55px;
		height: 1px;
		background-color: ${Theme.color.accent};
		left: 50%;
		transform: translateX(-50%);
		bottom: -30px;
	}
`;
