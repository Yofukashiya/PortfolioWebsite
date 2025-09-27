import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";

const Work = styled.div`
	background-color: ${Theme.color.secondaryBg};
	max-width: 540px;
	width: 100%;

	${Link} {
		padding: 10px 0;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	heigh: 260px;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		backdrop-filter: blur(8px);
		background: rgba(0, 0, 0, 0.3);
		opacity: 0;

		@media ${Theme.media.tablet} {
			opacity: 1;
		}
	}

	${Button} {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: none;

		&::before {
			width: 100%;
			height: 100%;
		}

		@media ${Theme.media.tablet} {
			display: block;
		}
	}

	&:hover {
		&::before {
			opacity: 1;
		}

		${Button} {
			display: block;
		}
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const WorkContent = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	padding: 25px 20px;

	@media ${Theme.media.tablet} {
		${FlexWrapper} {
			flex-direction: row !important;
			// align-items: flex-start !important;
		}
	}
`;

const Title = styled.h3`
	margin-bottom: 15px;
`;
const Text = styled.p`
	margin-bottom: 10px;
`;

export const S = {
	Work,
	ImageWrapper,
	Image,
	WorkContent,
	Title,
	Text,
};
