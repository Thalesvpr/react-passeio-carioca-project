import styled from "styled-components";

const ModalStyled = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 20;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  .modal {
      overflow: hidden;
    
    position: relative;
    margin: ${(props) => props.side || '200px'};
    background-color: ${(props) => props.bgColor || '#fff' };
    width: 100%;
    height: ${(props) => `calc(100vh - ${props.side || '200px'})`};
    border-radius: 25px;
    }
    .modal-content{
        height: 100%;
        width:90%;
        margin: 0 auto;
        overflow: auto;
  }
  .close{
    position: absolute;
    color: var(--primaria);
    line-height: 0;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    background-color: transparent;
    &:hover{
        background-color: rgba(76,145,164,0.21);
    }
  }
`;

export default ModalStyled;
