import { Flex, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import {DetailBox} from '../../components/DetailPemesananComponents/DetailBox/DetailBox'
import {InputBox} from '../../components/DetailPemesananComponents/InputBox/InputBox'
import {PriceBox} from '../../components/DetailPemesananComponents/PriceBox/PriceBox'



const DetailPemesanan = (totalTickets , totalSelectedTickets, data) => {
    return (
        <>
        <Box paddingTop='3%' paddingLeft='5%'>
        <Heading fontSize='25px' color='blue.900'>Detail Pemesanan</Heading>
        </Box>

        <Flex direction={{md:'row', sm:'column', base: 'column'}} height="fit-content" mt={{base: '10px', md: '-60px', sm:'10px'}} alignItems={{sm:'center', md:'flex-start', base:'center'}}>
            <Flex
             flexDirection={"column"}
             width={{ md: '65%', sm: '100%', base: '100%' }}
             padding={'5%'}
            //  bg='red'
             >
                 <DetailBox />
                 <InputBox />
             </Flex>
             <Flex 
              flexDirection={"column"}
              width={{ md: '35%', sm: '100%', base: '100%' }}
              padding={{ md: '5% 0% 0% 0%', sm: '5%', base: '5%' }}
              position='sticky'
              top="20px"

              >
                  <PriceBox />
                    
              </Flex>
        </Flex >
        </>
    )
}

export default DetailPemesanan