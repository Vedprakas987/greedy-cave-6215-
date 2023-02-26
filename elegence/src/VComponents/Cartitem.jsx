import { Flex, HStack, Select } from '@chakra-ui/react'
import React from 'react'

export default function Cartitem({image,name,price}) {
  return (
    <div>
  {/* <Flex>
<p>item</p>
<p>item Price </p>
<p>Quantity</p>
<p>Total Price</p>
  </Flex> */}
  <Flex>
     <div>
     <img src = {image} alt = "prof" />
     </div>
    <div>
    <p>{name}</p>
    <p>Style # 66297565</p>
    <p>Color: CANARY</p>
    <p>Size: 36</p>
    </div>
    <div>
    <p>{price}</p>
    </div>
    <div>
        <Select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
        </Select>
    </div>
    <div>
        <p>$ {price}</p>
    </div>
  </Flex>
    </div>
  )
}
