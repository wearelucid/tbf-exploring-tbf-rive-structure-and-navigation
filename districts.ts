export type District = {
  reference: string
  scenes: string[]
  personSlots: string[]
}

export const DISTRICTS: District[] = [
  {
    reference: 'districtKVA',
    scenes: ['kvaScene01', 'kvaScene02', 'kvaScene03'],
    personSlots: ['kvaContact01'],
  },
  {
    reference: 'districtAgglomeration',
    scenes: [
      'agglomerationScene01',
      'agglomerationScene02',
      'agglomerationScene03',
    ],
    personSlots: ['agglomerationContact01'],
  },
  {
    reference: 'districtUmland',
    scenes: ['umlandScene01', 'umlandScene02', 'umlandScene03'],
    personSlots: ['umlandContact01'],
  },
  {
    reference: 'districtFluss',
    scenes: ['flussScene01'],
    personSlots: [],
  },
  {
    reference: 'districtIndustrie',
    scenes: ['industrieScene01'],
    personSlots: ['industrieContact01'],
  },
  {
    reference: 'districtVorstadt',
    scenes: ['vorstadtScene01', 'vorstadtScene02'],
    personSlots: [],
  },
  {
    reference: 'districtStadtpark',
    scenes: ['stadtparkScene01', 'stadtparkScene02'],
    personSlots: ['stadtparkContact01'],
  },
  {
    reference: 'districtInnenstadt',
    scenes: ['innenstadtScene01', 'innenstadtScene02', 'innenstadtScene03'],
    personSlots: ['innenstadtContact01'],
  },
  {
    reference: 'districtMysterium',
    scenes: ['mysteriumScene01'],
    personSlots: ['mysteriumContact01'],
  },
  {
    reference: 'districtBahnhof',
    scenes: [
      'bahnhofScene01',
      'bahnhofScene02',
      'bahnhofScene03',
      'bahnhofScene04',
    ],
    personSlots: ['bahnhofContact01'],
  },
  {
    reference: 'districtEntwicklungsgebiet',
    scenes: ['entwicklungsgebietScene01', 'entwicklungsgebietScene02'],
    personSlots: ['entwicklungsgebietContact01'],
  },
  {
    reference: 'districtFinanzdistrikt',
    scenes: ['finanzdistrictScene01', 'finanzdistrictScene02'],
    personSlots: ['finanzdistrictContact01'],
  },
  {
    reference: 'districtHochhausquartier',
    scenes: [
      'hochhausquartierScene01',
      'hochhausquartierScene02',
      'hochhausquartierScene03',
    ],
    personSlots: [],
  },
  {
    reference: 'districtFlughafen',
    scenes: ['flughafenScene01', 'flughafenScene02'],
    personSlots: [],
  },
  {
    reference: 'districtRathausquartier',
    scenes: ['rathausquartierScene01', 'rathausquartierScene02'],
    personSlots: ['rathausquartierContact01'],
  },
]

export const CONTAINER_TO_DISTRICT_MAP = {
  '01': 'districtAgglomeration',
  '02': 'districtKVA',
  '03': 'districtUmland',
  '04': 'districtFluss',
  '05': 'districtIndustrie',
  '06': 'districtVorstadt',
  '07': 'districtStadtpark',
  '08': 'districtInnenstadt',
  '09': 'districtMysterium',
  '10': 'districtBahnhof',
  '11': 'districtEntwicklungsgebiet',
  '12': 'districtFinanzdistrikt',
  '13': 'districtHochhausquartier',
  '14': 'districtFlughafen',
  '15': 'districtRathausquartier',
} as const
