interface IClothesWarehouse {
  jackets: 'empty' | number
  hats: 'empty' | number
  socks: 'empty' | number
  pants: 'empty' | number
}

interface IStationeryWarehouse {
  scissors: 'empty' | number
  paper: 'empty' | boolean
}

interface IAppliancesWarehouse {
  dishwashers: 'empty' | number
  cookers: 'empty' | number
  mixers: 'empty' | number
}

interface ITotalWarehouse
  extends IClothesWarehouse,
    IStationeryWarehouse,
    IAppliancesWarehouse {
  deficit: boolean
  date: Date
}

const totalData: ITotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: true,
  date: new Date(),
}

type TReportFn = (data: ITotalWarehouse) => string

const printReport: TReportFn = (data: ITotalWarehouse): string => {
  const arr: string[][] = Object.entries(data).filter(
    (item) => item[1] === 'empty'
  )

  if (arr.length !== 0) {
    const res: string = arr.map((item) => item[0]).join(', ')
    return `We need this items: ${res}`
  } else {
    return 'Everything fine'
  }
}

console.log(printReport(totalData))
