import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const MainSection = styled.section`
	background-color: rgb(122, 195, 213);
	height: 100vh;
	display: flex;

	@media ${Theme.media.tablet} {
		padding: 100px 0;
	}
`;

const SmallText = styled.span`
	display: block;
	font-weight: 400;
	font-size: 14px;
	text-align: left;
`;

const Name = styled.h2`
	${font({
		fontFamily: "Josefin Sans",
		weight: 700,
		color: Theme.color.font,
		lineHeight: 1.2,
		Fmin: 36,
		Fmax: 50,
	})}
	letter-spacing: 0.05em;
	text-align: left;
	margin: 10px 0;

	@media ${Theme.media.mobile} {
		margin-top: 15px;
		margin-bottom: 20px;
	}

	span {
		position: relative;
		z-index: 1;
		white-space: nowrap;

		&::before {
			content: "";
			position: absolute;
			top: 70%;
			display: inline-block;
			width: 100%;
			height: 20px;
			background-color: ${Theme.color.accent};
			z-index: -1;
		}
	}
`;

const MainTitle = styled.h1`
	${font({ weight: 400, Fmin: 20, Fmax: 27 })}
	text-align: left;
`;

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 1;
	margin-right: 25px;

	@media screen and (max-width: 842px) {
		margin-top: 45px;
	}

	&::before {
		content: "";
		display: block;
		position: absolute;
		top: -24px;
		left: 24px;
		width: 360px;
		height: 470px;
		border: 5px solid ${Theme.color.accent};
		z-index: -1;

		@media ${Theme.media.mobile} {
			width: 314px;
			height: 414px;
			top: -15px;
			left: 3px;
		}
	}
`;

const MainImg = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
	display: block;

	@media ${Theme.media.mobile} {
		width: 310px;
		height: 380px;
	}
`;

export const S = {
	MainSection,
	SmallText,
	Name,
	MainTitle,
	PhotoWrapper,
	MainImg,
};
