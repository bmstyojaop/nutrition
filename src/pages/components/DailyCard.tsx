import { Card, Divider, Text } from '@mantine/core'
import { Dish } from './Dish'

export const DailyCard = () => {
  return (
    <div>
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <div>
          <Text>2024/04/01</Text>
        </div>
        <Divider my='xs' />
        <Dish categoryList={['FATS', 'PROTEIN']} />
        <Divider my='xs' />
        <Dish categoryList={['FATS', 'PROTEIN']} />
        <Divider my='xs' />
        <Dish categoryList={['FATS', 'PROTEIN']} />
      </Card>
    </div>
  )
}
