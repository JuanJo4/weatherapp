import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;

    img {
        width: 200px;
        height: 200px;
        margin-top: 30px;
    }

    h2, h3 {
        font-size: 2.5em;
        line-height: 2em;
    }

    p {
        font-size: 1.8em;
        line-height: 1.8em;
    }
`
export { Wrapper as default }
