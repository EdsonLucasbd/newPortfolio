import { Content } from '@/components/Content'

export const metadata = {
  title: 'Experiência',
}

export default async function Experience() {
  return <Content
    queryUrl='https://gist.githubusercontent.com/EdsonLucasbd/8c846d020b0a3c4793bac1887fcb43e0/raw/1696553e846bfdb8ebc7f8c77947654001b74056/gistfile1.txt'
    lang='javascript'
  />
}