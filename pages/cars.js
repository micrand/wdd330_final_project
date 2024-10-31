import { Slideshow } from "../components/explore/slideShow";
import Navbar from "../components/navbar/HeaderNavbar";
import SearchBox from "../components/searchbox/SearchBox";

function CarRentals() {
  const stay = [
    {
      caption: "Full-size luxury car",
      property: "Bentley Continental Flying Spur (2005)",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bentley_Continental_Flying_Spur_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg/400px-Bentley_Continental_Flying_Spur_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg",
    },
    {
      caption: "Mid-size luxury SUV",
      property: "Saab 9-7X",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Saab_9-7X_--_03-19-2012.JPG/400px-Saab_9-7X_--_03-19-2012.JPG",
    },
    {
      caption: "Jeep Compass",
      property: "Compact crossover SUV",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2008_Jeep_Compass_%28MK_MY08%29_Limited_2.4_wagon_%282015-11-11%29_01.jpg/400px-2008_Jeep_Compass_%28MK_MY08%29_Limited_2.4_wagon_%282015-11-11%29_01.jpg",
    },
    {
      caption: "Mercedes-Benz S-Class (W221)",
      property: "Full-size luxury car",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg/400px-Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg",
    },
    {
      caption: "Peugeot 4007",
      property: "Compact SUV",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peugeot_4007_HDi_FAP_155_Platinum_%E2%80%93_Frontansicht%2C_15._Juni_2011%2C_W%C3%BClfrath.jpg/400px-Peugeot_4007_HDi_FAP_155_Platinum_%E2%80%93_Frontansicht%2C_15._Juni_2011%2C_W%C3%BClfrath.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <SearchBox />
      <Slideshow
        image={stay}
        no={4}
        tag="Car rental for all types of trips"
        subTag="Great cars at great prices from top car rental companies."
      />
    </div>
  );
}

export default CarRentals;
