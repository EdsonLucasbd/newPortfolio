import { Content } from '@/components/Content'

export const metadata = {
  title: 'Formação',
}

export default async function Education() {
  return <Content
    queryUrl='https://gist.githubusercontent.com/EdsonLucasbd/becd1cd08abfae431980e5c0339f81b4/raw/ac7cd09cfc3f861a1f26cec68f433dfe4be7dd70/gistfile1.txt'
    lang='javascript'
  />
}