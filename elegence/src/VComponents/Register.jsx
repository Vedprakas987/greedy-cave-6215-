import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Divider,
    Text,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Checkbox,
    Box,
} from '@chakra-ui/react'
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const [isRegistering, setIsRegistering] = useState(true);
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")

    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const signUpData = {
        fname,lname,signUpEmail,signUpPassword
    }

    const signInData = {
        signInEmail,signInPassword
       }

    const handleSignin = () => {
       
       console.log(signInData)
       const storedUser = JSON.parse(localStorage.getItem('user'));
       console.log(storedUser)
       if(signInData.signInEmail === storedUser.signUpEmail && signInData.signInPassword === storedUser.signUpPassword){
        alert("signin success")
        navigate("/cart")
       }
       else{
        alert("enter correct details")
        setSignInEmail("")
        setSignInPassword("")
       }
    }

    const handleSignup = () => {
        if(signUpData.fname && signUpData.lname && signUpData.signUpEmail && signUpData.signUpPassword) {
            localStorage.setItem('user', JSON.stringify(signUpData));
            alert("signup success")
            setIsRegistering(false);
        }else{
            alert("fill all the details")
        }
        
    }

    const handleSignInClick = () => {
        setIsRegistering(false);
    }

    const handleSignUpClick = () => {
        setIsRegistering(true);
    }
    return (
        <>

            <Button mt={3} bg={"transparent"} fontSize={"13px"} color={'teal'} letterSpacing={".8px"} fontWeight={"normal"} onClick={onOpen}>
                <Box mr={"10px"}>
                    <AiOutlineUser size={"20px"} />
                </Box>
                Sign In / Sign Up
            </Button>

            <Modal align={"center"}
                onClose={onClose}
                isOpen={isOpen}
                scrollBehavior={"inside"} >

                <ModalOverlay />
                <ModalContent maxW={"500px"} borderRadius={"none"} align={"center"} margin={"auto"}>
                    {
                        isRegistering ? <ModalBody p={"50px"}>
                            <ModalCloseButton />
                            <Text mt={"20px"} fontSize={"24px"} fontWeight={"200"} letterSpacing={"3px"}>Create An Account</Text>
                            <Divider mb={"22px"} mx={"auto"} />
                            <Text margin={"auto"} mb={"22px"} color={"gray.600"} fontSize={"13px"} letterSpacing={".5px"}>Welcome to Anthropologie! It's quick and easy to set up an account.</Text>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>First Name</FormLabel>
                                <Input value={fname} onChange={(e)=>setFname(e.target.value)} p={"26px"} borderRadius={"none"} borderColor={"2px solid gray"} />
                            </FormControl>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>Last Name</FormLabel>
                                <Input value={lname} onChange={(e)=>setLname(e.target.value)} p={"26px"} borderColor={"2px solid gray"} borderRadius={"none"} type='tel' />
                            </FormControl>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>Email</FormLabel>
                                <Input value={signUpEmail} onChange={(e)=>setSignUpEmail(e.target.value)} p={"26px"} borderRadius={"none"} borderColor={"2px solid gray"} />
                            </FormControl>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>Password</FormLabel>
                                <Input value={signUpPassword} type={"password"} onChange={(e)=>setSignUpPassword(e.target.value)} p={"26px"} borderColor={"2px solid gray"} borderRadius={"none"} />
                            </FormControl>

                            <Flex align={"center"} mb={"22px"}>
                                <Checkbox mr={"5px"} defaultChecked><Text fontSize={"14px"}>Keep me signed in</Text></Checkbox>
                                <RiErrorWarningLine />
                            </Flex>

                            <Button letterSpacing={"2px"} fontSize={"14px"} _hover={{ bg: "white", color: "black", border: "1px solid black" }} fontWeight={"200"} mb={"22px"} p={"26px"} bg={"#4B5666"} color={"white"} borderRadius={"none"} w={"100%"} onClick={() => handleSignup()}>SIGN UP</Button>

                            <Checkbox mb={"22px"} fontSize={"11px"} align={"start"} mr={"5px"} defaultChecked><Text fontSize={"12px"} color={"gray"} letterSpacing={".5px"}>Sign me up to receive Anthropologie offers, promotions and other commercial messages. By creating an account, I agree to Anthropologie's Terms of Service and Privacy Policy. I may unsubscribe at any time. Creating an account will not enroll you in SMS marketing.</Text></Checkbox>
                            <Text fontSize={"12px"} color={"gray.600"} letterSpacing={".5px"} align={"start"}>By creating an account, you agree to Anthropologie's <u>terms of use</u>  and <u>privacy policy</u>. Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel. <u>Contact us</u> for more information.</Text>
                            <Divider mb={"22px"} mx={"auto"} mt={"22px"} />
                            <Text mt={"40px"} mb={"22px"} fontSize={"24px"} fontWeight={"200"} letterSpacing={"3px"}>Aready Have an Account?</Text>
                            <Button fontSize={"14px"} letterSpacing={"2px"} mb={"40px"} _hover={{ bg: "#4B5666", color: "white", border: "none" }} fontWeight={"200"} p={"26px"} bg={"white"} color={"balck"} borderRadius={"none"} w={"100%"} border={"1px solid black"} onClick={() => handleSignInClick()}>SIGN IN</Button>
                        </ModalBody>

                         : 
                         
                         <ModalBody p={"50px"}>
                            <ModalCloseButton />
                            <Text mt={"20px"} fontSize={"24px"} fontWeight={"200"} letterSpacing={"3px"}>Sign In</Text>
                            <Divider mb={"22px"} mx={"auto"} />
                            <Text margin={"auto"} mb={"22px"} color={"gray.600"} fontSize={"13px"} letterSpacing={".5px"}>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>Email</FormLabel>
                                <Input value={signInEmail} onChange={(e)=>setSignInEmail(e.target.value)} p={"26px"} borderRadius={"none"} borderColor={"2px solid gray"} />
                            </FormControl>

                            <FormControl mb={"22px"} isRequired>
                                <FormLabel fontSize={"13px"}>Password</FormLabel>
                                <Input type={"password"} value={signInPassword} onChange={(e)=>setSignInPassword(e.target.value)} p={"26px"} borderColor={"2px solid gray"} borderRadius={"none"}/>
                            </FormControl>

                            <Flex align={"center"} mb={"22px"}>
                                <Checkbox mr={"5px"} defaultChecked><Text fontSize={"14px"}>Keep me signed in</Text></Checkbox>
                                <RiErrorWarningLine />
                            </Flex>
                            <Button letterSpacing={"2px"} fontSize={"14px"} _hover={{ bg: "white", color: "black", border: "1px solid black" }} fontWeight={"200"} mb={"22px"} p={"26px"} bg={"#4B5666"} color={"white"} borderRadius={"none"} w={"100%"} onClick={() => handleSignin()}>SIGN IN</Button>
                            <Divider mb={"22px"} mx={"auto"} mt={"22px"} />
                            <Text mt={"40px"} mb={"22px"} fontSize={"24px"} fontWeight={"200"} letterSpacing={"3px"}>Don't Have an Account?</Text>
                            <Button mb={"40px"} letterSpacing={"2px"} _hover={{ bg: "#4B5666", color: "white", border: "none" }} fontWeight={"200"} p={"26px"} bg={"white"} color={"balck"} borderRadius={"none"} w={"100%"} border={"1px solid black"} fontSize={"14px"} onClick={() => handleSignUpClick()}>CREATE AN ACCOUNT</Button>
                        </ModalBody>
                    }

                </ModalContent>
            </Modal>
        </>
    )
}

export default Register;