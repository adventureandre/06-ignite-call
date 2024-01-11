import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@advfw-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'Initial used zod ,useForm
import { z } from 'zod'

const timeIntervalsFormSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enable: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enable: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  async function handleSetTimeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponivel em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feria</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Proximo passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
