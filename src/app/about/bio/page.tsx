import { Content } from '@/components/Content'

export const metadata = {
  title: 'Sobre',
}

export default async function Bio() {
  return <Content
    queryUrl='https://gist.githubusercontent.com/EdsonLucasbd/188206371a9fdf5c27d37b37d62c3995/raw/b9038f91de73db01aea0633bb6e8f300ec222895/gistfile1.txt'
    lang='javascript'
  />
}
