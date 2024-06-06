import { Box, Heading, Button } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardSearch from "../../components/CardSlider/CardSearch";
import ButtonToggle from "../../components/ButtonToggle/ButtonToggle";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const cardsData = [
  {
    id: 1,
    title: "INDONESIA UNITED IN WORSHIP",
    date: "28 Oct 2023",
    price: "Rp. 164.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230901124356_64f17a1c3e9cd.jpg",
    creator: "PRESTIGE PROMOTIONS",
  },
  {
    id: 2,
    title: "PEKAN RAYA JATIM",
    date: "14 Oct - 22 Oct 2023",
    price: "Rp. 80.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922011910.jpg",
  },
  {
    id: 3,
    title: "OMO! MARKET K-POP FESTIVAL",
    date: "11 Nov - 12 Nov 2023",
    price: "Rp. 50.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230927232153_651456a165823.jpg",
  },
  {
    id: 4,
    title: "Festival Titik Temu 2023",
    date: "11 Nov - 12 Nov 2023",
    price: "Rp. 50.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230910204006_64fdc73699f08.jpg",
  },
  {
    id: 5,
    title: "GHOST MANSION",
    date: "21 Sep - 22 Oct 2023",
    price: "Rp. 30.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230922135934_650d3b56bebe4.jpg",
  },
  {
    id: 6,
    title: "Candyland: A Sweet Escape Playground",
    date: "18 Sep - 22 Oct 2023",
    price: "Rp. 40.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230913093801_65012089996df.jpg",
  },
  {
    id: 7,
    title: "HOMECOMING express tour 2023 (Jakarta)",
    date: "22 Oct 2023",
    price: "Rp. 250.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230921123205_650bd555b6473.jpg",
  },
  {
    id: 8,
    title: "Spooktacular: Chingu's Halloween Party",
    date: "27 Oct 2023",
    price: "Rp. 150.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231018095740_652f49a4a197e.jpg",
  },
  {
    id: 9,
    title: "CARD 9",
    content: "Bruce Banner",
    imgUrl: "https://unsplash.it/200/198",
  },
  {
    id: 10,
    title: "CARD 10",
    content: "Vincent Strange",
    imgUrl: "https://unsplash.it/198/199",
  },
];
const Search = () => {
  return (
    <Box>
      <Navbar />
      <Box
        className="discover-page"
        position={"relative"}
        maxWidth={"none"}
        display={"flow-root"}
        boxSizing={"content-box"}
        marginTop={"2%"}
        marginLeft={"40px"}
        marginRight={"auto"}
        flexDirection={"column"}
      >
        <Box
          className="discover"
          marginLeft={"-15px"}
          display={"flex"}
          flexWrap={"wrap"}
          margin={"0"}
          padding={"0"}
          listStyleType={"none"}
        >
          <Box className="side-bar" minHeight={"100%"} paddingLeft={"15px"}>
            <Box
              width={"256px"}
              height={"100%"}
              padding={"20px 20px 20px 0"}
              borderRight={"1px solid"}
              boxSizing={"border-box"}
            >
              <Box
                className="header"
                padding={"0 20px 20px"}
                fontSize={"20px"}
                fontWeight={"200"}
                color={"black"}
                borderBottom={"1px solid"}
              >
                <Heading> Filter </Heading>
              </Box>
              <Box className="body">
                <Box
                  className="filter"
                  margin={"0"}
                  padding={"20px"}
                  borderBottom={"1px solid"}
                >
                  <Box
                    display={"flex"}
                    gap={"60px"}
                    marginBottom={"60px"}
                    marginTop={"15px"}
                  >
                    <Box>
                      <Heading fontSize={"16px"}> Event Gratis </Heading>
                    </Box>
                    <Box width={"auto"}>
                      <ButtonToggle />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Menu>
                        <MenuButton
                          as={Button}
                          backgroundColor="transparent"
                          _hover={"white"}
                          _active={"white"}
                          rightIcon={<ChevronDownIcon />}
                        >
                          Lokasi
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Jogja</MenuItem>
                          <MenuItem>Bali</MenuItem>
                          <MenuItem>Bandung</MenuItem>
                          <MenuItem>Jakarta</MenuItem>
                          <MenuItem>Surabaya</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                    <Box>
                      <Menu>
                        <MenuButton
                          as={Button}
                          backgroundColor="transparent"
                          _hover={"white"}
                          _active={"white"}
                          rightIcon={<ChevronDownIcon />}
                        >
                          Kategori
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Bisnis</MenuItem>
                          <MenuItem>Keagamaan</MenuItem>
                          <MenuItem>Karir, Pengembangan diri</MenuItem>
                          <MenuItem>Musik</MenuItem>
                          <MenuItem>Game, E-Sport</MenuItem>
                          <MenuItem>Olahraga</MenuItem>
                          <MenuItem>Otomotif</MenuItem>
                          <MenuItem>Stand Up Comedy</MenuItem>
                          <MenuItem>Tech, Startup</MenuItem>
                          <MenuItem>Pendidikan, Beasiswa</MenuItem>
                          <MenuItem>Keuangan, Finansial</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="content">
            <CardSearch cards={cardsData} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Search;
