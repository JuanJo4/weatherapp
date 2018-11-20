import styled from 'styled-components'

const Box = styled.div`
  background: url('../public/images/pattern.svg');
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }
`
export { Box as default }
