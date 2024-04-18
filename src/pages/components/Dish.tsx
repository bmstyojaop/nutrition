import { Group, List, Text } from '@mantine/core'
import { CategoryBadge } from './CategoryBadge'
import { IngredientItem } from './IngredientItem'
import { Nutrient } from '@/common/types/types'

export const Dish = (props: { categoryList: Nutrient[] }) => {
  return (
    <div>
      <div>
        <Group>
          {props.categoryList.map((category) => {
            return <CategoryBadge key={category} category={category} />
          })}
        </Group>
        <Text>鶏むね肉とじゃがいもの肉じゃがjajajajajajaja</Text>
      </div>
      <List type='unordered' size='sm' c='dimmed'>
        <IngredientItem name='人参' />
        <IngredientItem name='じゃがいも' amount={60} unit='g' />
        <IngredientItem name='鰹出汁' otherUnit='適量' />
      </List>
    </div>
  )
}
