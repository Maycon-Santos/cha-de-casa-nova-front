import React, { useState  } from 'react'

import { Input } from '../../components/input'

import {
  Container,
  Header,
} from './login.styled'

export function Login () {
  const [phone, setPhone] = useState('')

  return (
    <Container>
      <Header>
        <h1>Bem-vindo ao nosso app "chá de casa nova".<br />Aqui você Vai poder selecionar o produto que poderá levar para o nosso chá que será dia 15/10/2019.</h1>
      </Header>
      <Input type="text" placeholder="Seu telefone" />

    </Container>
  )
}
