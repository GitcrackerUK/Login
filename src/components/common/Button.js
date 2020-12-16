import styled from 'styled-components'

const Button = styled.button`
color:green;
height:20px;
width:80px;
&:disabled{
    /* color:black; */
    opacity:0.7;
}
`
export default Button