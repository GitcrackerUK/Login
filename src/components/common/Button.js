import styled,{css}from 'styled-components'

const Button = styled.button`
    height:20px;
    width:80px;
    color:green;
    font-size:12px;
    font-weight:bold;
${
    props=>props.Large ? css`
    font-size:14px;
    height:30px;
    width:100px;
    color:green;
    font-weight:bold;
    `:css`
    null
      `
}

&:hover{
    opacity:0.9;
}
`
export default Button