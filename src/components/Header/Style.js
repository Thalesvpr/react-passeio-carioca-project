import styled from "styled-components";

const HeaderStyled = styled.article`
    /* height: 100px; */

    width: 100%;
    /* background-color: green; */
    position: fixed;
    z-index: 999;
    color: var(--neutral);
    
    div.content{
        margin: 20px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 50px;
        .content-logo{
            display: flex;
            align-items: center;
            gap: 20px;
            
            h1{
                font-size: 1.5rem;
                font-weight: 300;
                text-align: start;
                
            }
            .logo{
                width: auto;
                height: 110px;
                
            }
        }
        
    }
    .not-visible{
        display: none;
    }

    .visible{
        display: flex;
    }

`




export { HeaderStyled }
    
    
    
    