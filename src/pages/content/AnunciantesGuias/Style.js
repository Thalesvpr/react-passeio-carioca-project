import styled from "styled-components";

const AnunciantesGuiaSectionStyled = styled.article`

div.Section {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

}

h1.title{
  font-size: 2rem;
  font-weight: 500;
  margin-block: 50px;

 
}


div.content {  
  background-color: var(--primaria);
  height: 500px;
  color: var(--neutral);
  display: flex;
  justify-content: center; 
  align-items: center; /* Centraliza os elementos verticalmente */
  gap: 120px;
  width: 100%;
}


div.Anunciantes {
 justify-content: center;
 align-items: center;
 width: 500px;
 text-align: left;

}

div.Guias {
  justify-content: center;
 align-items: center;
 width: 500px;
 text-align: right;

 

}


div.GuiasButton{
  
  

}

div.AnunciantesButton {
  

}
.HG1 {
  font-size: 24px;
}

.HG2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.AG1 {
  font-size: 24px;
}

.AG2 {
  font-size: 24px;
  margin-bottom: 20px;
}



p {
    margin-bottom: 20px; /* Espaçamento entre parágrafos */
}



 




 





   div.guia-modal{
    
    position: fixed; 
    background: white;
    height: 500px;
    width: 500px;
    border-radius: 13px;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 999; 
    
   }

   

div.anun-modal {
  position: fixed; 
    background: white;
    height: 500px;
    width: 500px;
    border-radius: 13px;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 999; 
    

}

div.X-anun {
  position: relative;
  cursor: pointer;
  font-size: 20px;
  color: var(--primaria);
  text-align: right;
  padding-right: 8px;
  top: -20px;
}

div.X-guia {
  position: relative;
  cursor: pointer;
  font-size: 20px;
  color: var(--primaria);
  text-align: right;
  padding-right: 8px;
  top: -20px;
}

.close-button-a {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: var(--primaria);
  text-align: right;
  left: 330px;
  display: inline-block;

  
  }
  

.close-button-g {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: var(--primaria);
  text-align: right;
  left: 388px;

 
    
}


   
  
   

`;

export { AnunciantesGuiaSectionStyled };