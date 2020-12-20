import React, { useState } from 'react'
import Layout from 'components/common/layout'
import Button from 'components/common/Button'
import Input from 'components/common/form'
import PasswordInput from 'components/common/PasswordInput'
import styled from 'styled-components'

const Form = styled.form`
width:100%;
max-width:400px;
background:white;
border:1px solid #eee;
padding:16px;
box-sizing:border-box;
border-radius:4px;
.alt-text{
    text-align:center;
    margin:6px;
    opacity:0.6;
}
`


export default function Login() {
    const [formField, setFormField] = useState({ username: '', password: '' });
    function handleInputChange(e) {
        e.persist();
        setFormField(
            s => ({
                ...s,
                [e.target.name]: e.target.value
            }
            )
        )
    }
    return (
        <Layout>

            <div>
                <h1>Login</h1>
                <Form>
                    <Input
                        value={formField.username}
                        onChange={handleInputChange}
                        type="text"
                        name="username"
                        placeholder="Username" />
                    <PasswordInput
                        value={formField.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    <Button Large Pink >Login</Button>
                    <div className="alt-text">or</div>
                    <Button >Register</Button>
                </Form>
            </div>

        </Layout>
    )
}
