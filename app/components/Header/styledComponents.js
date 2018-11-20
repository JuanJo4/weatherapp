import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const HeaderWrapper = styled.header`
  background: #ff6335;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
  }

  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`
export { HeaderWrapper as default }
