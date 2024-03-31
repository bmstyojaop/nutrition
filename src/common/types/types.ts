import { NUTRIENTS } from '../constants/constants'

/** 栄養素 */
export type Nutrient = keyof typeof NUTRIENTS

/**
 * 食材.
 *
 * name: 材料名.v
 * amount: 量
 * unit: 単位
 * otherUnit: 備考（amount + unit で表現できない単位（少々）など）
 */
export type Ingredient = {
  name: string
  amount?: number
  unit?: string
  otherUnit?: string
}
