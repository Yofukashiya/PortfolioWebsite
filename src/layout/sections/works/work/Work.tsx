import { Link } from "../../../../components/Link";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "./Work_Style";

type WorkPropsType = {
	src: string;
	title: string;
	text: string;
};

export const Work = (props: WorkPropsType) => {
	return (
		<S.Work>
			<S.ImageWrapper>
				<S.Image src={props.src} alt="" />
				<Button>View project</Button>
			</S.ImageWrapper>

			<S.WorkContent>
				<S.Title>{props.title}</S.Title>
				<S.Text>{props.text}</S.Text>
				<FlexWrapper gap={"20px"}>
					<Link href="#">Demo</Link>
					<Link href="#">Code</Link>
				</FlexWrapper>
			</S.WorkContent>
		</S.Work>
	);
};
