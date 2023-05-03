type TAnimal = 'cat' | 'dog' | 'bird'

enum ResponseStatus {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'not available',
}

interface IAnimal {
  animal: TAnimal
  breed: string
  sterilized?: string
}

interface IAnimalAvailableData extends IAnimal {
  location: string
  age?: number
}

interface IAnimalNotAvailableData {
  message: string
  nextUpdateIn: Date
}

interface IAnimalAvailableResponse {
  status: ResponseStatus.AVAILABLE
  data: IAnimalAvailableData
}
interface IAnimalNotAvailableResponse {
  status: ResponseStatus.NOT_AVAILABLE
  data: IAnimalNotAvailableData
}

type TRespons = IAnimalAvailableResponse | IAnimalNotAvailableResponse

function isAvailable(response: TRespons): response is IAnimalAvailableResponse {
  return response.status === 'available'
}

function checkAnimalData(animal: TRespons): IAnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`
  }
}
