import React, {useState}from 'react'
import Layout from 'components/common/layout'
import Input from 'components/common/form'
import styled from 'styled-components'

const Form = styled.form`
width:100%;
max-width:400px;
background:white;
border:1px solid #eee;
padding:16px;
box-sizing:border-box;
border-radius:4px;
`


export default function Login() {
    const [formField, setFormField] = useState({username:'',password:''});
    function handleInputChange(e){
        e.persist();
        setFormField(
            s=>({
                ...s,
                [e.target.name]:e.target.value
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
                </Form>
                <Form>
                    <Input 
                    value={formField.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password" 
                    placeholder="Password" />
                </Form>
            </div>

        </Layout>
    )
}
