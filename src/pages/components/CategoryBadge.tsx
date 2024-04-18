import { NUTRIENTS } from '@/common/constants/constants'
import { Nutrient } from '@/common/types/types'
import { Badge } from '@mantine/core'

export const CategoryBadge = (props: { category: Nutrient }) => {
  let badgeColor: string = ''
  let nutrientName: string = ''

  switch (props.category) {
    case 'MINERALS':
      badgeColor = 'blue'
      nutrientName = NUTRIENTS.MINERALS
      break
    case 'FATS':
      badgeColor = 'pink'
      nutrientName = NUTRIENTS.FATS
      break
    case 'PROTEIN':
      badgeColor = 'orange'
      nutrientName = NUTRIENTS.PROTEIN
      break
    case 'VITAMINS':
      badgeColor = 'green'
      nutrientName = NUTRIENTS.VITAMINS
      break
    case 'CARBOHYDRATES':
      badgeColor = 'yellow'
      nutrientName = NUTRIENTS.CARBOHYDRATES
      break
  }
  if (!badgeColor || !nutrientName) return

  return (
    <Badge size='xs' color={badgeColor}>
      {nutrientName}
    </Badge>
  )
}
