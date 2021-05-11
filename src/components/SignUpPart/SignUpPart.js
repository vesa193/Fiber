import React from 'react';
import { Title, Text, Input, Link, Button } from '../common/common';
import './SignUpPart.scss'

export const SignUpPart = () => {
  return (
    <div className="sign-up">
      <h4 className="sign-up-heading">Fiber</h4>
      <Title>Create your Fiber account</Title>
      <div className="inputs-group">
        <Input type="name" />
        <Input type="email" />
        <Input type="password" />
      </div>

      <Input type="checkbox" />
      <Button>Create Fiber Account</Button>
      <Text className="sign-up-down-text">Already have an account? <Link>Sign in</Link></Text>
    </div>
  )
}
