import { Box } from "@chakra-ui/react";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CardSlider from "../../components/CardSlider/CardSlider";
import CardSlider2 from "../../components/CardSlider/CardSlider2";
import CardSlider3 from "../../components/CardSlider/CardSlider3";
import ButtonAdditional from "../../components/ButtonAdditional/ButtonAdditional";
import SectionTopSelling from "../../components/SectionTopSelling/SectionTopSellling";
import SectionCampaign from "../../components/SectionCampaign/SectionCampaign";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/Navbar Bottom/NavbarBottom'
import Footer from '../../components/footer/Footer'

const cardsData = [
  {
    id: 1,
    title: "INDONESIA UNITED IN WORSHIP",
    date: "28 Oct 2023",
    price: "Rp. 164.000",
    imgUrl:
      "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230901124356_64f17a1c3e9cd.jpg",
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
function Home() {
  return (
    <Box>
      <Navbar />
      <ToastContainer />
      <Box
        className="homePage-wrapper"
        gridRowGap={"40px"}
        marginTop={"40px"}
        display={"grid"}
        gridTemplateRows={"1fr"}
      >
        <Box className="section banner">
          <Box
            className="section-wrapper"
            margin={"0 auto"}
            maxWidth={"1244px"}
          >
            <Box className="tns-outer">
              <Box
                className="tns-inner"
                backgroundColor={"black"}
                display={"flex"}
                width={"96.8%"}
                position={"sticky"}
                borderRadius={"16px"}
                overflow={"hidden"}
              >
                <BannerSlider />
              </Box>
            </Box>
          </Box>
        </Box>
        <CardSlider cards={cardsData} />
        <SectionTopSelling />
        <CardSlider2 cards={cardsData} />
        <SectionCampaign />
        <CardSlider3 cards={cardsData} />
        <ButtonAdditional />
      </Box>
      <NavbarBottom />
      <Footer />
    </Box>
  );
}

export default Home;
