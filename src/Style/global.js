import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
    }

    body{
        background:${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        transition-timing-function:ease-in;
        transition:all 0.5s;

        /* overflow-x:hidden; */
        max-width:1920px;
        margin-left:auto;
        margin-right:auto;
        min-width:480px;
        
        overflow-x:hidden;

        @media(max-width: 480px) {
            overflow:auto;
        };
    }
`;
