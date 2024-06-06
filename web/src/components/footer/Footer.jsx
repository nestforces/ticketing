import { Box, Flex, ListItem, Text, UnorderedList, Link } from '@chakra-ui/react'
import React from 'react'
import { BsYoutube, BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaSquareFacebook, FaLinkedin } from 'react-icons/fa6'



function Footer() {
  return (
    <Box>
        <Box className='footer-main'
        backgroundColor={'#112041'}
        marginTop={'80px'}>
            <Flex className='container-footer-main'
            padding={'0 50px'} flexDirection={'column'}>
                <Flex 
                marginTop={'40px'} 
                marginBottom={'20px'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}>
                    <Box color={'white'} paddingTop={'40px'}>
                    <Text as={'b'} marginLeft={'16px'}>Tentang Ticketing</Text>
                    <UnorderedList styleType={'none'} paddingTop={'20px'}>
                        <ListItem>
                            <Link>Biaya</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Lihat Event</Link>
                        </ListItem>
                        <ListItem>
                            <Link>FAQ</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Syarat dan Ketentuan</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Laporan Kesalahan</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Sistem</Link>
                        </ListItem>
                    </UnorderedList>
                    </Box>
                    <Box color={'white'} paddingTop={'40px'}>
                    <Text as={'b'} marginLeft={'16px'}>Rayakan Eventmu</Text>
                    <UnorderedList styleType={'none'} paddingTop={'20px'}>
                        <ListItem>
                            <Link>Cara Mempersiapkan Event</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Membuat Event Agar Sukses</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Membuat Event Lomba</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Mempublikasikan Event</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Membuat Event Musik</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Mengelola Event</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cara Membuat Acara Yang Menarik</Link>
                        </ListItem>
                    </UnorderedList>
                    </Box>
                    <Box color={'white'} paddingTop={'40px'}>
                    <Text as={'b'} marginLeft={'16px'}>Lokasi Event</Text>
                    <UnorderedList styleType={'none'} paddingTop={'20px'}>
                        <ListItem>
                            <Link>Yogyakarta</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Solo</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Sleman</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Bantul</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Klaten</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Gunungkidul</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Magelang</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Semua Kota</Link>
                        </ListItem>
                    </UnorderedList>
                    </Box>
                    <Box color={'white'} paddingTop={'40px'}>
                    <Text as={'b'} marginLeft={'16px'}>Inspirasi Event</Text>
                    <UnorderedList styleType={'none'} paddingTop={'20px'}>
                        <ListItem>
                            <Link>Festival</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Konser</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Olahraga</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Workshop & Seminar</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Teater & Drama</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Atraksi</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Semua Kategori</Link>
                        </ListItem>
                    </UnorderedList>
                    </Box>
                </Flex>
                <Flex 
                marginTop={'30px'}
                marginBottom={'40px'}
                justifyContent={'center'}
                flexWrap={'wrap'} color='white' fontSize={'30px'}
                alignItems={'center'}>
                    <Box marginLeft={'10px'} marginRight={'10px'}><FaSquareFacebook/></Box>
                    <Box marginLeft={'10px'} marginRight={'10px'}><FiInstagram/></Box>
                    <Box marginLeft={'10px'} marginRight={'10px'}><FaSquareXTwitter/></Box>
                    <Box marginLeft={'10px'} marginRight={'10px'}><FaLinkedin/></Box>
                    <Box marginLeft={'10px'} marginRight={'10px'}><BsYoutube/></Box>
                </Flex>
            </Flex>
            <Flex className='container-footer-bottom'
            padding={'30px'}
            backgroundColor={'#1d3976'}
            justifyContent={'center'}
            paddingBottom={{base:'80px', lg:'30px'}}
            >
                <Text fontSize={'11px'}
                letterSpacing={'1px'}
                color={'white'}
                lineHeight={'2em'}
                textAlign={'center'}
                >
                    <Link>Tentang Kami</Link>
                    • 
                    <Link>Blog</Link>
                    • 
                    <Link>Karir</Link>
                    • 
                    <Link>Kebijakan Privasi</Link>
                    • 
                    <Link>Kebijakan Cookie</Link>
                    • 
                    <Link>Panduan</Link>
                    • 
                    <Link>Hubungi Kami</Link>
                    • 
                    <Link>Pengaturan Cookie</Link>
                </Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer