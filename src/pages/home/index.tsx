import { Heading, Text } from '@advfw-ui/react'
import { Conteiner, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Conteiner>
      <Hero>
        <Heading size>Agendamento descomplicado</Heading>
        <Text>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>
      <Preview></Preview>
    </Conteiner>
  )
}
