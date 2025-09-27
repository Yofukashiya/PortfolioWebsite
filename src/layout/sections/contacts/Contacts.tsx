import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { S } from "./Contacts_Style";

export const Contacts: React.FC = () => {
	return (
		<S.ContactsSection>
			<Container>
				<FlexWrapper direction="column" align="center">
					<SectionTitle>Contacts</SectionTitle>
					<S.Form>
						<S.Input
							placeholder={"Name"}
							name={"name"}
							autoComplete={"on"}
						/>
						<S.Input
							placeholder={"Email"}
							name={"email"}
							autoComplete={"on"}
						/>
						<S.Input
							as={"textarea"}
							placeholder={"Message"}
							name={"message"}
						/>
						<Button type={"submit"}>Send message</Button>
					</S.Form>
				</FlexWrapper>
			</Container>
		</S.ContactsSection>
	);
};
