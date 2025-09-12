import styled from "styled-components";

export const Container = styled.div`
	--container-width: 1140px;
	--container-offset: 15px;
	max-width: calc(var(--container-width) + var(--container-offset) * 2);
	padding: 0 var(--container-offset);
	margin: 0 auto;
`;
