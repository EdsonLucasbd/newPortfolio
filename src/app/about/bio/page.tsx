import { Content } from '@/components/Content'
import Image from 'next/image'
import MyPhoto from '../../../../public/portfolio_photo.png'

export const metadata = {
  title: 'Sobre',
}

export default async function Bio() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <Content
        queryUrl='https://gist.githubusercontent.com/EdsonLucasbd/188206371a9fdf5c27d37b37d62c3995/raw/6f83dd8b258b43e701c572c346024434d264ac76/gistfile1.txt'
        lang='javascript'
      />
      <Image src={MyPhoto} alt='' aria-hidden className='w-2/5 h-auto mr-12' />
    </div>
  )
}
