import { Box, Flex, Grid, ListItem, UnorderedList, Text, Input, InputGroup, InputLeftElement, InputRightElement, background, ButtonGroup, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Image, Spacer,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Center,
    VStack, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { LuCalendarPlus } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'
import {MdExplore, MdOutlineClose} from 'react-icons/md'
import { createIcon } from "@chakra-ui/react";
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../../redux/reducer/authReducer";



function Navbar() {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function intToThousands(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

    const Logo = createIcon({
        displayName: "Logoipsum_296",
        viewBox: "0 0 40 40",
        path: (
          <>
            <path
              fill="currentColor"
              d="M25.556 11.685A10 10 0 0020 10V0A20 20 0 110 20h10a10 10 0 1015.556-8.315z"
            />
            <path
              fill="currentColor"
              d="M10 0A10 10 0 010 10v10A20 20 0 0020 0H10z"
            />
          </>
        ),
      });

      const {isOpen, onOpen, onClose} = useDisclosure()
      const [placement, setPlacement] = React.useState('right')
      const btnRef = React.useRef();
  return (
    <Box>
        <Flex flexDirection={'column'}>
            <Box className='navbar-top'
            padding={'6px'}
            backgroundColor={'#003899'}
            alignItems={'center'}
            display={{base:'none', lg:'block'}}>
                <UnorderedList
                display={'flex'}
                justifyContent={'flex-end'}
                marginEnd={'2em'}
                color={'white'}
                styleType={'none'}
                >
                    <ListItem marginStart={'2em'}>
                        <Link>Tentang Kami</Link>
                    </ListItem>
                    <ListItem marginStart={'2em'}>
                        <Link>Mulai jadi Event Creator</Link>
                    </ListItem>
                    <ListItem marginStart={'2em'}>
                        <Link>Biaya</Link>
                    </ListItem>
                    <ListItem marginStart={'2em'}>
                        <Link>Hubungi Kami</Link>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Grid className='navbar-bottom'
            gridTemplateColumns={'1fr auto'}
            gridGap={'60px'}
            alignItems={'flex-start'}
            backgroundColor={'#162855'}
            padding={'16px'}>
                <UnorderedList className='navbar-left'
                display={'flex'}
                alignItems={'center'}
                margin={'auto 0 auto 2em'}>
                    <ListItem className='logo' 
                    display={'flex'}
                    alignItems={'center'}
                    marginEnd={'16px'}>
                        <Logo boxSize={{base:'6', lg:'8'}}
                        color={'white'}/>

                        <Text 
                        as='b' 
                        color={'white'}
                        fontWeight={'extrabold'}
                        fontSize={{ base: 'l', lg: '2xl'}}
                        marginStart={'8px'}>Ticketing</Text>
                    </ListItem>
                    <ListItem className='search'
                    width={'100%'}
                    maxWidth={'860px'}>
                        <InputGroup>
                            <Input placeholder='cari event seru di sini'
                            variant={'filled'}
                            background={'#12244D'}
                            color={'white'}
                            _focus={{ background: '#FFFFFF', color:'black' }}
                            />
                            <InputRightElement 
                            backgroundColor={'#0049CB'} 
                            pointerEvents={''}>
                                <FaSearch color='white'/>
                            </InputRightElement>
                        </InputGroup>
                        
                    </ListItem>
                </UnorderedList>

                <Flex className='navbar-right' alignItems={'center'} display={{base:'none', lg:'flex'}} marginRight={'1em'}>
                    
                    {user?.roleId=="2" ? (<>
                        <Flex className='buat-event-container'
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'15px'}>
                        <LuCalendarPlus color='white' fontSize={'30px'}/>
                        <Text as={'b'} color={'white'} marginStart={'10px'}>Buat Event</Text>
                    </Flex></>) : null}
                    <Flex className='jelajah-container'
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'15px'}>
                        <MdExplore color='white' fontSize={'30px'}/>
                        <Text as='b' color={'white'} marginStart={'10px'}> Jelajah</Text>
                    </Flex>
                    {isLogin ? (<>
          <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                        <Avatar src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${user.avatar}`}  borderRadius='50%' marginRight='5px' />
                </MenuButton>
                <MenuList alignItems={'center'} zIndex={10}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${user.avatar}`}
                    />
                  </Center>
                  <br />
                  <VStack>
                    <Text>{user.username}</Text>
                    <Text>{user.email}</Text>
                    {user.points == null ? <Text>0 points</Text> : <Text>{intToThousands(user.points)} points</Text>}
                  </VStack>
                  <MenuDivider />
                  <MenuItem onClick={() => navigate(user.roleId == 1 ? '/user' : '/eo')}>Dashboard</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem><Button width={'50%'} backgroundColor='#0049CB' variant={'solid'} color={'white'} onClick={() => dispatch(logoutSuccess(), navigate("/"))}>Logout</Button></MenuItem>
                </MenuList>
              </Menu>
          </>) : (
            <ButtonGroup marginLeft={'12px'}>
            <Button width={'50%'} color={'white'} variant={'outline'} onClick={() => navigate("/register")}>Daftar</Button>
            <Button width={'50%'} backgroundColor='#0049CB' variant={'solid'} color={'white'} onClick={() => navigate("/login")}>Masuk</Button>
        </ButtonGroup>)}
                </Flex>
                <Flex className='menu-phone' display={{base:'block', lg:'none'}}>
                <IconButton
                size={'md'}
                icon={isOpen?  <MdOutlineClose fontSize={'36px'}/> : <RxHamburgerMenu fontSize={'36px'}/>}
                // aria-label={'open-menu'}
                display={{base:'block', lg:'none'}} 
                margin={'auto'}
                onClick={isOpen ? onClose : onOpen}
                colorScheme='transparent'
                color={'white'}
                ref={btnRef}
                />

                {isOpen ? (
            <Drawer placement={placement} 
            onClose={onClose} 
            isOpen={isOpen}
            finalFocusRef={btnRef}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton size={"lg"}/>
                <DrawerHeader>
                    <Logo
                        color={'#003899'}/>
                    <Text 
                        as='b' 
                        color={'#003899'}
                        fontWeight={'extrabold'}  
                        marginStart={'8px'}>
                            Tickteting
                    
                    </Text>
                </DrawerHeader>
                
                <DrawerHeader>
                {isLogin ? (
          <Button width={'50%'} backgroundColor='#0049CB' variant={'solid'} color={'white'} onClick={() => dispatch(logoutSuccess())}>Logout</Button>
        ) : (
            <ButtonGroup marginLeft={'12px'}>
            <Button width={'50%'} color={'#0049CB'} variant={'outline'} >Daftar</Button>
            <Button width={'50%'} backgroundColor='#0049CB' variant={'solid'} color={'white'}>Masuk</Button>
        </ButtonGroup>
        )}
                    
                </DrawerHeader>
                    <DrawerBody>
                        <UnorderedList
                            
                            styleType={'none'}>
                            <ListItem fontWeight={'bold'} 
                                margin={'10px 0'} 
                                _hover={{color: "#ff544a"}}>
                                <Link>Tentang Kami</Link>
                            </ListItem>
                            <ListItem fontWeight={'bold'} 
                                margin={'10px 0'} 
                                _hover={{color: "#ff544a"}}>
                                <Link>Mulai jadi Event Creator</Link>
                            </ListItem>
                            <ListItem fontWeight={'bold'} 
                                margin={'10px 0'} 
                                _hover={{color: "#ff544a"}}>
                                <Link>Biaya</Link>
                            </ListItem>
                            <ListItem fontWeight={'bold'} 
                                margin={'10px 0'} 
                                _hover={{color: "#ff544a"}}>
                                <Link>Hubungi Kami</Link>
                            </ListItem>
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        ): null}                
                </Flex>
            </Grid>
        </Flex>
    </Box>
  )
}

export default Navbar
