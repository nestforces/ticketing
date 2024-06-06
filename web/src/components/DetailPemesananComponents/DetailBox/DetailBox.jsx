import { Flex, Image, Heading, Text, Box, Divider, HStack, VStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs' 
import {AiFillClockCircle} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import { ReactComponent as MySVG } from '../../EventDescriptionComponents/BottomBox/ic_voucher.svg';


export const DetailBox = ({totalTickets , totalPrice, data}) => {
    console.log("ini di detail box data", data);
    console.log("ini di detail box totalPrice", totalPrice);
    console.log("ini di detail box total ticket", totalTickets);
    console.log("ini nama ticket di detail box", totalTickets[0].ticket.ticket_name);
    function formatPriceToIDR(price) {
        // Use Intl.NumberFormat to format the number as IDR currency
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(price);
      }
    
    return(
        <Box padding='20px' boxShadow="0px 1px 5px gray" borderRadius='10px'>
                     
                     <Box display='flex' flexDirection={{base: 'column', md:'row', sm:'column'}}>
                         <Box>
                            {/* <Image borderRadius='10px' src={require('../../../assets/images/imagedesc.jpg')} mb='10px' width={{base: '100%', md: '290px', sm: '100%'}} /> */}
                         </Box>
                         <Box ml={{base: '0px', md: '20px', sm: '0px'}}>
                            <VStack alignItems='left' mb='2px'>
                            <Heading as='h4' size='md' mb='5px'>{data?.data?.name}</Heading>
                            <HStack><BsFillCalendarDateFill color='gray' /><Text>{data?.data?.date}</Text></HStack>
                            <HStack><AiFillClockCircle color='gray' /><Text>{data?.data?.time}</Text></HStack>
                            <HStack><HiLocationMarker color='gray' /><Text>{data?.data?.location}</Text></HStack>
                            </VStack>
                         </Box>
                 
                     </Box>
                    <Box as='hr' borderTopWidth='3px' borderTopColor='black.200' />
                     <HStack margin='5px' color='GrayText'><Text>Jenis Tiket</Text><Spacer /><HStack><Text>Harga</Text><Spacer /><Text>Jumlah</Text></HStack></HStack>
                    <Box as='hr' borderTopWidth='3px' borderTopColor='black.200' />
                    {totalTickets?.map((item, index) => (
  <HStack key={index} margin='5px'>
    <MySVG />
    <Text>{item?.ticket?.ticket_name}</Text>
    <Spacer />
    <HStack>
      <Text>{formatPriceToIDR(item?.ticket?.ticket_price)}</Text>
      <Spacer /><Spacer /><Spacer />
      <Text>x{item?.quantity}</Text><Spacer /><Spacer />
    </HStack>
  </HStack>
))}

                     
                 </Box>
    )
}
