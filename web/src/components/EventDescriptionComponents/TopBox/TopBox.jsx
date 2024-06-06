import { Flex, Image, Heading, Text, Box, useColorModeValue, HStack, VStack} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import {BsFillCalendarWeekFill} from 'react-icons/bs' 
import {AiFillClockCircle,} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import axios from 'axios'

const TopBox = (data) => {

    return(
        <Flex padding='5%' mt={{base: '-5px', md: '-40px', sm: '-5%'}} direction={{base: 'column', md:'row', sm:'column'}}>
            <Box width={{base: '100%', md: '65%', sm:'100%'}}>
                 <Image borderRadius='10px' src={`${process.env.REACT_APP_IMAGE_URL}/event/${data?.data?.image}`} mb='40px' />
            </Box>
            <Box width={{md: '35%', sm: '100%', base: '100%'}}>
            <Box role={'group'}
                    p={6}
                    maxW={{md: '330px', sm: '100%'}}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    // boxShadow={'xl'}
                    boxShadow="0px 1px 5px gray"
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    ml={{md:'10%', sm:'0%'}}
                    mb={{md: '50px', sm:'10px'}}>
                        <Box mb={{md: '50px', sm:'15px'}} >
                        <Heading as='h4' size='md' mb='15px'>{data?.data?.name}</Heading>
                        <HStack><BsFillCalendarWeekFill color='#007AFE' /><Text textColor='blackAlpha.800' >{data?.data?.date}</Text></HStack>
                        <HStack><AiFillClockCircle color='#007AFE' /><Text textColor='blackAlpha.800' >{data?.data?.time}</Text></HStack>
                        <HStack><HiLocationMarker color='#007AFE' /><Text textColor='blackAlpha.800' >{data?.data?.location}</Text></HStack>
                        </Box>
                        <hr/>
                        <Box>
                            
                            <HStack mt='10px'><Image width='50px' src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${data?.data?.user?.avatar}`} borderRadius='10px'/>
                            <VStack alignItems='start'><Text fontSize='md'>Diselenggarakan oleh</Text><Text mt='-10px' fontWeight='bold' fontSize='lg'>{data?.data?.user?.username}</Text></VStack></HStack>
                        </Box>
                    </Box>
            </Box>
        </Flex>
    )
}

export default TopBox;