import { 
  Box, 
  Grid, 
  GridItem, 
  Tab, 
  TabList, 
  Tabs, 
  Text, 
  TabIndicator, 
  TabPanel, 
  TabPanels, 
  Textarea, 
  Button, 
  Input, 
  Image, 
  AbsoluteCenter, 
  InputGroup, 
  VStack, 
  Icon,
  Flex 
  } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import axios from 'axios'
import Header from '../dashboard/Header'
import Footer from '../../components/footer/Footer'
import Gratis from './Gratis'
import Berbayar from './Berbayar'
import { BiSolidTimeFive } from 'react-icons/bi'
import UpdateTicket from './UpdateTicket'

function BuatEvent() {
  const [ticket, setTicket] = useState();
    const fetchData = async () => {
        try {
          const response = await axios.get ("http://localhost:3000/ticket");
        //   const res = await response.json()
          setTicket(response.data);
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchData();
    }, []);

    console.log(ticket)

  return (
    <Box>
      <Header/>
      
      <Box className={'container-all'} width={'100%'} maxWidth={'950px'} margin={'auto'} marginBottom={'50px'} position={'relative'}>
        <Box className='container-top' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
          <Box className='event-card'
          borderRadius={'16px'}
          border={'1px solid #d8d8d8'}
          overflow={'hidden'}>
            <Box width={'100%'} minHeight={'150'} maxHeight={'420'} backgroundColor={'gray.200'} position={'relative'}>
              <Image width='100%' src='https://www.loket.com/images/banner-event.jpg'/>

              <AbsoluteCenter>
                <InputGroup for='input-image' marginBottom={'70px'}>
                  <Icon position={'absolute'} as = {AiOutlinePlusCircle} color={'white'} boxSize={'16'} left={'0'} right={'0'} margin={'auto'}/>
                  <Input position={'absolute'} id='input-image' type='file' zIndex={'99'} opacity={'0'} width={'16'} left={'0'} right={'0'} margin={'auto'}/>
                </InputGroup>
                <Text fontSize={'2xl'} textAlign={'center'} color={'white'}>Unggah Gambar/Poster/Banner</Text>
                <Text textAlign={'center'} color={'white'}>Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb</Text>
              </AbsoluteCenter>
              
            </Box>
            <Box padding={'15px 40px 40px'}>
              <Grid gridTemplateColumns={'1fr 1fr 1fr'}>
                  <GridItem colSpan={'3'}>
                    <Input placeholder='Nama Event' size={'lg'} variant={'unstyled'}/>
                  </GridItem>
                  <GridItem colSpan={'3'}>
                    <Input placeholder='Category' variant={'unstyled'}/>
                  </GridItem>
                  <GridItem>
                    <Text as={'b'}>Diselenggarakan Oleh</Text>
                    <Input placeholder='Nama Penyelenggara' variant='unstyled'/>
                  </GridItem>
                  <GridItem paddingRight={'32px'}>
                    <Text as={'b'}>Tanggal & Waktu</Text>
                    <Input type='date' variant={'unstyled'}/>
                    <Input type='time' variant={'unstyled'}/>
                  </GridItem>
                  <GridItem>
                    <Text as={'b'}>Lokasi</Text>
                    <Input placeholder='Tempat penyeleggaraan acara' variant={'unstyled'}/>
                  </GridItem>
              </Grid>
            </Box>
        </Box>
      </Box>
      
      <Box className={'container-ticket'} margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Grid 
        marginTop={'20px'}
        gridTemplateRows={'1fr'}
        gridGap={'15px'}
        position={'relative'}>
          
          {ticket && ticket.length > 0 ? (
          ticket.map((item) => (

          <Box backgroundColor={'#ebf5ff'}
          border={'1px solid #0049cc'}
          minHeight={'193px'}
          width={'100%'}
          height={'auto'}
          padding={'16px 32px'}
          borderRadius={'8px'}
          key = {item.id}>
            
            <Box position={'relative'}
            paddingBottom={'17px'}
            borderBottom={'1px dashed #0049cc'}>
              <Text fontSize={'2xl'}>{item.ticket_name}</Text>
              <Text>{item.ticket_category}</Text>
              <Flex alignItems={'center'} marginTop={'12px'}>
                <Icon as = {BiSolidTimeFive} color={'#007AFE'} marginRight={'5px'}/>
                <Text color={'#007AFE'}>{item.ticket_end_date}</Text>
              </Flex>
            </Box>
            <Flex position={'relative'}
            padding={'16px 0 0'}
            justifyContent={'space-between'}
            alignItems={'center'}>
              <Box position={'absolute'}
              width={'20px'}
              height={'32px'}
              left={'-34px'}
              top={'-17px'}
              borderBottomRightRadius={'75px'}
              borderTopRightRadius={'75px'}
              border={'1px solid #0049cc'}
              borderLeft={'0'}
              backgroundColor={'white'}></Box>
              <Text as={'b'} fontSize={'xl'}>{item.ticket_price}</Text>
              <Text as={'b'} fontSize={'xl'} color={'#0049CB'}>{item.number_of_ticket}</Text>
              <Box position={'absolute'}
              width={'20px'}
              height={'32px'}
              right={'-34px'}
              top={'-17px'}
              borderBottomLeftRadius={'75px'}
              borderTopLeftRadius={'74px'}
              border={'1px solid #0049cc'}
              borderRight={'0'}
              backgroundColor={'white'}></Box>
            </Flex>
            <UpdateTicket ticket={item} />
          </Box>
          ))
          ) : (
            <></>
          )}
        </Grid>
      </Box>
      <Box className='container-bottom' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'}>
        <Tabs position={'relative'} variant={'unstyled'} overflow={'auto'} width={'100%'}
        >
          <TabList width={'100%'}>
            <Tab>DESKRIPSI EVENT</Tab>
            <Tab>KATEGORI TIKET</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            />
        <TabPanels >
          <TabPanel paddingRight={'0'}>
            -Deskripsi 
            <Textarea></Textarea>
            -Syarat & Ketentuan
            <Textarea></Textarea>
          </TabPanel>
          <TabPanel paddingRight={'0'}>
            <Grid gridTemplateColumns={{base:'1fr', md:'1fr 1fr'}}
            gridGap={'50px'}
            
            >
                <Box>
                  <Gratis/>
                </Box>
                <Box>
                  <Berbayar/>
                </Box>
            </Grid>
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
      <Box className='container-button' margin={'40px auto'} maxWidth={'900px'} paddingRight={'40px'} paddingLeft={'40px'} position={'relative'}>
        <Box position={'absolute'} right={'10'}>
          <Button variant={'outline'} marginRight={'10px'}>Simpan Draf</Button>
          <Button backgroundColor='#0049cc' color={'white'} marginLeft={'10px'} _hover={{color: '#0049cc', backgroundColor: '#EDF2F7', outlineColor: '#0049cc'}}>Buat Event Sekarang</Button>
        </Box>
      </Box>
        <Box height={'30px'}></Box>
      </Box>
    <Footer/>
    </Box>
  )
}

export default BuatEvent