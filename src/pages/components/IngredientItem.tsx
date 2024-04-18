import { Ingredient } from '@/common/types/types'
import { List, Space } from '@mantine/core'

export const IngredientItem = (props: Ingredient) => {
  return (
    <List.Item>
      <div className='flex'>
        <span>{props.name}</span>
        {props.amount && (
          <>
            <Space w='xs' />
            <span>{props.amount}</span>
            <span>{props.unit}</span>
          </>
        )}
        {props.otherUnit && (
          <>
            <Space w='xs' />
            <span>{props.otherUnit}</span>
          </>
        )}
      </div>
    </List.Item>
  )
}
