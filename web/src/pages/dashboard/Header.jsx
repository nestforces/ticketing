import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    createIcon,
    MenuButton,
    MenuList,
    Menu,
    MenuItem,
    MenuDivider,
    Link as ChakraLink, LinkProps
  } from '@chakra-ui/react';
  import { Link as ReactRouterLink } from 'react-router-dom'
  import {
    FiMenu,
    FiBell,
    FiChevronDown,
  } from 'react-icons/fi';
  
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

  
  const MobileNav = ({ onOpen, ...rest }) => {
    return (
      <Flex
        // ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Flex display= {{ base: 'flex', md: 'none' }}>
        <Logo boxSize={{base:'8', lg:'10'}}
                color={'#0F2041'}
                marginRight={'8px'}/>
          <Text fontSize="2xl" fontWeight="bold" color={'#0F2041'}>
            Ticketing
          </Text>
        </Flex>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
          <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://media.suara.com/pictures/653x366/2022/10/14/23898-fakta-menarik-happy-asmara-instagramathappy-asmara77.webp'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Happy Asmara</Text>
                  <Text fontSize="xs" color="gray.600">
                    Pembeli
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              >
              <MenuItem _hover={{color: "#ff544a", bg: "none"}} _focus={{color: "#ff544a", bg: "none"}} _active={{color: "#ff544a", bg: "none"}}>Profile</MenuItem>
              <MenuItem _hover={{color: "#ff544a", bg: "none"}} _focus={{color: "#ff544a", bg: "none"}} _active={{color: "#ff544a", bg: "none"}}>Settings</MenuItem>
              <MenuItem _hover={{color: "#ff544a", bg: "none"}} _focus={{color: "#ff544a", bg: "none"}} _active={{color: "#ff544a", bg: "none"}}>Billing</MenuItem>
              <MenuDivider />
              <MenuItem _hover={{color: "#ff544a", bg: "none"}} _focus={{color: "#ff544a", bg: "none"}} _active={{color: "#ff544a", bg: "none"}}>Sign out</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
  const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
      </Box>
    );
  };
  
  export default Header;
  