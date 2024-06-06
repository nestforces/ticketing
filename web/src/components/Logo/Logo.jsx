import {createIcon, Text} from '@chakra-ui/react'

function Logo() {
    const Logo = createIcon({
        displayName: "Logoipsum_296",
        viewBox: "0 0 40 40",
        path: (
          <>
            <path
              fill="currentColor"
              d="M25.556 11.685A10 10 0 0020 10V0A20 20 0 110 20h10a10 10 0 1015.556-8.315z"
            />
            <path
              fill="currentColor"
              d="M10 0A10 10 0 010 10v10A20 20 0 0020 0H10z"
            />
          </>
        ),
      });

      return (
          <>
          <Logo boxSize={{base:'8', lg:'10'}}
                        color={'blue'}/>

                        <Text 
                        as='b' 
                        color={'blue'}
                        fontWeight={'extrabold'}
                        fontSize={{ base: 'l', lg: '3xl'}}
                        marginStart={'8px'}>Ticketing</Text>
          </>
      )
}

export default Logo;