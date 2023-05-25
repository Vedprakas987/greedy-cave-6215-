import { Box, Select,Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFilterClick = () => {
    setShowModal(true);
  };

  const arr1 = ['Category 1', 'Category 2', 'Category 3']; // Example array

  return (
    <div>
      <button onClick={handleFilterClick}>Filter</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <Box w={{ sm: "100%" }} mt={"1rem"} padding={"1.3rem"} mb={"2rem"} textAlign={"start"} fontSize={"small"}>
              <h2>Browsed By</h2>
              <hr />
              {arr1.map((el) => (
                <Text _hover={{ textDecoration: "underline" }} mt={"7px"} fontSize={"small"}>
                  {el}
                </Text>
              ))}
              <br />
              <h2>Filter By:</h2>
              <hr style={{ marginTop: "5px" }} />
              <Select w={{ lg: "98%" }} mt={"8px"}>
                <option>Color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Pink</option>
              </Select>

              {/* Rest of the select elements */}

              <Select w={{ lg: "98%" }} mt={"8px"}>
                <option>Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
              </Select>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
