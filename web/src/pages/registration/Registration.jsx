import {React, useState} from 'react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, Text, useColorModeValue, GridItem, InputRightElement, Stack, InputGroup, Select, Image, FormErrorMessage, Icon, IconButton, VStack} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import Logo from '../../components/Logo/Logo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as MySVG } from './auth.svg';
import { ReactComponent as AvatarSVG } from './icon-default-avatar.svg';
import {FiUpload} from 'react-icons/fi'
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/Navbar Bottom/NavbarBottom'
import Footer from '../../components/footer/Footer'

const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be contain 4 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
    confirmationPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  });

const Register = () => {
  const [fieldImage, setFieldImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const register = async (username, email, password, roleId) => {
    try {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("roleId", roleId);
      formData.append("avatar", fieldImage);

      await axios.post("http://localhost:8080/auth/register", 
      formData);

      toast.success('success, please login to account');
    } catch (err) {
      console.log(err);
      toast.error("Email or username already exist")
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      roleId: 0,
      image: null,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      register(
        values.username,
        values.email,
        values.password,
        values.roleId
      );
    },
  });

  const handleImageChange = (event) => {
    const selectedFile = event.currentTarget.files[0];
    setFieldImage(selectedFile);
    
    // Display the selected image
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setSelectedImage(objectURL);
    }
  };

  return (
    <>
    <Navbar />
    <ToastContainer />
    <Box marginTop='20px' marginBottom='15px' align='center'>
      <Logo />
      </Box>
  <Flex direction={{md:'row', sm:'column', base:'column'}} height="fit-content" mb='20px'>
    {/* Display image only on screens wider than 'sm' */}
    <Box flex="1"
      p="8"
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      {/* Your image or content on the left side */}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <MySVG />
          {/* <Image width='70%' src={`${process.env.REACT_APP_IMAGE_URL}/event/imageloginregister.png`} alt="Your Image"/> */}
      </Box>
      <Heading as='h4' size='md' mb='10px' mt='10px'>
      Tidak lagi ketinggalan event favoritmu
        </Heading>
        <Text textAlign='center' fontSize='sm'>Gabung dan rasakan kemudahan bertransaksi dan mengelola event<br/>di Ticketing.</Text>
    </Box>
    <Box
      flex="1"
      p="8"
      bg="white"
      display="flex"
      flexDirection="column"y
      alignItems="center"
      justifyContent="center"
    >
        <Heading size="md">
      Buat akun Ticketing kamu
        </Heading>
        <Box marginLeft='90px' display='grid' gridTemplateColumns='1fr 1fr' mb="4" columnGap='5px'>
                <GridItem >
                <Text textAlign='right'>
                Sudah punya akun?
                </Text>
                </GridItem>
                <GridItem>
                {/* color="#4299E1" */}
                <Text color='blue' fontWeight='bold' textAlign='left'>
                    <Link to="/login">Masuk</Link>
                  </Text>
                  </GridItem>
              </Box>
      <form onSubmit={formik.handleSubmit}>
              <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "black")}
          boxShadow="0px 1px 5px gray"
          p={8}
          width={{base: '100%', md:"400px", sm:'100%'}}
        >
          <Stack spacing={4}>
          <VStack>
            {selectedImage ? <Image
            src={selectedImage}
            alt="Selected Image"
            boxSize="150px"
            objectFit="cover"
            borderRadius="50%"/> : <AvatarSVG />}
            <Box mt='-50px' mr='-90px'>
      <Input display="none" id="fileInput" 
              type="file"
              name="image"
              size="md"
              onChange={(event) => {
                setFieldImage(event.currentTarget.files[0]);
              }, handleImageChange}
            />
      <IconButton
        onClick={() => document.getElementById('fileInput').click()}
        icon={<FiUpload color='white' />}
        variant='outline'
        background='blue'
        borderRadius='50%'
        colorScheme="white"
        border='solid white 2px'
      >
      </IconButton>
    </Box>
    </VStack>
                <FormControl
                  isInvalid={formik.touched.username && formik.errors.username}
                  nb={5}
                  name="username"
                  id="username"
                >
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                  nb={5}
                  name="email"
                  id="email"
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.password && formik.errors.password}
                  nb={5}
                  id="password"
                  name="password"
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {formik.touched.password && formik.errors.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.confirmationPassword &&
                    formik.errors.confirmationPassword
                  }
                  nb={5}
                  name="confirmationPassword"
                  id="confirmationPassword"
                >
                  <FormLabel>Confirmation Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={formik.handleChange}
                      // value={formik.values.confirmationPassword}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {formik.touched.confirmationPassword &&
                    formik.errors.confirmationPassword && (
                      <FormErrorMessage>
                        {formik.errors.confirmationPassword}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormLabel>Choose as Buyer or Event Organizer</FormLabel>
                <Select name="roleId" 
                    onChange={formik.handleChange}
                    value={formik.values.roleId}
                    >
                  <option value="0">-- Please choose your role --</option>
                  <option value="1">Buyer</option>
                  <option value="2">Event Organizer</option>
                </Select>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue"}
                    color={"white"}
                    _hover={{
                      bg: "black",
                      color: "white",
                    }}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                
                </Stack>
              </Stack>
        </Box>
        </form>
    </Box>
  </Flex>
  <NavbarBottom />
  <Footer />
  </>
  );
};

export default Register;
