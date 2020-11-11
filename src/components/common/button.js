import styled from "styled-components"

const Button = styled.button`
margin:10px auto;
color:white;
background:black;
font-weight:bold;
padding:8px;
border-radius:4px;
box-shadow:none;
font-size:1em;
border:1px solid gray;
width:50%;
display:block;
white-space:none;
&:disabled{
    color:gray;
    background-color:white !important;
}
&:hover{
    opacity:0.6;
}
`

export {Button}