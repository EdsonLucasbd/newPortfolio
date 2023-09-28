import { Content } from '@/components/Content'

export const metadata = {
  title: 'Experiência',
}

export default async function Education() {
  return <Content
    queryUrl='https://gist.github.com/EdsonLucasbd/8c846d020b0a3c4793bac1887fcb43e0/raw/0d8f40925930c79d5aad1846f392d199337c61d8/gistfile1.txt'
    lang='javascript'
  />
}