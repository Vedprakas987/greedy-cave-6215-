import { Image } from '@chakra-ui/react'
import React from 'react'

export default function GameShower({image}) {
  return (
    <div>
        <Image src={image} alt = "prof" />
    </div>
  )
}
