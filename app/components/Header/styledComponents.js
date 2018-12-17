import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

// En el caso de a y h1 se recomienda crear un nuevo styledComponent,
// Utilizar ese tipo de maquetación cuando son librerias y no podamos modificar la estructura
// Aqui quedarian entonces HeaderWrapper, Link, Title.
const HeaderWrapper = styled.header`
  background: #ff6335;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;

    h1 {
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
    }
  }

  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`
export { HeaderWrapper as default }
