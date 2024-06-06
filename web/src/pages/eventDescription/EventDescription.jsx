import { Flex, Image, Tabs, Tab, TabList, TabPanels, TabPanel, Heading, Text, Box, useColorModeValue, Button, HStack, VStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs' 
import {AiFillClockCircle,} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {IoTicket} from 'react-icons/io5'
import Tiket from '../../components/Tiket/Tiket'

const EventDescription = () => {
    return (
        <>
        <Flex direction={{md:'row', sm:'column'}} alignItems={{sm : 'center'}} height="100%">
            <Flex
             flexDirection={"column"}
             width={{ md: '65%', sm: '100%' }}
             padding={'5%'}
            //  bg='red'
             >
                 <Text mb='10px'>Home  Category Title</Text>
                 {/* <Image borderRadius='10px' src={require('../../assets/images/imagedesc.jpg')} mb='40px' /> */}
                 <Tabs>
                <TabList alignSelf='center'>
                    <Tab><Text fontWeight='bold'>DESKRIPSI</Text></Tab>
                    <Tab><Text fontWeight='bold'>TIKET</Text></Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        {/* <p>two!</p> */}
                        <Tiket />
                    </TabPanel>
                </TabPanels>
            </Tabs>
             </Flex>
             <Flex 
              flexDirection={"column"}
              width={{ md: '35%', sm: '100%' }}
              padding={'5% 0% 0% 0%'}
            //   bg='blue'
              >
                  <Box role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    mb='50px'>
                        <Box mb='60px'>
                        <Heading as='h4' size='md' mb='10px'>NAMA EVENT</Heading>
                        <HStack><BsFillCalendarDateFill color='blue' /><Text>Tanggal</Text></HStack>
                        <HStack><AiFillClockCircle color='blue' /><Text>Jam</Text></HStack>
                        <HStack><HiLocationMarker color='blue' /><Text>Lokasi</Text></HStack>
                        </Box>
                        <hr/>
                        <Box>
                            <Text>Diselenggarakan oleh</Text>
                            <Text>Penyelenggara</Text>
                        </Box>
                    </Box>
                    <Box role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    mb='40px'>
                        <Text>Nama Tiket</Text>
                        <HStack><Text>Jumlah Tiket</Text><Spacer /><Text fontWeight='bold'>Total Harga</Text></HStack>
                                <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200'></Box>
                        <HStack mb='10px'><IoTicket color='blue' /><Text>Total 2 tiket</Text><Spacer /><Text fontWeight='bold'>Total Harga</Text></HStack>
                        <Button colorScheme='blue' width='100%'>Beli Tiket</Button>
                    </Box>
                    <Box>
                        <Text mb='10px'>Bagikan Event</Text>
                        <HStack>
                            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                             Twitter
                            </Button>
                        </HStack>
                    </Box>
              </Flex>
        </Flex>
        </>
    )
}

export default EventDescription