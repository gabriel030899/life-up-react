import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*   {
    font-family: 'Archivo', sans-serif;
}

html{
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    box-sizing: border-box;
}

body, #root, .main{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

`;

export default GlobalStyle;