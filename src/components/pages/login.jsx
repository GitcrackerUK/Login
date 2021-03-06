import React, { useState, useEffect } from 'react'
import Layout from 'components/common/layout'
import Button from 'components/common/Button'
import Input from 'components/common/form'
import Spinner from 'components/common/Spinner'
import PasswordInput from 'components/common/PasswordInput'
import styled from 'styled-components'

const Form = styled.form`
margin:auto;
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
let timeout;

export default function Login() {
    const [formField, setFormField] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

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
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    useEffect(() => {
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <Layout>
            <div>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                   {loading ? <Spinner/> : <>
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
                    </>}
                    <Button Large Primary type="submit" disabled={loading}>{loading ? "Loading..." : "Login"}</Button>
                    {!loading &&
                        <>
                            <div className="alt-text">or</div>
                            <Button type="button" >Register</Button>
                        </>
                    }
                </Form>
            </div>

        </Layout>
    )
}
