<script setup lang="ts">
import type { Stepper } from '~/@types/helper'
import {
  RadioGroupRoot,
  RadioGroupItem
} from 'radix-vue'

const { selectedLocation } = useLocations()

const stepper: Stepper = reactive({
  step: 1,
  quantityPeople: undefined,
  devices: [],
  usage: [],
  planRecommended: undefined
})

const handleChangeDevice = (devices: string[]) => {
  stepper.devices = devices
}

const handleChangeUsage = (usage: string[]) => {
  stepper.usage = usage
}

const restartStepper = () => {
  stepper.step = 1
  stepper.quantityPeople = undefined
  stepper.devices = []
  stepper.usage = []
  stepper.planRecommended = undefined
}

function recommendedPlan() {
  const { quantityPeople, devices, usage } = stepper
  const points = Number(quantityPeople!) + Number(devices.length) + Number(usage.length)

  if (selectedLocation.value && selectedLocation.value.plans && !!selectedLocation.value.plans.length) {
    if (points <= 4) stepper.planRecommended = selectedLocation.value.plans.find((plan) => plan.slug === 'basic')
    else if (points >= 5 && points <= 8) stepper.planRecommended = selectedLocation.value.plans.find((plan) => plan.slug === 'medium')
    else stepper.planRecommended = selectedLocation.value.plans.find((plan) => plan.slug === 'advanced')
    stepper.step = 4
  }
}
</script>

<template>
  <div class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>Não sabe qual plano escolher?</UiSectionTitle>
    <div class="mt-8 flex w-full flex-col text-gray-950">
      <div class="w-full font-medium">
        <p>Deixe que a Fran te ajuda!</p>
        <p>Siga os passos abaixo e encontre o plano ideal para você.</p>
      </div>
      <div class="mt-8 flex w-full">
        <div class="hidden min-w-fit xl:block">
          <img class="aspect-[1/3]" src="/images/person.png" alt="Imagem do mascote da Franet Telecom" >
        </div>
        <div v-if="stepper.step === 1" class="flex w-full flex-col xl:items-center">
          <p>Quantas pessoas utilizam internet em sua casa?</p>
          <RadioGroupRoot v-model="stepper.quantityPeople" class="mt-12 flex w-full max-w-3xl flex-col items-center justify-between gap-2 lg:flex-row">
            <div class="h-24 w-36">
              <RadioGroupItem  id="1" value="1" class="peer sr-only" />
              <UiLabel
                for="1"
                class="relative flex size-full flex-col items-center justify-center rounded-md bg-primary text-3xl font-bold text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                1
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <RadioGroupItem id="2" value="2" class="peer sr-only" />
              <UiLabel
                for="2"
                class="relative flex size-full flex-col items-center justify-center rounded-md bg-primary text-3xl font-bold text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                2
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <RadioGroupItem id="3" value="3" class="peer sr-only" />
              <UiLabel
                for="3"
                class="relative flex size-full flex-col items-center justify-center rounded-md bg-primary text-3xl font-bold text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                3
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <RadioGroupItem id="4" value="4" class="peer sr-only" />
              <UiLabel
                for="4"
                class="relative flex size-full flex-col items-center justify-center rounded-md bg-primary text-3xl font-bold text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                4
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <RadioGroupItem id="5" value="5" class="peer sr-only" />
              <UiLabel
                for="5"
                class="relative flex size-full flex-col items-center justify-center rounded-md bg-primary text-3xl font-bold text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                +5
              </UiLabel>
            </div>
          </RadioGroupRoot>
          <div class="mt-8 flex w-full max-w-3xl justify-end">
            <UiButton :disabled="!stepper.quantityPeople" @click="stepper.step = 2">Próximo</UiButton>
          </div>
        </div>
        <div v-if="stepper.step === 2" class="flex w-full flex-col xl:items-center">
          <p>O que utilizam quando estão conectados?</p>
          <div class="mt-12 flex w-full max-w-3xl flex-col items-center justify-between gap-2 lg:flex-row">
            <div class="h-24 w-36">
              <UiCheckbox
                id="smartphone" class="peer sr-only" :checked="stepper.devices.includes('smartphone')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.devices)) {
                    handleChangeDevice(checked ? [...stepper.devices, 'smartphone']: stepper.devices.filter((device) => device !== 'smartphone'))
                  }
                }" />
              <UiLabel
                for="smartphone"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconSmartphone />
                <span class="text-center">Smartphone</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="tablet" class="peer sr-only" :checked="stepper.devices.includes('tablet')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.devices)) {
                    handleChangeDevice(checked ? [...stepper.devices, 'tablet']: stepper.devices.filter((device) => device !== 'tablet'))
                  }
                }" />
              <UiLabel
                for="tablet"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconTablet />
                <span class="text-center">Tablet</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="television" class="peer sr-only" :checked="stepper.devices.includes('television')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.devices)) {
                    handleChangeDevice(checked ? [...stepper.devices, 'television']: stepper.devices.filter((device) => device !== 'television'))
                  }
                }" />
              <UiLabel
                for="television"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconTV />
                <span class="text-center">Televisão</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="notebook" class="peer sr-only" :checked="stepper.devices.includes('notebook')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.devices)) {
                    handleChangeDevice(checked ? [...stepper.devices, 'notebook']: stepper.devices.filter((device) => device !== 'notebook'))
                  }
                }" />
              <UiLabel
                for="notebook"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconNotebook />
                <span class="text-center">Notebook</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="videogame" class="peer sr-only" :checked="stepper.devices.includes('videogame')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.devices)) {
                    handleChangeDevice(checked ? [...stepper.devices, 'videogame']: stepper.devices.filter((device) => device !== 'videogame'))
                  }
                }" />
              <UiLabel
                for="videogame"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconVideoGame />
                <span class="text-center">Vídeo Game</span>
              </UiLabel>
            </div>
          </div>
          <div class="mt-8 flex w-full max-w-3xl justify-end space-x-4">
            <UiButton variant="ghost"  @click="stepper.step = 1">Voltar</UiButton>
            <UiButton :disabled="!stepper.devices.length" @click="stepper.step = 3">Próximo</UiButton>
          </div>
        </div>
        <div v-if="stepper.step === 3" class="flex w-full flex-col xl:items-center">
          <p>Como vocês utilizam a internet?</p>
          <div class="mt-12 flex max-w-3xl flex-col items-center justify-between gap-2 lg:flex-row">
            <div class="h-24 w-36">
              <UiCheckbox
                id="message" class="peer sr-only" :checked="stepper.usage.includes('message')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.usage)) {
                    handleChangeUsage(checked ? [...stepper.usage, 'message']: stepper.usage.filter((use) => use !== 'message'))
                  }
                }" />
              <UiLabel
                for="message"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconMessage />
                <span class="text-center">Troca de mensagens</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="music" class="peer sr-only" :checked="stepper.usage.includes('music')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.usage)) {
                    handleChangeUsage(checked ? [...stepper.usage, 'music']: stepper.usage.filter((use) => use !== 'music'))
                  }
                }" />
              <UiLabel
                for="music"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconMusic />
                <span class="text-center">Ouvir músicas</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="downloader" class="peer sr-only" :checked="stepper.usage.includes('downloader')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.usage)) {
                    handleChangeUsage(checked ? [...stepper.usage, 'downloader']: stepper.usage.filter((use) => use !== 'downloader'))
                  }
                }" />
              <UiLabel
                for="downloader"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconDowloader />
                <span class="text-center">Baixar filmes</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="video" class="peer sr-only" :checked="stepper.usage.includes('video')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.usage)) {
                    handleChangeUsage(checked ? [...stepper.usage, 'video']: stepper.usage.filter((use) => use !== 'video'))
                  }
                }" />
              <UiLabel
                for="video"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconVideo />
                <span class="text-center">Assistir vídeos</span>
              </UiLabel>
            </div>
            <div class="h-24 w-36">
              <UiCheckbox
                id="game" class="peer sr-only" :checked="stepper.usage.includes('game')" @update:checked="(checked: boolean) => {
                  if (Array.isArray(stepper.usage)) {
                    handleChangeUsage(checked ? [...stepper.usage, 'game']: stepper.usage.filter((use) => use !== 'game'))
                  }
                }" />
              <UiLabel
                for="game"
                class="relative flex size-full flex-col items-center justify-between rounded-md bg-primary p-2 font-medium text-white before:pointer-events-none before:absolute before:bottom-1 before:left-1 before:size-full before:rounded-md before:border-2 before:border-secondary before:content-[''] hover:cursor-pointer hover:bg-green-700 peer-data-[state=checked]:bg-green-700"
              >
                <UiIconGame />
                <span class="text-center">Jogos online</span>
              </UiLabel>
            </div>
          </div>
          <div class="mt-8 flex w-full max-w-3xl justify-end space-x-4">
            <UiButton variant="ghost" @click="stepper.step = 2">Voltar</UiButton>
            <UiButton :disabled="!stepper.usage.length" @click="recommendedPlan()">Próximo</UiButton>
          </div>
        </div>
        <div v-if="stepper.step === 4" class="flex w-full flex-col xl:items-center">
          <p>Ok! Acho que já descobrimos qual é o melhor plano para você.</p>
          <div class="mt-12 flex max-w-3xl flex-col items-center justify-between gap-2 lg:flex-row">
            <UiCardPlan class="max-w-sm text-white">
              <UiCardPlanSpeed :speed="stepper.planRecommended!.speed" />
              <UiCardPlanResource class="mt-8" :resources="stepper.planRecommended!.resources" />
              <UiCardPlanPrice class="mt-8" :price="stepper.planRecommended!.price" />
              <UiButton class="mt-8" variant="secondary" as-child>
                <NuxtLink :href="stepper.planRecommended!.button.url" target="_blank">{{ stepper.planRecommended!.button.text }}</NuxtLink>
              </UiButton>
            </UiCardPlan>
          </div>
          <div class="mt-8 flex w-full max-w-3xl items-center justify-center space-x-4">
            <UiButton variant="ghost"  @click="stepper.step = 3">Voltar</UiButton>
            <UiButton :disabled="!stepper.usage.length" @click="restartStepper">Recomeçar</UiButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
