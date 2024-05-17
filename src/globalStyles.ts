import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Container = styled.div`
  background-color: #000;  
`;

export const Title = styled.h2`
  color: #FFF;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  line-height: 45px;
  letter-spacing: -1px;

  
`;

export const ContainerMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);  

  @media(max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 35px;
  }  
`;

export const MovieItem = styled.li`
  margin-top: 20px;
  margin-left: 20px;
  padding-bottom: 20px;  

  img {
    border-radius: 20px;     
  }

  h2 {
    color: #FFF;   
    
    @media(max-width: 425px) {
      font-size: 25px;
    } 
  }

  p {
    color: #BFBFBF;
    max-width: 80%;    
    margin-top: 10px;
  }
`;