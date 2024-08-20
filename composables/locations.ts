import type { Location } from '~/@types/location'
import data from '~/static/data.json'

export function useLocations() {
  const router = useRouter()
  const locations = useState<Location[]>('locations', () => [])
  const selectedLocation = useState<Location | null>('selectedLocation', () => null)
  const selectedLocationId = ref<string>()

  const loadLocations = () => {
    locations.value = data.locations
  }

  const saveSelectedLocationId = (id: string) => {
    localStorage.setItem('selectedLocationId', id.toString())
  }

  const loadSelectedLocationId = (): string | null => {
    return localStorage.getItem('selectedLocationId')
  }

  const initializeLocations = () => {
    loadLocations()

    const savedId = loadSelectedLocationId()
    if (savedId && locations.value.some(loc => loc.id === savedId)) {
      selectedLocationId.value = savedId
    } else if (locations.value.length > 0) {
      selectedLocationId.value = locations.value[0].id
      saveSelectedLocationId(selectedLocationId.value)
    }
  }

  watch(selectedLocationId, (id, oldId) => {
    if (id && id !== oldId) {
      saveSelectedLocationId(id)
      selectedLocation.value = locations.value.find(loc => loc.id === id) || null

      if (router.currentRoute.value.name !== 'support' &&  (!selectedLocation.value || !selectedLocation.value.active)) {
        console.log('redirecting to support')
        return router.push({ name: 'support' })
      }

      if (router.currentRoute.value.name === 'support' && selectedLocation.value && selectedLocation.value.active) {
        console.log('redirecting to home')
        return router.push({ name: 'home' })
      }
    }
  })

  return {
    locations,
    selectedLocation,
    selectedLocationId,
    initializeLocations
  }
}
