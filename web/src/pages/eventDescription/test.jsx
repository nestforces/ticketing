import React, { useState } from 'react';
import { Tiket } from './Tiket'; // Import your Tiket component
import { Text, HStack, Box, IoTicket, Button } from '@chakra-ui/react'; // Import other components

const TicketPurchase = () => {
  const [tickets, setTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (ticket, quantity) => {
    // Handle the increment logic and update the tickets state
  };

  const handleDecrement = (ticket, quantity) => {
    // Handle the decrement logic and update the tickets state
  };

  const handleTotalChange = (ticket, total) => {
    // Update the total price whenever the Tiket component calculates it
    setTotalPrice(totalPrice => totalPrice - (ticket.price * ticket.quantity) + total);
  };

  return (
    <div>
      <Tiket
        ticket={ticket}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onTotalChange={handleTotalChange}
      />
      <div>
        <Text>Nama Tiket</Text>
        <HStack>
          <Text>Jumlah Tiket</Text>
          <Spacer />
          <Text fontWeight='bold'>{totalPrice}</Text>
        </HStack>
        <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200' />
        <HStack mb='10px'>
          <IoTicket color='blue' />
          <Text>Total {tickets.reduce((acc, ticket) => acc + ticket.quantity, 0)} tiket</Text>
          <Spacer />
          <Text fontWeight='bold'>{totalPrice}</Text>
        </HStack>
        <Button colorScheme='blue' width='100%'>Beli Tiket</Button>
      </div>
    </div>
  );
};

export default TicketPurchase;
