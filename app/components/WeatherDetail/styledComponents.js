import styled from 'styled-components'

export const Wrapper = styled.div`
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

export const BackButton = styled.button`
    padding: 15px;
    background: #ff6025;
    border-radius: 5px;
    color: #fff;
    margin: 50px 0px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    font-family: 'Raleway';
`
