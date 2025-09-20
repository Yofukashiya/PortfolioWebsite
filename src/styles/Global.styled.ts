import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
@font-face {
    font-family: "Poppins";
    src: url("/src/assets/fonts/Poppins-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Josefin Sans";
    src: url("/src/assets/fonts/JosefinSans.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Josefin Sans";
    src: url("/src/assets/fonts/JosefinSans-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Josefin Sans";
    src: url("/src/assets/fonts/JosefinSans-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
}

*,
*::before,
*::after {
	box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
	margin: 0;
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
    color: ${Theme.color.font};
    line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Josefin Sans", sans-serif;
}

h3 {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    color: ${Theme.color.font};
}

p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: ${Theme.color.font};
}

img {
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

section {
    padding: 100px 0;
}

section:nth-of-type(odd) {
    background-color: ${Theme.color.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${Theme.color.secondaryBg};
}
`;
