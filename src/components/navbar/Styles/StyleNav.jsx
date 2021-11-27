import styled from 'styled-components'

export const Wrapper = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  border-bottom: 2px solid #b4aeac62;
    
  h2 {
    /* color: #f1356d; */
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
  }
  a:hover {
    color: #f1356d;
  }
`;