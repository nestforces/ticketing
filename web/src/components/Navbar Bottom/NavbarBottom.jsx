import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GoHomeFill } from 'react-icons/go'
import { MdExplore } from 'react-icons/md'
import {LuCalendarPlus} from 'react-icons/lu'

function NavbarBottom() {
  return (
    <Box className='navbar-bottom'
    width={'100%'}
    position={'fixed'}
    bottom={'-2px'}
    left={'0'}
    backgroundColor={'white'}
    boxShadow={'-2px 0 4px rgba(30, 44, 106,.1)'}
    zIndex={'99'}
    display={{base:'block', lg:'none'}}
    >
        <Grid className='navbar-bottom-default'
        gridTemplateColumns={'1fr 1fr 1fr'}
        padding={'10px 0'}
            overflow={'hidden'}
            width={'100%'}
            >

            <Box 
            align={'center'}
            _hover={{color:'#0049cc'}} 
            color='#8e919b' 
            _active={{color:'#0049cc'}}>
                <Link>
                    <GoHomeFill/>
                    <Text fontSize={'.625rem'}>Beranda</Text>
                </Link>
            </Box>
            <Box 
            align={'center'}
            color='#8e919b' 
            _hover={{color:'#0049cc'}} 
            _active={{color:'#0049cc'}}>
                <Link>
                    <LuCalendarPlus/>
                    <Text fontSize={'.625rem'} textAlign={'center'}>Buat Event</Text>            
                </Link>
            </Box>
            <Box 
            align={'center'}
            color='#8e919b' 
            _hover={{color:'#0049cc'}} 
            _active={{color:'#0049cc'}}>
                <Link>
                    <MdExplore/>
                    <Text fontSize={'.625rem'} textAlign={'center'}>Jelajah</Text>            
                </Link>
            </Box>
            
            
        </Grid>
    </Box>
  )
}

export default NavbarBottom