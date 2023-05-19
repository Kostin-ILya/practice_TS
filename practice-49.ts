// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface IPlayerData<S, T> {
  game: S
  hours: T
  server: string
}

const player1: IPlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic',
}

const player2: IPlayerData<number, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade',
}

const player3: IPlayerData<string, object> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: 'chess',
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureNames {
  RECT = 'rect',
  TRIANGLE = 'triangle',
  LINE = 'line',
  CIRCLE = 'circle',
}

interface IFigure {
  name: FigureNames
}

interface AmountOfFigures {
  squares: number
  circles: number
  triangles: number
  others: number
}

function calculateAmountOfFigures<T extends IFigure>(
  figures: T[]
): AmountOfFigures {
  const res = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  }

  figures.forEach(({ name }) => {
    switch (name) {
      case FigureNames.RECT:
        res.squares++
        break
      case FigureNames.CIRCLE:
        res.circles++
        break
      case FigureNames.TRIANGLE:
        res.triangles++
        break
      default:
        res.others++
    }
  })

  return res
}

const data = [
  {
    name: FigureNames.RECT,
    data: { a: 5, b: 10 },
  },
  {
    name: FigureNames.RECT,
    data: { a: 6, b: 11 },
  },
  {
    name: FigureNames.TRIANGLE,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: FigureNames.LINE,
    data: { l: 15 },
  },
  {
    name: FigureNames.CIRCLE,
    data: { r: 10 },
  },
  {
    name: FigureNames.CIRCLE,
    data: { r: 5 },
  },
  {
    name: FigureNames.RECT,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureNames.TRIANGLE,
  },
]

console.log(calculateAmountOfFigures(data))
