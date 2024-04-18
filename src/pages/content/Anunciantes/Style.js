import styled from "styled-components"

const AnunciantesSectionStyled = styled.article`
div.section-title{
    background-color: none;
    display: flex;
    justify-content: center; 
    align-items: center;
    color: var(--contrast);
    
}
div.section-content{
    background-color: var(--primaria);
    padding: 100px;
    height: 100%;
    color: var(--neutral);
    display: flex;
    justify-content: space-between;
    
}

div.content-cta{
    width: 300px;
    

}

h2.content-subtitle{
    
}
p.content-text{
    
}

p.content-subtext{
    
    
    
}

div.content-button {
    padding-top: 100px;
    
}

div.content-table{
    height: 400px;
    width: 720px;
    background-color: var(--secundaria);
    border-radius: 30px;
}
p.tabela{
    color: var(--primaria);
    padding-left: 30px;
}
`


export {AnunciantesSectionStyled}