import React from 'react'
import Layout from 'components/common/layout'
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
    return (
        <Layout>

            <div>
                <h1>Login</h1>
              <Form>
                  
              </Form>
            </div>

        </Layout>
    )
}
