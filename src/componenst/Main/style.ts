import styled from "styled-components";

export const main = styled.main`
    padding: 2rem;
    display: flex;

    justify-content: center;
    article{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        color: aliceblue;
    }
    figure img {
        width: 100%;
        object-fit: contain;
    }
    section h2{ 
        font-family: "Poppins", serif;
        font-weight: 700;
        font-style: normal;

        margin: 0 0 .8rem 0;
    }
    section p{
        margin: 1.5rem 0;
    }

    section button{
        border: none;
        width: 10rem;
        padding: .7rem 0;
        margin: 2rem 0 0;
        border-radius: 15px;
        cursor: pointer;
    }

    @media(min-width: 700px){

        article{
            
            margin: 0 auto;
            flex-direction: row;

            figure{
                max-width: 100%;

            }
            section{
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 700px;
                height: 100%;
                padding: 2rem;
                text-align: left;

                h2{
                    font-size: 3rem;
                }

                button{
                    margin: 0;
                    transition: .5s;
                    box-shadow: -1px 2px 5px 0px rgba(0,0,0,0.75);
                    &:hover{
                        background:  hsl(300, 69%, 71%);
                    }
                }
            }
        }


    }
    @media(min-width: 1000px){
        article figure{

        }
    }
`