import styled from "styled-components";

export const footer = styled.footer`
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        border: 1px solid aliceblue;
        border-radius: 50%;
        padding: .5rem;
        margin: 0 .5rem;
        background: transparent;
        cursor: pointer;

        display: flex;
        svg{
            color: aliceblue;
            font-size: 1.2rem;
        }
    }

    @media(min-width: 700px){
        justify-content: end;


        button{
            transition: .5s;
            svg{
                transition: .5s;
            }
        }
        button:hover{
            border: 1px solid hsl(300, 69%, 71%);
            
            svg{
                color: hsl(300, 69%, 71%);
            }
        }
    }
`