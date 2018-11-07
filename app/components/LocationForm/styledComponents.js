import styled from 'styled-components'

export const Form = styled.form`
    &.lineal {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &.stacked {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    height: 45px;
    width: 150px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 0 10px;
`

export const SubmitButton = styled.input`
    background-color: #5cb85c;
    border: 1px solid #4cae4c;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
    line-height: 14px;
    margin: 10px;
`
