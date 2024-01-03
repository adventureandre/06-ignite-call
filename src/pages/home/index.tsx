import { Heading, Text } from '@advfw-ui/react'
import { Container, Hero, Preview } from './styles'

import previesImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previesImage}
          height={400}
          quality={100}
          priority
          alt="Calendario simbolizando aplicaçao em funcionamento"
        />
      </Preview>
    </Container>
  )
}
