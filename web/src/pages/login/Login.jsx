import {React, useState} from 'react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useColorModeValue,
  GridItem,
  InputRightElement,
  Stack,
  InputGroup,
  Checkbox,
  Image
} from "@chakra-ui/react";
import Logo from '../../components/Logo/Logo'
import {useDispatch} from 'react-redux'
import { login } from "../../redux/reducer/authReducer";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as MySVG } from '../registration/auth.svg';
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/Navbar Bottom/NavbarBottom'
import Footer from '../../components/footer/Footer'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password));
      toast.success('Logged in')
      navigate("/");
    },
  });


  return (
      <>
      <Navbar />
      <ToastContainer />
      <Box marginTop='20px' marginBottom='15px' align='center'>
      <Logo />
      </Box>
    <Flex direction={{md:'row', sm:'column', base:'column'}} height="fit-content">
      <Box flex="1"
        p="8"
        bg="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <MySVG />
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
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Heading size="md">
          Masuk ke akunmu
          </Heading>
          <Box marginLeft='130px' display='grid' gridTemplateColumns='1fr 1fr' mb="4" columnGap='5px'>
                  <GridItem >
                  <Text textAlign='right'>
                  Tidak punya akun Ticketing?
                  </Text>
                  </GridItem>
                  <GridItem>
                  <Text color='blue' fontWeight='bold' textAlign='left'>
                      <Link to="/register">Daftar</Link>
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
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input
                    name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required/>
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
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
              </FormControl>
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack> */}
                <Button
                  bg={"blue"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
                
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

export default Login;
