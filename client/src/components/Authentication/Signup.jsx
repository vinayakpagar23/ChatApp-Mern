import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const[show,setShow]=useState(false);
  const[name,setName] =useState();
  const[email,setEmail] =useState();
  const[password,setPassword] =useState();
  const[confirmpassword,setConfirmpassword] =useState();
  const[pic,setPic]=useState();
  const[loading,setLoading] =useState(false);
  const toast = useToast()
  const handleClick=()=>{
    setShow(!show);

  }
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "vinayakvkp");
      fetch("https://api.cloudinary.com/v1_1/vinayakvkp/image/upload", {
        method: "post",
        body: data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization, Content-Type",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };
  const submitHandler=()=>{}
  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
          <Input placeholder="Enter Your Name"  onChange={(e)=>setName(e.target.value)}/>
           
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email"  onChange={(e)=>setEmail(e.target.value)}/> 
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input type={show?"text":"password"} placeholder="Enter Your Password"  onChange={(e)=>setPassword(e.target.value)}/>
        <InputRightElement width="4.5rem">
          <Button h="1.75rem"  size="sm" onClick={handleClick}>
            {show?"Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup> 
      </FormControl>

      <FormControl id='confirm-password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
        <Input type={show?"text":"password"} placeholder="Confirm Your Password"  onChange={(e)=>setConfirmpassword(e.target.value)}/>
        <InputRightElement width="4.5rem">
          <Button h="1.75rem"  size="sm" onClick={handleClick}>
            {show?"Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup> 
      </FormControl>
      <FormControl id='pic' isRequired>
        <FormLabel>Upload Pic</FormLabel>
   
        <Input type={"file"} p={1.5} accept="image/*"   onChange={(e)=>postDetails(e.target.files[0])}/>
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>Sign Up</Button>
    </VStack>
  )
}

export default Signup