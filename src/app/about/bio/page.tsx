import { Content } from '@/components/Content'
import Image from 'next/image'
import MyPhoto from '../../../../public/portfolio_photo.png'

export const metadata = {
  title: 'Sobre',
}

export default async function Bio() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <Content
        queryUrl="https://gist.githubusercontent.com/EdsonLucasbd/1504390d3de80ceaa3c4210157d2d11d/raw/fe0f6e5b89fbd1651fc694820f4b46de79852357/gistfile1.txt"
        lang='markdown'
      />
      <Image src={MyPhoto} alt='' aria-hidden className='w-full md:w-2/5 h-auto mr-12 md:mr-12 -mt-20 md:mt-0' />
    </div>
  )
}