import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";

export const Contacts = () => {
	return (
		<StyledContacts>
			<Container>
				<FlexWrapper direction="column" align="center">
					<SectionTitle>Contacts</SectionTitle>
					<StyledForm>
						<StyledInput
							placeholder={"Name"}
							name={"name"}
							autoComplete={"on"}
						/>
						<StyledInput
							placeholder={"Email"}
							name={"email"}
							autoComplete={"on"}
						/>
						<StyledInput
							as={"textarea"}
							placeholder={"Message"}
							name={"message"}
						/>
						<Button type={"submit"}>Send message</Button>
					</StyledForm>
				</FlexWrapper>
			</Container>
		</StyledContacts>
	);
};

const StyledContacts = styled.section`
	background-color: rgb(139, 133, 133);
	min-height: 50vh;
`;

const StyledForm = styled.form`
	max-width: 540px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	${Button} {
		align-self: center;
	}
`;

const StyledInput = styled.input`
	width: 100%;
`;
