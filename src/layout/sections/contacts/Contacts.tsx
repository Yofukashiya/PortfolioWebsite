import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Theme } from "../../../styles/Theme";

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

const StyledContacts = styled.section``;

const StyledForm = styled.form`
	max-width: 540px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	textarea {
		resize: none;
		height: 155px;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	border: 1px solid #4a4a4a;
	background-color: ${Theme.color.secondaryBg};
	padding: 7px 15px;
	font-family: "Poppins", sans-serif;
	color: ${Theme.color.font};

	&::placeholder {
		font-weight: 400;
		font-size: 12px;
		letter-spacing: 0.05em;
		color: #495057;
	}

	&:focus-visible {
		outline: none;
		border: 1px solid ${Theme.color.accent};
	}
`;
