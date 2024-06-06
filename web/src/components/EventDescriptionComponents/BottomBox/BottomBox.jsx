import { Flex, Tabs, Tab, TabList, TabPanels, TabPanel, Heading, Text, Box, useColorModeValue, Button, HStack, VStack, Spacer } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Tiket from '../../../components/Tiket/Tiket';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../../redux/reducer/authReducer';
import {DetailBox} from '../../../components/DetailPemesananComponents/DetailBox/DetailBox'
import {InputBox} from '../../../components/DetailPemesananComponents/InputBox/InputBox'
import {PriceBox} from '../../../components/DetailPemesananComponents/PriceBox/PriceBox'
import {useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react'
import { ReactComponent as MySVG } from './ic_voucher.svg';

const BottomBox = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const [data1, setData1] = useState([])
  const [id, setId] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTickets, setSelectedTickets] = useState({}); 
  const [formData, setFormData] = useState({name: "", phoneNumber:"", email: ""})

  const fetchData = async (ticket) => {
    try {
        console.log("ini di fetchdata bottom",ticket);
      const response = await axios.get(`http://localhost:8080/event/ticket/${ticket}`);
      setData1(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (data?.data?.id) {
      fetchData(data?.data?.id);
    }
  }, [data?.data?.id]);

  function formatPriceToIDR(price) {
    // Use Intl.NumberFormat to format the number as IDR currency
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  console.log(data.data.category);

  return (
    <>
      <Flex
        direction={{ base: 'column', md: 'row', sm: 'column' }}
        alignItems={{ base: 'center', sm: 'center' }}
        height="fit-content"
        mt={{ md: '-10%' }}
        position='relative'
        alignItems='flex-start'
      >
        <Flex
          flexDirection={'column'}
          width={{ md: '65%', sm: '100%', base: '100%' }}
          padding={'5%'}
        >
          <Tabs>
            <TabList justifyContent='center' width='100%'>
              <Tab
                _selected={{
                  borderBottom: '2px solid #00008B',
                  fontWeight: 'bold',
                  position: 'relative',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '4px',
                    borderRadius: '4px 4px 0 0',
                    background: '#00008B',
                  },
                }}
                width='100%'
              >
                <Text>DESKRIPSI</Text>
              </Tab>
              <Tab
                _selected={{
                  borderBottom: '2px solid #00008B',
                  fontWeight: 'bold',
                  position: 'relative',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '4px',
                    borderRadius: '4px 4px 0 0',
                    background: '#00008B',
                  },
                }}
                width='100%'
              >
                <Text>TIKET</Text>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {data?.data?.description}
                <HStack>
                  <Box bg='blue' width='7px' color='blue' borderRadius='0px 10px 0px 10px'>
                    |
                  </Box>
                  <Heading size='md'>Syarat dan Ketentuan</Heading>
                </HStack>
                <Text>{data?.data?.sk}</Text>
                <HStack mb='10px' mt='20px'>
                  <Box bg='blue' width='7px' color='blue' borderRadius='0px 10px 0px 10px'>
                    |
                  </Box>
                  <Heading size='md'>Label</Heading>
                </HStack>
                <HStack>
                    {/* {data?.data?.category.length > 0 && data?.data?.category.map((item) => (
                    <Box key={item.name} borderRadius='5px' bgColor='blue' textColor='white' pl='5px' pr='5px' w='fit-content'>
                        <Text>{item.name}</Text>
                    </Box>
                    ))} */}
                    {data?.data?.category?.length > 0 && data?.data?.category.map((item) => (
                    <Box key={item.name} borderRadius='10px' bgColor='blue' textColor='white' pl='5px' pr='5px' w='fit-content'>
                        <Text>{item.name}</Text>
                    </Box>
                    ))}

                </HStack>
              </TabPanel>
              <TabPanel>
                <Tiket
                  totalId={id}
                  setTotalId={setId}
                  totalQuantity={quantity}
                  setTotalQuantity={setQuantity}
                  totalPrice={price}
                  setTotalPrice={setPrice}
                  selectedTicket={selectedTickets}
                  setSelectedTicket={setSelectedTickets}
                  ticket={data?.data?.id}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <VStack
          width={{ md: '35%', sm: '100%', base: '100%' }}
          p='5%'
          top='20px'
          position='sticky'
        >
          <Box
            role={'group'}
            p={6}
            maxW={{ md: '330px', sm: '100%' }}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow='0px 1px 5px gray'
            rounded='lg'
            pos='relative'
            zIndex={1}
            mb='40px'
          >
            {isLogin ? (
              user?.roleId == '2' ? (
                <>
                  <Text>Login as Buyer if you want to purchase a ticket</Text>
                  <Button colorScheme='blue' width='100%' onClick={() => dispatch(logoutSuccess())}>
                    Logout
                  </Button>
                </>
              ) : (
                <Box className='selected'>
                    <Box className="selecteditem">
        {Object.keys(selectedTickets).map((ticketName) => (
          <VStack key={ticketName} align="left">
                    <HStack><MySVG/><Text>{ticketName}</Text></HStack>
            <HStack><Text>{selectedTickets[ticketName]} tiket x</Text> <Spacer /> <Text>{formatPriceToIDR(data1.find((t) => t.ticket_name === ticketName).ticket_price)}</Text></HStack>
            <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200' />
          </VStack>
        ))}
      </Box>
                  <HStack mb='10px'>
                    <Text>Total {quantity} tiket</Text>
                    <Spacer />
                    <Text fontWeight='bold' fontSize='20px'>{formatPriceToIDR(price)}</Text>
                  </HStack>
                  <Button colorScheme='blue' width='100%' onClick={onOpen} isDisabled={quantity == 0 ? true : false}>
                    Beli Tiket
                  </Button>
                  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay  />
        <ModalContent  >
          <ModalHeader>Detail Pemesanan</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignContent='center'>
         
                 <DetailBox totalTickets={id} data={data}/>
                 <InputBox form={formData} setForm={setFormData} />
                  <VStack><PriceBox totalPrice={price} totalQuantity={quantity} totalTickets={id} data={data} formData={formData}/></VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </Box>
              )
            ) : (
              <>
                <Text>Please register as a Buyer if you want to purchase a ticket</Text>
                <Button width={'100%'} colorScheme='blue' onClick={() => navigate('/register')}>
                  Daftar
                </Button>
              </>
            )}
          </Box>
          <Box>
            <Text mb='10px'>Bagikan Event</Text>
            <HStack>
              <FacebookShareButton url={`${window.location.href}`} quote={'Kunjungi Event Bersamaku!'} hashtag='#ticketing'>
                <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                  Facebook
                </Button>
              </FacebookShareButton>
              <TwitterShareButton url={`${window.location.href}`} quote={'Kunjungi Event Bersamaku!'} hashtag='#ticketing'>
                <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                  Twitter
                </Button>
              </TwitterShareButton>
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default BottomBox;