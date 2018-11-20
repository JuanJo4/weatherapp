import styled from 'styled-components'

export const Wrapper = styled.div`
    color: #0e0e0e;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 5em;
        margin-top: 0.5em;
    }
`
export const ForecastWrapper = styled.div`
    color: #0e0e0e;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 2em;

    img {
        width: 300px;
        height: 300px;
    }

    h3 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }
`

export const Hours = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    div {
        text-align: center;
        margin: 0 0.3em;

        img {
            width: 30px;
            height: 30px;
        }

        p {
            font-size: 0.8em;
        }
    }
`
