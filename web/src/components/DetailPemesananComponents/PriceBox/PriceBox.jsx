import { Input, Heading, Text, Box, Divider, useColorModeValue, Button, HStack, Spacer } from '@chakra-ui/react';
import {React, useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from "../../../components/Auth/Auth";
import { useSelector } from "react-redux";

export const PriceBox = ({totalPrice, totalQuantity, totalTickets, data, formData}) => {
    const { user, isLogin } = useSelector((state) => state.AuthReducer);
    const [newPrice, setNewPrice] = useState(totalPrice)
    const [discount, setDiscount] = useState(0)
    const [refValue, setRefValue] = useState("");
    const [points, setPoints] = useState(user.points);
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    function formatPriceToIDR(price) {
        // Use Intl.NumberFormat to format the number as IDR currency
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(price);
      }

      function intToThousands(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

      const handleOrder =  async () => {
          try {
              const response = await axios.post(`http://localhost:8080/order`, {
                totalQuantity: totalQuantity, 
                totalPrice: newPrice, 
                referralCodeBy: refValue, 
                eventId: data?.data?.id, 
                ticket: totalTickets, 
                name: formData.name, 
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                eventName: data?.data?.name,
                remainingPoints: points,
                pointToUser: data?.data?.pointToUser,
              }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
              })

              console.log(response?.data?.data?.id)
              
            
            if (newPrice > 0) {
                toast.success("Success, please complete your payment");
              toast.info("You will be directing to payment...")
                setTimeout(() => {
                    navigate(`/confirmation/${response?.data?.data?.id}`);
                }, 5000);
            } else {
                toast.success("Success, your payment completed");
              toast.info("You will be directing to invoice...")
                setTimeout(() => {
                    navigate(`/invoice/${response?.data?.data?.id}`);
                }, 5000);
            }
          } catch (err) {
              console.log(err);
          }
      }

      const handlePoints = (x) => {
          try {
            if (points > newPrice) {
                const change = points - newPrice;
            setNewPrice(0); setDiscount(discount + newPrice)
            setPoints(change)
            } else {
            setNewPrice(newPrice - x); setDiscount(discount + x)
            setPoints(0)
            }
          } catch (err) {
              console.log(err);
          }
      }

      const handleRef = async (referral) => {
            try {
                console.log("ini referral", referral);
                
                const response = await axios.get(
                    `http://localhost:8080/order/referral/${referral}`
                );
                console.log(response);
                if (newPrice == 0) {toast.info("Your transaction already free") 
                    setRefValue('');
                    document.getElementById('refButton').disabled = true; }
                else if (response?.data?.data.length > 1) {
                    toast.error('Sorry, referral code already used')
                    setNewPrice(newPrice); setDiscount(discount)
                    setRefValue('');
                }
                else if (response?.data?.data[0]?.referralCode == referral && response?.data?.data[0]?.eventId == data?.data?.id) {
                    setNewPrice(newPrice - (totalPrice * data.data.discount / 100));
                    setDiscount(discount + (totalPrice * data.data.discount / 100))
                    toast.success('referral code used');
                    document.getElementById('refButton').disabled = true;
                } else {  toast.error('Invalid referral code'); setNewPrice(newPrice); setDiscount(discount)}
            } catch (err) {
                console.log(err);
            }
      }

      console.log("ini data di pricebox", data);
    return (
        <><form>
        <Box role={'group'}
                    p={6}
                    maxW={{ md: '390px', sm: '100%', base: '100%' }}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow="0px 1px 5px gray"
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    mb='50px'>
                        <Box mb='10px'>
                            <HStack mb='20px'>
                            <Input name='ref' value={refValue} onChange={(e) => setRefValue(e.target.value)} placeholder='Masukkan kode promo' bg='blue.100'></Input>
                            <Button colorScheme='blue' width='40%' onClick={() => handleRef(refValue)} id='refButton'>Terapkan</Button>
                            </HStack>
                            {user.points > 0 ? (<><HStack mb='20px'>
                            <Text >Kamu memiliki {intToThousands(points)} points</Text><Spacer />
                            <Button colorScheme='blue' width='40%' onClick={() => handlePoints(points)}>Gunakan</Button>
                            </HStack></>) : null}
                        <Heading as='h4' size='md' mb='10px' fontWeight='medium'>Detail Harga</Heading>
                        <HStack mb='5px'><Text>Total Harga Tiket</Text><Spacer /><Text>{formatPriceToIDR(totalPrice)}</Text></HStack>
                        <HStack mb='5px'><Text>Diskon</Text><Spacer /><Text>{formatPriceToIDR(discount)}</Text></HStack>
                        <Box as='hr' my={3} borderTopWidth='3px' borderTopColor='black.200'></Box>
                        <HStack mt='10px' mb='10px'><Text fontWeight='bold'>Total Bayar</Text><Spacer /><Text fontWeight='bold'>{formatPriceToIDR(newPrice)}</Text></HStack>
                        <Divider />
                        </Box>
                        <Button colorScheme='blue' width='100%' onClick={() => handleOrder()}>Bayar Tiket</Button>
                        
                    </Box>
                    <ToastContainer />
                    </form></>
    )
}

export default PriceBox;