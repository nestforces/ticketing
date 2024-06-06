import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { BsFacebook, BsCalendarWeekFill } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiSolidTimeFive } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { MdPlace } from 'react-icons/md'
import {HiMiniTicket} from 'react-icons/hi2'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/navbarBottom/NavbarBottom'

function Invoice() {

    const [data, setData] = useState();

    function formatDateTime() {
        const options = {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
      
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString('en-UK', options);
      
        return formattedDateTime;
      }
      
      const formattedDateTime = formatDateTime();

      function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
      
        return result;
      }
      
      const randomString = generateRandomString(8)

    const fetchData = async () => {
        try {
          const response = await axios.get ("http://localhost:3000/events");
        //   const res = await response.json()
          setData(response.data);
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      };

    useEffect (() => {
      fetchData();
    }, []);
    
console.log(data)

  return (
    <Box>
        <Navbar/>
    <Box overflow={'hidden'}
    padding={'20px'}>
    {data && data.length > 0 ? (
    data.filter(item => item.id === 1).map((item) => (
        <Grid className='invoice-container'
        maxWidth={'1120px'}
        gridTemplateColumns={{base:'1fr', lg:'383px 697px'}}
        margin={{base:'40px', lg:'40px auto 0'}}
        padding={'0'}
        gridGap={'40px'} 
        key = {item.id}
        >
            <Grid className='invoice-left'
            gridTemplateRows={'260px 1fr'}
            borderRadius={'16px'}
            boxShadow={'base'}
            overflow={'hidden'}>
                <Flex className='invoice-payment-success'
                backgroundColor={'#ebf5ff'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={'24px 24px 80px'}
                >
                    <Box className='payment-success-figure'
                    width={'158px'}
                    height={'95px'}
                    overflow={'hidden'}>
                        <Image src='https://www.loket.com/assets-v2/img/opt-in-registration-promo.png'/>
                    </Box>
                    <Text color={'#162855'} fontWeight={'extrabold'}>Terimakasih atas pesananmu</Text>
                </Flex>
                <Box className='invoice-description'
                padding={'24px'}
                position={'relative'}
                display={'block'}>
                    <Flex className='event-description'
                            flexDirection={'column'}
                            justifyContent={'center'}
                            padding={'16px'}
                            boxShadow={'base'}
                            borderRadius={'8px'}
                            marginTop={'-60px'}
                            display={{base:'block', lg:'none'}}
                            backgroundColor={'white'}
                            >
                                <Box marginBottom={'12px'}
                                borderBottom={'1px solid #dbdfe7'}
                                paddingBottom={'16px'}>
                                    <Text as={'b'}>{item.eventName}</Text>
                                </Box>
                                <Grid gridTemplateRows={'1fr'}
                                gridGap={'5px'}>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BsCalendarWeekFill size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.tanggal}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BiSolidTimeFive size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.jam}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <MdPlace size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.jenis}</Text>
                                    </Grid>
                                </Grid>
                            </Flex>
                    <Box marginTop={{base:'16px', lg:'-70px'}}
                    backgroundColor={'white'}
                    boxShadow={'base'}
                    borderRadius={'8px'}
                    padding={'16px'}
                    display={'block'}>
                        <Text>
                            Silakan cek email kamu untuk mendapatkan tiket yang kamu pesan atau klik tombol di bawah untuk langsung mencetak e-tiket.
                        </Text>
                        <Grid className='success-button'
                        gridTemplateRows={'1fr'}
                        marginTop={'24px'}
                        gridGap={'16px'}>
                            <Button backgroundColor={'#0049CB'} color={'white'} _hover={'none'}>Lihat E-Tiket</Button>
                            <Button color={'#0049CB'} variant={'outline'} outlineColor={'#0049CB'} _hover={'none'}>Kembali ke Beranda</Button>
                        </Grid>
                    </Box>

                    <Box className='invoice-payment-share'
                        boxShadow={'base'}
                        borderRadius={'8px'}
                        padding={'16px'}
                        marginTop={'16px'}
                        display={'block'}
                        position={'relative'}>
                        <Text as={'b'}>Bagikan Event</Text>
                        <Text marginTop={'12px'}>Yuk ajak teman-temanmu dengan membagikan event ini di media sosialmu.</Text>
                        <Flex marginTop={'20px'}>
                            <Flex 
                            width={'40px'}
                            height={'40px'}
                            border={'1px solid #dbdfe7'}
                            borderRadius={'full'}
                            padding={'10px'}
                            alignItems={'center'}
                            marginRight={'16px'}>
                                <BsFacebook color='#4267B2' size={'sm'}/>
                            </Flex>
                            <Flex 
                            width={'40px'}
                            height={'40px'}
                            border={'1px solid #dbdfe7'}
                            borderRadius={'full'}
                            padding={'10px'}
                            alignItems={'center'}
                            marginRight={'16px'}>
                                <FaSquareXTwitter size={'sm'}/>
                            </Flex>
                            <Flex 
                            width={'40px'}
                            height={'40px'}
                            border={'1px solid #dbdfe7'}
                            borderRadius={'full'}
                            padding={'10px'}
                            alignItems={'center'}
                            marginRight={'16px'}>
                                <AiFillInstagram color='#C13584' size={'sm'}/>
                            </Flex>
                            <Flex 
                            width={'40px'}
                            height={'40px'}
                            border={'1px solid #dbdfe7'}
                            borderRadius={'full'}
                            padding={'10px'}
                            alignItems={'center'}
                            marginRight={'16px'}>
                                <IoLogoWhatsapp color='#25D366' size={'sm'}/>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                
            </Grid>
            <Box display={{base:'none', lg:'block'}}>
                <Box className='event-detail'
                borderRadius={'8p'}
                boxShadow={'base'}
                padding={'24px'}>
                    <Flex className='event-detail-banner'
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    paddingBottom={'20px'}
                    borderBottom={'1px solid #dbdfe7'}>
                        <Text color={'#8E919B'}>Kode Pesanan <Text as={'span'} color={'black'}>{randomString}</Text></Text>
                        <Text color={'#8E919B'}>{formattedDateTime}</Text>
                    </Flex>
                    <Grid className='event-detail-content'
                    marginTop = '20px'
                    gridTemplateColumns={'324px 1fr'}>
                        <Box paddingRight={'24px'} borderRight={'1px solid #dbdfe7'}>
                            <Box 
                            width='100%' 
                            height='122px'
                            overflow={'hidden'}
                            borderRadius={'8px'}
                            marginBottom={'16px'}>
                                <Image src = 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231008182049_65229091f28c4.jpg'/>
                            </Box>
                            <Text  as={'b'} fontSize={'2xl'} color={'#151416'}>{item.eventName}</Text>
                        </Box>

                        <Box className='widget-event-detai'
                        paddingLeft={'24px'}>
                            <Flex className='event-description'
                            flexDirection={'column'}
                            justifyContent={'center'}
                            paddingBottom={'24px'}
                            borderBottom={'1px solid #dbdfe7'}>
                                <Box marginBottom={'12px'}>
                                    <Text as={'b'}>Jadwal dan Lokasi</Text>
                                </Box>
                                <Grid gridTemplateRows={'1fr'}
                                gridGap={'5px'}>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BsCalendarWeekFill size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.tanggal}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <BiSolidTimeFive size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.jam}</Text>
                                    </Grid>
                                    <Grid className='event-date'
                                    alignItems={'center'} 
                                    gridGap={'12px'}
                                    gridTemplateColumns={'25px 1fr'}>
                                        <Box align={'center'}>
                                            <MdPlace size={'20px'} color='#8E919B'/>
                                        </Box>
                                        <Text>{item.jenis}</Text>
                                    </Grid>
                                </Grid>
                            </Flex>
                            <Box className='event-tiket-info'
                            paddingTop={'24px'}>
                                <Box>
                                    <Text as='b'>Info Tiket</Text>
                                </Box>
                                <Grid className='tiket-list'
                                gridTemplateRows={'1fr'}
                                gridGap={'12px'}>
                                    <Grid gridTemplateColumns={'25px 1fr'}
                                    gridGap={'12px'}>
                                        <Box paddingTop={'3px'} align={'center'}>
                                            <HiMiniTicket color='#8E919B' size={'20px'}/>
                                        </Box>
                                        <Box>
                                            <Text>{item.eventName}</Text>
                                            <Text color='#8E919B'>1 Tiket</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    ))
    ) : (
      <p>Tidak ada data yang tersedia.</p>
    )}
    </Box>
    <NavbarBottom/>
    <Footer/>
    </Box>
    
  )
}

export default Invoice