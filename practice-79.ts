interface Queue<T> {
  enqueue(item: T): void // поставить в очередь
  dequeue(): T | undefined // исключить из очереди
  peek(): T | undefined | null // посмотреть первый элемент
  isEmpty(): boolean // проверка на "пустоту" сущности
  length(): number // проверка на длину
}

// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно

// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"

class ArrayQueue<T> implements Queue<T> {
  private queue: T[] = []

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  length(): number {
    return this.queue.length
  }

  enqueue(item: T): void {
    this.queue.push(item)
  }

  dequeue(): T {
    if (!this.isEmpty()) {
      return this.queue.shift() as T
    } else {
      throw new Error('Queue is empty')
    }
  }

  peek(): T | null {
    if (!this.isEmpty()) {
      return this.queue[0]
    } else {
      return null
    }
  }

  // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
  // Подсказка по методам:
  // при добавлении в очередь можно выполнить метод push
  // при удалении - shift, так как нужно удалить первый элемент.
  // Обратите внимание на возвращаемое значение
  // isEmpty может использоваться в других методах
}

// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно

class Stack<T> {
  private stack: T[] = []
  private limit: number

  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit
  }

  push(value: T): void {
    if (this.limit - this.length() <= 0) {
      throw new Error('Stack limit')
    } else {
      this.stack.push(value)
    }
    // Добавляет элемент в стэк
    // Если стэк переполнен - выбрасывает ошибку (throw new Error)
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    } else {
      return this.stack.pop() as T
    }

    // Удаляет последний элемент массива
    // Если в стеке пусто - выбрасывает ошибку (throw new Error)
    // При удалении элемента возвращает его
    // Простыми словами: вы берете верхний лист в стопке и используете его
    // Если на столе нет листов - получается ошибка, брать нечего
  }

  length(): number {
    return this.stack.length
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  top(): T | null {
    if (this.isEmpty()) {
      return null
    } else {
      return this.stack[this.length() - 1]
    }

    // Возвращает последний (верхний) элемент стэка, но не удаляет его
    // Вы просто читаете, что написано на верхнем листе
    // Если стэк пуст - вернется null
  }

  // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
  // Создать приватное свойство limit, которое будет типом number

  // Здесь мы установим лимит на стопку листов.
  // При переполнении стэка программа зависает, а очень высокая стопка листов падает
  // Так что лимит всегда должен быть
}

// Для тестов

// const arrTest1 = new ArrayQueue<number>()
// arrTest1.enqueue(5)
// arrTest1.enqueue(10)
// console.log(arrTest1.peek(), '1 element')
// console.log(arrTest1.dequeue(), 'delete element')
// console.log(arrTest1.length(), 'length')

// const arrTest2 = new ArrayQueue<string>()
// arrTest2.enqueue('5')
// arrTest2.enqueue('10')
// console.log(arrTest2.peek())
// console.log(arrTest2.dequeue())
// console.log(arrTest2.length())

const stackTest1 = new Stack<number>(10)
stackTest1.push(20)
stackTest1.push(50)
console.log(stackTest1.top())
console.log(stackTest1.pop())
console.log(stackTest1.length())

const stackTest2 = new Stack<string>(10)
stackTest2.push('20')
stackTest2.push('50')
console.log(stackTest2.top())
console.log(stackTest2.pop())
console.log(stackTest2.length())
