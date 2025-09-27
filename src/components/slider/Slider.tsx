import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Slider: React.FC = () => {
	return (
		<StyledSlider>
			<FlexWrapper>
				<Slide>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit.
					</Text>
					<Name>@ivan ivanov</Name>
				</Slide>
			</FlexWrapper>
			<Pagination>
				<span></span>
				<span className={"active"}></span>
				<span></span>
			</Pagination>
		</StyledSlider>
	);
};

const StyledSlider = styled.div`
	max-width: 500px;
`;

const Slide = styled.div``;

const Text = styled.p``;

const Name = styled.span`
	display: inline-block;
	margin-top: 22px;
	margin-bottom: 38px;
	font-weight: 600;
	font-size: 16px;
	font-family: "Josefin Sans", sans-serif;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: ${Theme.color.font};
`;

const Pagination = styled.div`
	span {
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 20px;
		cursor: pointer;

		& + span {
			margin-left: 5px;
		}

		&.active {
			background-color: ${Theme.color.accent};
			width: 20px;
		}
	}
`;
