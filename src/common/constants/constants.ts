// export const NUTRIENTS = {
//   MINERALS: { KEY: 0, VALUE: 'ミネラル' },
//   FATS: { KEY: 1, VALUE: '脂質' },
//   CARBOHYDRATES: { KEY: 2, VALUE: '炭水化物' },
//   VITAMINS: { KEY: 3, VALUE: 'ビタミン' },
//   PROTEIN: { KEY: 4, VALUE: 'タンパク質' },
// } as const
export const NUTRIENTS = {
  MINERALS: 'ミネラル',
  FATS: '脂質',
  CARBOHYDRATES: '炭水化物',
  VITAMINS: 'ビタミン',
  PROTEIN: 'タンパク質',
} as const satisfies Record<string, string>
