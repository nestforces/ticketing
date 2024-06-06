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
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
  } from 'react-icons/fi';
  import {HiMiniTicket} from 'react-icons/hi2'
  import { GoHomeFill } from 'react-icons/go'
  import {MdExplore} from 'react-icons/md'
  import {RiAccountBoxFill} from 'react-icons/ri'
  import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../../redux/reducer/authReducer";
  
  const LinkItems = [
    { name: 'Home', icon: GoHomeFill, link: '/' },
    { name: 'Tiket Saya', icon: HiMiniTicket, link: '/user'},
    { name: 'Jelajah Event', icon: MdExplore},
    { name: 'Informasi Dasar', icon: RiAccountBoxFill },
    { name: 'Settings', icon: FiSettings },
  ];
  
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

  
  const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        backgroundColor={'#152955'}
        boxShadow={'base'}
        {...rest}>
        <Flex h="20" alignItems="center" paddingLeft="8" bg={'#0F2041'} justifyContent={'space-between'} paddingRight={'8'}>
        <Flex>
        <Logo boxSize={{base:'8', lg:'10'}}
                color={'white'}
                marginRight={'8px'}/>
          <Text fontSize="2xl" fontWeight="bold" color={'white'}>
            Ticketing
          </Text>
        </Flex>
          <CloseButton color='white' display={{ base: 'flex', lg: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
           <>
           {link.link ? (
          <ChakraLink as={ReactRouterLink} to={link.link} _hover={{textDecoration: 'none'}}>
          <NavItem 
           key={link.name} icon={link.icon}>
          {link.name}
            
          </NavItem>
          </ChakraLink>
          ) : (
            <NavItem 
            key={link.name} icon={link.icon}>
           {link.name}
             
           </NavItem>
            )}
            </>
        ))}


      </Box>
    );
  };
  
  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none', bg: "#0049CC", color:"white"}}>
        <Flex
          align="center"
          p="4"
          paddingLeft="8"
        //   mx="4"
          role="group"
          cursor="pointer"
          color='#8AA9C3'
          _hover={{
            bg: '#0049CC',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    );
  };
  
  const MobileNav = ({ onOpen, ...rest }) => {
    const { user, isLogin } = useSelector((state) => state.AuthReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
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
                    `${process.env.REACT_APP_IMAGE_URL}/avatar/${user.avatar}`
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user.username}</Text>
                  
                    {user.roleId == 1 ? (<Text fontSize="xs" color="gray.600">Buyer</Text>) : (<Text fontSize="xs" color="gray.600">Event Organizer</Text>)}
                  
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
              <MenuItem _hover={{color: "#ff544a", bg: "none"}} _focus={{color: "#ff544a", bg: "none"}} _active={{color: "#ff544a", bg: "none"}} onClick={()=> dispatch(logoutSuccess(), navigate("/"))}>Sign out</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
  const SidebarWithHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box>
        <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
      </Box>
    );
  };
  
  export default SidebarWithHeader;
  