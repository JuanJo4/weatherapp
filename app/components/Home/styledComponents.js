import styled from 'styled-components'
// import breakpoint from 'styled-components-breakpoint'

export const Container = styled.div`
  font-family: 'Raleway';
  color: #fff;
`

export const Box = styled.div`
  background: url('../public/images/pattern.svg');
  background-size: cover;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }
`
