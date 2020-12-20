import styled,{css} from 'styled-components'

const Button = styled.button`
${
    p=>p.Large?css`
    font-size:1.1em;
    height:50px;
    `:css`
    font-size:1em;
    height:40px;
    `
}
color:#fff;
font-weight:bold;
padding:4px 8px;
border: 1px solid #ccc;
border-radius:4px;
outline:none;
width:100%;
box-sizing:border-box;
background-color:${p=>p.Pink?"#f8049c":"#fdd54f"};
&:disabled{
background: gray;
}
`

export default Button