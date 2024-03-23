import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Badge, Card, Group, Stack, Text } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <DailyCard />
      </main>
    </>
  )
}

const DailyCard = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text>2024/04/01</Text>
      <div>
        <Group>
          <Badge size='xs' color='blue'>
            ミネラル
          </Badge>
          <Badge size='xs' color='pink'>
            脂質
          </Badge>
          <Badge size='xs' color='yellow'>
            炭水化物
          </Badge>
          <Badge size='xs' color='green'></Badge>
          <Badge size='xs' color='orange'></Badge>
        </Group>
        <Text size='sm'>鶏むね肉とじゃがいもの肉じゃが</Text>
      </div>
      <Text size='sm' c='dimmed'>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours
        and activities on and around the fjords of Norway
      </Text>
    </Card>
  )
}
