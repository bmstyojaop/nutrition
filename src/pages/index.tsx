import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Flex } from '@mantine/core'
import { DailyCard } from './components/DailyCard'

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
      <main className={`bg_basic flex ${inter.className}`}>
        <Flex direction={{ base: 'column', sm: 'row' }} gap={{ base: 'sm', sm: 'lg' }} justify='center'>
          <DailyCard />
          <DailyCard />
          <DailyCard />
        </Flex>
      </main>
    </>
  )
}
