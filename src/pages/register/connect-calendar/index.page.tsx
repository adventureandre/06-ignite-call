import { Button, Heading, MultiStep, Text, TextInput } from '@advfw-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './style'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const session = useSession()

  //   async function handleRegister() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos á medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Text>{JSON.stringify(session.data)}</Text>

        <Button type="submit">
          Proximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
