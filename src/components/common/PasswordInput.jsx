import React, { useState } from 'react'
import styled from 'styled-components'
import Input from 'components/common/form'


const PasswordInputWrapper = styled.div`
display:flex;
`

const StPasswordInput = styled(Input).attrs(() => ({
    type: "password",
    placeholder: "Password"
}))`
border-top-right-radius:0px;
border-bottom-right-radius:0px;
`
const StPasswordInputShow = styled(Input).attrs(() => ({
    type: "text",
    placeholder: "Password"
}))`

border-top-right-radius:0px;
border-bottom-right-radius:0px;
`
const ToggledButton= styled.div`
height:40px;
border:1px solid #ccc;
box-sizing:border-box;
font-size:0.9em;
display:flex;
padding:10px;
border-left:0px;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
background:white;
font-weight:bold;
cursor:pointer;
user-select:none;
color:black;
`

export default function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <PasswordInputWrapper>
               {showPassword?  <StPasswordInputShow {...props}/> : <StPasswordInput {...props} /> } 
            <ToggledButton onClick={()=>setShowPassword((s)=>!s)}>
               { showPassword?'Hide':'Show'}
            </ToggledButton>
            </PasswordInputWrapper>
        </>
    )
} 
