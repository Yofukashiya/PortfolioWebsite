import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
	${font({ weight: 600, Fmin: 30, Fmax: 36 })}
	position: relative;
	letter-spacing: 0.14em;
	color: #fff;
	text-align: center;
	margin-bottom: 80px;

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

	@media ${Theme.media.tablet} {
		&::before {
			bottom: -24px;
		}
	}
`;
