
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Box, HStack, Text, Heading, IconButton, Spacer, Flex, Icon, VStack } from '@chakra-ui/react';
import { AiFillClockCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BiSolidTimeFive } from 'react-icons/bi';

const Tiket = ({ totalId, setTotalId, totalQuantity, setTotalQuantity, totalPrice, setTotalPrice, selectedTicket, setSelectedTicket, ticket }) => {
  const [data, setData] = useState([]);

  const fetchData = async (ticket) => {
    try {
      const response = await axios.get(`http://localhost:8080/event/ticket/${ticket}`);
      setData(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (ticket) {
      fetchData(ticket);
    }
  }, [ticket]);

  function formatPriceToIDR(price) {
    // Use Intl.NumberFormat to format the number as IDR currency
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  const increment = (ticket) => {
    // Create a copy of the selected tickets
    console.log("ini didalam increment",ticket);
    const newSelectedTickets = { ...selectedTicket };
    const newId = [...totalId]

    const exist = newId.findIndex((item) => item.ticket.id === ticket.id)

    if (exist !== -1) {
      newSelectedTickets[ticket.ticket_name] += 1; // Increment by 1 
      newId[exist].quantity += 1;
    } else {
      newSelectedTickets[ticket.ticket_name] = 1; // Initialize with 1 if not selected before
      newId.push({ticket: ticket, quantity: 1});
      
    }

    // Update the state and total price
    setSelectedTicket(newSelectedTickets);
    setTotalPrice(totalPrice + ticket.ticket_price);
    setTotalQuantity(totalQuantity + 1);

    // Update the totalId array with selected tickets
    setTotalId(newId);
  };

  const decrement = (ticket) => {
    // Create a copy of the selected tickets
    const newSelectedTickets = { ...selectedTicket };
    const newId = [...totalId]

    const exist = newId.findIndex((item) => item.ticket.id === ticket.id)

    if(exist !== -1) {
      if(newSelectedTickets[ticket.ticket_name] > 1){
        newSelectedTickets[ticket.ticket_name] -= 1;
        newId[exist].quantity -= 1;
      } else {
        delete newSelectedTickets[ticket.ticket_name];
        newId.splice(exist, 1)
      }
    }

    // Update the state and total price
    setSelectedTicket(newSelectedTickets);
    setTotalPrice(totalPrice - ticket.ticket_price);
    setTotalQuantity(totalQuantity - 1);

    // Update the totalId array with selected tickets
    setTotalId(newId);
  };


  return (
    <>
      {data.length > 0 &&
        data.map((ticket, index) => (
          <Box
            backgroundColor={'#ebf5ff'}
            border={'1px solid #0049cc'}
            minHeight={'193px'}
            width={'100%'}
            height={'auto'}
            padding={'16px 32px'}
            borderRadius={'8px'}
            mb='10px'
            key={ticket.ticket_name}
          >
            <Box position={'relative'} paddingBottom={'17px'} borderBottom={'1px dashed #0049cc'}>
              <Text fontSize={'2xl'}>{ticket.ticket_name}</Text>
              <Text>{ticket.ticketCategory?.name}</Text>
              <Flex alignItems={'center'} marginTop={'12px'}>
                <Icon as={BiSolidTimeFive} color={'#007AFE'} marginRight={'5px'} />
                <Text color={'#007AFE'}>{ticket.ticket_end_date}</Text>
              </Flex>
            </Box>
            <Box position={'relative'} padding={'16px 0 0'}>
              <Box
                position={'absolute'}
                width={'20px'}
                height={'32px'}
                left={'-34px'}
                top={'-17px'}
                borderBottomRightRadius={'75px'}
                borderTopRightRadius={'75px'}
                border={'1px solid #0049cc'}
                borderLeft={'0'}
                backgroundColor={'white'}
              ></Box>
              <HStack>
                <Text fontWeight='bold'>{formatPriceToIDR(ticket.ticket_price)}</Text>
                <Spacer />
                <Spacer />
                {ticket.number_of_ticket > 0 ? (
                  <><IconButton
                  onClick={() => decrement(ticket)}
                  colorScheme='transparent'
                  isDisabled={selectedTicket[ticket.ticket_name] == null ? true : false}
                  icon={<AiOutlineMinusCircle size='25px' color='blue' />}
                />
                <Text>{selectedTicket[ticket.ticket_name] || 0}</Text>
                <IconButton
                  onClick={() => increment(ticket)}
                  colorScheme='transparent'
                  isDisabled={selectedTicket[ticket.ticket_name] == (ticket.number_of_ticket) ? true : false}
                  icon={<AiOutlinePlusCircle size='25px' color='blue' />}
                /></>
                ) : (
                  <><Text fontWeight='bold' color='red.500'>SOLD OUT</Text></>
                )} 
                
              </HStack>
              <Box
                position={'absolute'}
                width={'20px'}
                height={'32px'}
                right={'-34px'}
                top={'-17px'}
                borderBottomLeftRadius={'75px'}
                borderTopLeftRadius={'74px'}
                border={'1px solid #0049cc'}
                borderRight={'0'}
                backgroundColor={'white'}
              ></Box>
            </Box>
          </Box>
        ))}
    </>
  );
};

export default Tiket;