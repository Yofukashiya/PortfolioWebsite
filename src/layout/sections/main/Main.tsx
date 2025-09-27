import photo from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
	return (
		<S.MainSection>
			<Container>
				<FlexWrapper
					direction="row"
					align="center"
					justify="space-around"
					wrap="wrap"
					gap="20px"
				>
					<div>
						<S.SmallText>Hi There, 👋</S.SmallText>
						<S.Name>
							I am <span>Roman Maslov</span>
						</S.Name>
						<S.MainTitle>A Web Developer.</S.MainTitle>
					</div>
					<S.PhotoWrapper>
						<S.MainImg src={photo} alt="Photo" />
					</S.PhotoWrapper>
				</FlexWrapper>
			</Container>
		</S.MainSection>
	);
};
