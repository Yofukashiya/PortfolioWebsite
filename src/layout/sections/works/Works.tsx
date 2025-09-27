import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import { Theme } from "../../../styles/Theme";

import socialProjectImg from "../../../assets/images/proj-1.webp";
import timerProjectImg from "../../../assets/images/proj-2.webp";

const workItems = ["all", "landing page", "react", "spa"];

export const Works = () => {
	return (
		<StyledWorks>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={workItems} />
				<FlexWrapper
					justify="space-between"
					align="flex-start"
					gap="30px"
				>
					<Work
						src={socialProjectImg}
						title="Social Network"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
					/>
					<Work
						src={timerProjectImg}
						title="Timer"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
					/>
				</FlexWrapper>
			</Container>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
	@media ${Theme.media.tablet} {
		${FlexWrapper} {
			flex-direction: column;
			align-items: center;
		}
	}
`;
