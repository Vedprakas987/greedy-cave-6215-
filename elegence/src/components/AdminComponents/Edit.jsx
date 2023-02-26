import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../../AdminRedux/action";

const Edit = ({ data, editShowData, renderData }) => {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.title);

  const editFunction = async () => {
    console.log(value);
    const payload = { ...data, title: value };
    await dispatch(updateData(payload))
      .then(() => {
        dispatch(getData);
      })
      .then(() => editShowData());
  };

  return (
    <form onSubmit={editFunction}>
      <Input
        variant="filled"
        textAlign="center"
        colorScheme="gray.200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Edit;