import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const ContactsSection = styled.section``;

const Form = styled.form`
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

const Input = styled.input`
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

export const S = {
	ContactsSection,
	Form,
	Input,
};
