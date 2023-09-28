import { Content } from '@/components/Content'

export const metadata = {
  title: 'Formação',
}

export default async function Education() {
  return <Content
    queryUrl='https://gist.github.com/EdsonLucasbd/becd1cd08abfae431980e5c0339f81b4/raw/17809b378bca008d4258f5c1b3a88728973d9516/gistfile1.txt'
    lang='javascript'
  />
}