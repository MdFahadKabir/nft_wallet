import React from 'react'
import Container from '@/components/shared/container'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const ExploreCategory = () => {

  const data = [
    {
      id: 1,
      title: 'Art',
      image: '/images/offer.png'
    },
    {
      id: 2,
      title: 'Music',
      image: '/images/offer.png'
    },
    {
      id: 3,
      title: 'Photography',
      image: '/images/offer.png'
    },
    {
      id: 4,
      title: 'Collectibles',
      image: '/images/offer.png'
    },
    {
      id: 5,
      title: 'Animation',
      image: '/images/offer.png'
    },
    

  ]

  return (
    <Container className="">
      <div className='flex justify-between mt-16 pb-4'>
        <h2 className='text-2xl font-medium'>Explore Categories</h2>
        <div className='flex gap-4'>

          <Button className="bg-[#281546] hover:bg-[#281546]/80 text-white">See All</Button>
        </div>
      </div>

      {/* trending items */}
      <div className='grid grid-cols-5 gap-6'>
        {
          data.map((item, index) => (
            <div key={index} className='relative '>
              <div className=''>
                <Image
                  src={item.image}
                  alt={item.title}
                  height={243}
                  width={243}
                  className='w-auto h-[243px] object-cover rounded-xl' />
              </div>
              <div className='absolute -bottom-2 w-full p-4 bg-[#281D3A] backdrop-blur-lg rounded-b-xl'>
                <h3 className='text-center text-lg font-medium'>{item.title}</h3>
              </div>
            </div>
          ))
        }
      </div>

    </Container>
  )
}

export default ExploreCategory