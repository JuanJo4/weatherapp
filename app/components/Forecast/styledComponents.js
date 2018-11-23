import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;

    h2 {
        font-size: 5em;
        padding: 0 100px;
    }
`
export const ForecastWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1em;
`
export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2em 1em 2em;

    a {
        transition: all 0.5s ease;
        position: relative;
        text-decoration: none;
        color: #0e0e0e;

        img {
            position: relative;
            width: 180px;
            height: 180px;
            margin: 20px;
        }

        h3 {
            font-size: 1.5em;
            margin-bottom: 0.5em;
        }

        &:hover {
            img {
                top: -5px;
            }
        }
    }
`

export const Hours = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        margin: 0.3em;

        img {
            width: 30px;
            height: 30px;
            margin: 0 0.5em;
        }

        p {
            margin: 0 0.5em;
            font-size: 0.8em;
        }
    }
`
