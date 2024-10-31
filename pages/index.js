import HeroSlider from "../components/hero/HeroSlider";
import { Slideshow } from "../components/explore/slideShow";
import SearchBox from "../components/searchBox/searchBox";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Nextrip } from "../components/explore/nextTrip";
import ConnectWithtravellers from "../components/explore/connectTravellers";
import Navbar from "../components/navbar/HeaderNavbar";
function Stay() {  
  const slideImages = [
   
    {
      url: "https://pix3.agoda.net/hotelimages/13/0/5f8b6d43a6a287d37bfe1626ab22b0b1.jpg?s=312x",
      caption: "Radisson Hotel Iquique",
      property: "South America",
    },
    {
      url: "https://pix1.agoda.net/hotelimages/4890100/0/bbdf04328f691e68828c8f49075ace5e.jpg?s=312x",
      caption: "TRYP Malaga Alameda Hotel",
      property: "Europe",
    },
    {
      url: "https://pix3.agoda.net/hotelimages/15/0/59a863c3a6e93b759faf2beea910d516.jpg?s=312x",
      caption: "Sheraton Grand Hotel & Spa, Edinburgh",
      property: "Europe",
    },
    {
      url: "https://pix5.agoda.net/hotelimages/17/17/17_16051513410042341853.jpg?s=312x",
      caption: "Hotel Dann Carlton Medellin",
      property: "South America",
    },
    {
      url: "https://pix4.agoda.net/hotelimages/18/-1/91c5a3c5d5cc7189b0099fab9a2fbb64.jpg?s=312x",
      caption: "Grand Coloane Resort",
      property: "Asia",
    },
    {
      url: "https://pix3.agoda.net/hotelimages/25/-1/8dad037385fd554a85e013f931a8a1d5.jpg?s=312x",
      caption: "SKYCITY Hotel",
      property: "Pacific Ocean and Australia",
    },
    {
      url: "https://pix4.agoda.net/hotelimages/37/37/37_08112415020080.jpg?s=312x",
      caption: "Hotel Agua Escondida",
      property: "North America",
    },
    {
      url: "http://pix5.agoda.net/hotelimages/38/38/38_120516001857736.jpg?s=312x",
      caption: "Hotel Caribe Cartagena",
      property: "South America",
    },
  ];

  const slide = [
    {
      url: "https://pix4.agoda.net/hotelimages/5081613/0/c4e6fab98811d18cf2d8068e517ccb62.jpg?s=312x",

      caption: "Haihua Hotel Hangzhou",
      property: "Asia",
    },
    {
      url: "https://pix2.agoda.net/hotelimages/59/59/59_17050315180052767891.jpg?s=312x",
      caption: "Kobe Sannomiya Tokyu REI Hotel",
      property: "Asia",
    },
    {
      url: "https://pix5.agoda.net/hotelimages/7456302/0/fe20fe078e5b7195789ac57334dc8cba.jpg?s=312x",
      caption: "Everbright Convention & Exhibition Centre International Hotel",
      property: "Resorts",
    },
    {
      url: "https://pix3.agoda.net/hotelimages/69/0/45bf6f3bfdbf04196eabaacdfaae2ff4.jpg?s=312x",
      caption: "Hilton Garden Inn Pittsburgh University Place",
      property: "Villas",
    },
    {
      url: "https://pix4.agoda.net/hotelimages/71/71/71_15112522040038031555.jpg?s=312x",
      caption: "Apogia Hotel",
      property: "Cottages",
    },
    {
      url: "http://pix2.agoda.net/hotelimages/75/-1/450838815fb602d9fe58bba500a04a84.jpg?s=312x",
      caption: "Paris Las Vegas",
      property: "Glamping sites",
    },
    {
      url: "http://pix2.agoda.net/hotelimages/78/0/c0c8e0157b466534215921d295e02974.jpg?s=312x",
      caption: "Catalonia Brussels Hotel",
      property: "Serviced apartments",
    }
  ];

  const travel = [
    {
      caption: "Grand Prince Hotel Shin Takanawa - 25% discounts",
      property: "The 4-star Grand Prince Hotel New Takanawa",
      url: "https://pix3.agoda.net/hotelimages/2293978/0/cfb97a672601c2a46da6b7643c2eeaae.jpg?s=312x",
    },
    {
      caption: "Watazen Ryokan Hotel - 20% discounts",
      property: "Watazen Ryokan Hotel is conveniently located in the popular Central Kyoto area",
      url: "https://pix2.agoda.net/hotelimages/94/94/94_15082414070034908996.jpg?s=312x",
    },
    {
      caption: "Imperial Hotel - 15% discounts",
      property: "Set in a prime location of Hong Kong, Imperial Hotel puts everything the city has to offer just outside your doorstep.",
      url: "https://pix4.agoda.net/hotelimages/99/99/99_16022014110040064258.jpg?s=312x",
    },
    {
      caption: "The Park Hotel Visakhapatnam - 5% discounts",
      property: "The Park Hotel Visakhapatnam is a popular choice amongst travelers in Visakhapatnam",
      url: "https://pix4.agoda.net/hotelimages/103/103/103_15080418100033635932.jpg?s=312x",
    },
    {
      caption: "Sotetsu Fresa Inn  - 15% discounts",
      property: "Ideally located in the prime touristic area of Nara City Center, Hotel Sunroute Nara promises",
      url: "https://pix3.agoda.net/hotelimages/109/109/109_16052212090042589176.jpg?s=312x",
    },
  ];

  const stay = [
    {
      caption: "The Tower Hotel",
      property: "Perfectly located for both business and leisure guests in London",
      url: "https://pix1.agoda.net/hotelimages/4879607/0/4bb2ed860ccc6835b3abad1b0950f264.jpg?s=312x",
    },
    {
      caption: "The Grand New Delhi Hotel",
      property: "Stop at The Grand New Delhi Hotel to discover the wonders of New Delhi and NCR",
      url: "https://pix4.agoda.net/hotelimages/4888496/0/b39b15228d1633bd3a3d235c415322c8.jpg?s=312x",
    },
    {
      caption: "Corinthia Hotels International",
      property: "The 5-star Corinthia Hotel St. George's Bay offers comfort and convenience",
      url: "https://pix1.agoda.net/hotelimages/5076456/0/38babc9d6d69991b542483a4fa8cc1d9.jpg?s=312x",
    },
    {
      caption: "Hotel Intercontinental Cali",
      property: "Ideally located in the prime touristic area of Cali City Center",
      url: "https://pix2.agoda.net/hotelimages/5502207/0/a9e070b68501d7391fa920a4aa91d84b.jpg?s=312x",
    },
    {
      caption: "Oberoi Hotels & Resorts",
      property: "The Oberoi Rajvilas Jaipur Hotel is conveniently located in the popular Jaipur Airport area.",
      url: "http://pix4.agoda.net/hotelimages/131/131/131_14031311160018678660.jpg?s=312x",
    },
  ];

  return (


    <>
    <Navbar/>  
    
      <HeroSlider
        heading="Enjoy staying in home anywhere you go"
        subHeading="Smart search, simplify and secure your travel"
      />
      <SearchBox />
      
      <br />

      <Slideshow
        image={slideImages}
        no={6}
        tag="Explore the world smartly"
        subTag="These popular destinations all over the world to discover within comfort."
      />
      <br />      

      <Slideshow image={slide} no={4} tag="Browse by property type" subTag="" />

      
      <br />
      <Slideshow
        image={travel}
        no={4}
        tag="Travel around Asia"
        subTag="Explore more places we think you'll love"
      />
      <br />      

      <Slideshow
        image={stay}
        no={4}
        tag="Stay at our top unique properties"
        subTag="From castles and villas to boats and igloos, we've got it all"
      />
      <br />
      <Nextrip />
      <br />
      <br />

      <Box width={"88%"} margin="auto">
        <Text
          fontWeight={"bold"}
          fontSize={{
            base: "10px",
            sm: "14px",
            md: "19px",
            lg: "20px",
            xl: "21px",
            "2xl": "22px",
          }}
        >
          Connect with other travelers
        </Text>
        <br />
        <ConnectWithtravellers />
      </Box>
    </>
  );
}

export default Stay;