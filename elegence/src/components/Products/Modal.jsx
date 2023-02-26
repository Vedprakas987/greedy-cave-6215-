import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Select,
    Box,
    Text,
  } from '@chakra-ui/react'
function VerticallyCenter() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let arr1 = ['Cocktail & Party Dresses','Lounge & Casual Dresses','Little Black Dresses','Little White Dresses','Maxi Dresses','Midi Dresses','Mini & Tunic Dresses','Jumpsuits','Wedding Guest Dresses','Black Tie Wedding','Cocktail Wedding','Beach Wedding']
    return (
      <>
        <Button onClick={onOpen}>Filter</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Filter</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Box ml={"3rem"} textAlign={"start"} fontSize={"small"}>
              <h2>Browsed By</h2>
              <hr/>
             {
              arr1.map((el)=>{
                return(
                  <Text _hover={{textDecoration:"underline"}} mt={"7px"} fontSize={"small"}>{el}</Text>
                )
              })
             }
             <br/>
             <h2>Filter By:</h2>
             <hr style={{marginTop:"5px"}}/>
             <Select mt={"8px"}>
              <option>Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>

             <Select mt={"8px"}>
              <option>Price</option>
              <option>500-1000</option>
              <option>100-200</option>
              <option>200-300</option>
              <option>400-500</option>
              <option>600-700</option>
             </Select>


             <Select mt={"8px"}>
              <option>Brand</option>
              <option>AG Jeans</option>
              <option>AGolds</option>
              <option>A.j Morgon</option>
              <option>AMUR</option>
              <option>Pink</option>
             </Select>




             <Select mt={"8px"}>
              <option>Style</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>




             <Select mt={"8px"}>
              <option>Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>


             <Select mt={"8px"}>
              <option>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>2XL</option>
             </Select>
            </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default VerticallyCenter