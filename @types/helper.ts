import type { Plan } from './location'

export type Stepper = {
  step: number,
  quantityPeople: string | undefined,
  devices: string[],
  usage: string[],
  planRecommended: Plan | undefined | null
}
