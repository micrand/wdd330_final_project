import { Slideshow } from "../components/explore/slideShow";
import Navbar from "../components/navbar/HeaderNavbar";
//import SearchBox from "../components/searchbox/SearchBox";
import SearchBox from "../components/searchBox/searchBox";

function flights() {
  const stay = [
    {
      caption: "Flying blue",
      property: "mandloi, you're at Genius Level 1 in our loyalty programme",
      url: "http://pix5.agoda.net/hotelimages/4884281/0/9dc9f52df1ed422b4c52657acdb90b2e.jpg?s=312",
    },
    {
      caption: "Miles & More by Lufthansa",
      property: "Enjoy discounts at participating properties worldwide",
      url: "http://pix2.agoda.net/hotelimages/151/151/151_130703201220.jpg?s=312x",
    },
    {
      caption: "Executive Club by British Airways",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "http://pix3.agoda.net/hotelimages/4884281/0/61ed7fbd2aa24da66bb582f5171f646c.jpg?s=312x",
    },
    {
      caption: "Aeroflot Bonus",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "http://pix2.agoda.net/hotelimages/4884281/0/249257609a8bddcc19b384cb3af3c0a5.jpg?s=312",
    },
    {
      caption: "Advantage by American Airlines",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "http://pix4.agoda.net/hotelimages/4884281/0/4f969a30a08b3fea5a0747823a8e1554.jpg?s=312x",
    },
  ];

  return (
    <div>
      <Navbar />
      <SearchBox />
      <Slideshow
        image={stay}
        no={4}
        tag="Popular flights near you"
        subTag="Find deals on domestic and international flights"
      />
    </div>
  );
}

export default flights;
