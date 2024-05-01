import { SilverStar, GoldStar, PlatinumStar } from "../../public/svg";

import {
  floorPlan,
  singleEventHall1,
  singleEventHall2,
  singleEventHall3,
  singleEventHall4,
  singleEventHall5,
  singleEventHall6,
  singleEventHall7,
  singleEventHall8,
  singleEventHall9,
  singleEventHall10,
  singleEventHall11,
  singleEventHall12,
  singleEventHall13,
  singleEventHall14,
  singleEventHall15,
  singleEventHall16,
  singleEventHall17,
  singleEventHall18,
  singleEventHall19,
  singleEventHall20,
  singleEventHall21,
  singleEventHall22,
  PackagesImg1,
  PackagesImg2,
  PackagesImg3,
  PackagesImg4,
  PackagesImg5,
  PackagesImg6,
} from "../../public/images";

//Navbar Links
export const NavLinks = [
  {
    id: 5,
    title: "Home",
    url: "/",
  },

  {
    id: 1,
    title: "About",
    url: "/about",
  },

  {
    id: 2,
    title: "Venues",
    url: "/venues",
  },
  {
    id: 3,
    title: "Gallery",
    url: "/gallery",
  },

  {
    id: 4,
    title: "Contact Us",
    url: "/contact-us",
  },
];

// packageData
export const packageDetails = {
  Silver: [
    {
      icon: <SilverStar />,
      text: "6-Hour Venue Rental",
    },
    {
      icon: <SilverStar />,
      text: "Gold Chiavari Chairs",
    },
    {
      icon: <SilverStar />,
      text: "72 Inch Round Tables",
    },
    {
      icon: <SilverStar />,
      text: "Tablecloths (black)",
    },
    {
      icon: <SilverStar />,
      text: "4 Six-Foot Rectangular Tables",
    },
    {
      icon: <SilverStar />,
      text: "Free Wifi",
    },
    {
      icon: <SilverStar />,
      text: "Up-Lighting",
    },
    {
      icon: <SilverStar />,
      text: "Access to (4) 58” TVs",
    },
    {
      icon: <SilverStar />,
      text: "Black Leather Sofas with tables",
    },
    {
      icon: <SilverStar />,
      text: "Sound System w/ Bluetooth",
    },
    {
      icon: <SilverStar />,
      text: "Use of In-House Bar",
    },
    {
      icon: <SilverStar />,
      text: "Food Prep Area Free Ample Parking",
    },
    {
      icon: <SilverStar />,
      text: "Cleaning (with exception of trash)",
    },
  ],

  Gold: [
    {
      icon: <GoldStar />,
      text: "6-Hour Venue Rental",
    },
    {
      icon: <GoldStar />,
      text: "Gold Chiavari Chairs",
    },
    {
      icon: <GoldStar />,
      text: "72 Inch Round Tables",
    },
    {
      icon: <GoldStar />,
      text: "Tablecloths (black)",
    },
    {
      icon: <GoldStar />,
      text: "4 Six-Foot Rectangular Tables",
    },
    {
      icon: <GoldStar />,
      text: "Free Wifi",
    },
    {
      icon: <GoldStar />,
      text: "Up-Lighting",
    },
    {
      icon: <GoldStar />,
      text: "Access to (4) 58” TVs",
    },
    {
      icon: <GoldStar />,
      text: "Black Leather Sofas with tables",
    },
    {
      icon: <GoldStar />,
      text: "Sound System w/ Bluetooth",
    },
    {
      icon: <GoldStar />,
      text: "Use of In-House Bar",
    },
    {
      icon: <GoldStar />,
      text: "Food Prep Area Free Ample Parking",
    },
    {
      icon: <GoldStar />,
      text: "Cleaning (with exception of trash)",
    },
    {
      icon: <GoldStar />,
      text: "360 Phone Booth 2 hr",
    },
    {
      icon: <GoldStar />,
      text: "2 Throne Chairs (W/S)",
    },
  ],

  Platinum: [
    {
      icon: <PlatinumStar />,
      text: "6-Hour Venue Rental",
    },
    {
      icon: <PlatinumStar />,
      text: "Gold Chiavari Chairs",
    },
    {
      icon: <PlatinumStar />,
      text: "72 Inch Round Tables",
    },
    {
      icon: <PlatinumStar />,
      text: "Tablecloths (black)",
    },
    {
      icon: <PlatinumStar />,
      text: "4 Six-Foot Rectangular Tables",
    },
    {
      icon: <PlatinumStar />,
      text: "Free Wifi",
    },
    {
      icon: <PlatinumStar />,
      text: "Up-Lighting",
    },
    {
      icon: <PlatinumStar />,
      text: "Access to (4) 58” TVs",
    },
    {
      icon: <PlatinumStar />,
      text: "Black Leather Sofas with tables",
    },
    {
      icon: <PlatinumStar />,
      text: "Sound System w/ Bluetooth",
    },
    {
      icon: <PlatinumStar />,
      text: "Use of In-House Bar",
    },
    {
      icon: <PlatinumStar />,
      text: "Food Prep Area Free Ample Parking",
    },
    {
      icon: <PlatinumStar />,
      text: "Cleaning (with exception of trash)",
    },
    {
      icon: <PlatinumStar />,
      text: "360 Phone Booth 2 hr",
    },
    {
      icon: <PlatinumStar />,
      text: "2 Throne Chairs (W/S)",
    },
    {
      icon: <SilverStar />,
      text: "Roundtrip pickup/Dropoff in Benz",
    },
  ],
};

// Define unique identifiers (keys) for each addon
const addonKeys = {
  sprinterVan: "sprinterVan",
  throneChair: "throneChair",
  redCarpet: "redCarpet",
};

export const bookingDetails = [
  {
    name: "Silver",
    fee: "$2,150",
    images: [PackagesImg1, PackagesImg2],
    addOn: [
      {
        key: addonKeys.sprinterVan,
        star: <SilverStar />,
        text: "Sprinter Van round trip",
        fee: "$300",
      },
      {
        key: addonKeys.throneChair,
        star: <SilverStar />,
        text: "Throne Chair (x1)",
        fee: "$100",
      },
      {
        key: addonKeys.redCarpet,
        star: <SilverStar />,
        text: "Red carpet with gold stanchions",
        fee: "$100",
      },
    ],
  },
  {
    name: "Gold",
    fee: "$3,500",
    images: [PackagesImg3, PackagesImg4],
    addOn: [
      {
        key: addonKeys.sprinterVan,
        star: <GoldStar />,
        text: "Sprinter Van round trip",
        fee: "$300",
      },
      {
        key: addonKeys.throneChair,
        star: <GoldStar />,
        text: "Throne Chair (x1)",
        fee: "$100",
      },
      {
        key: addonKeys.redCarpet,
        star: <GoldStar />,
        text: "Red carpet with gold stanchions",
        fee: "$100",
      },
    ],
  },
  {
    name: "Platinum",
    fee: "$5,000",
    images: [PackagesImg5, PackagesImg6],
    addOn: [
      {
        key: addonKeys.sprinterVan,
        star: <PlatinumStar />,
        text: "Sprinter Van round trip",
        fee: "$500",
      },
      {
        key: addonKeys.throneChair,
        star: <PlatinumStar />,
        text: "Throne Chair (x1)",
        fee: "$300",
      },
      {
        key: addonKeys.redCarpet,
        star: <PlatinumStar />,
        text: "Red carpet with gold stanchions",
        fee: "$200",
      },
    ],
  },
];


export const singleEventData = [
  {
    slug: "I",
    title: "Kulture Event Hall I (Large)",
    subtitle:
      "Our events center offers you two fantastic options to choose from, making sure that you have the perfect venue for your next event. Whether you're looking for a large space to accommodate a big gathering or a smaller, more intimate setting, we've got you covered. Our 'Kulture Event I' is the perfect choice for those looking to host a grand celebration, while our 'Kulture Event II' offers a cozy and intimate space for more low-key events. Choose us and make your next event unforgettable!",

    floorPlanInfo: (
      <>
        Kulture Event II: <br /> <span>4250 SQ Ft</span>
      </>
    ),

    floorPlanImage: floorPlan,

    images: [
      singleEventHall1,
      singleEventHall2,
      singleEventHall3,
      singleEventHall4,
      singleEventHall5,
      singleEventHall6,
      singleEventHall7,
      singleEventHall8,
      singleEventHall9,
      singleEventHall10,
      singleEventHall11,
      ,
    ],
  },
  // Add more objects for other routes if needed
  {
    slug: "II",
    title: "Kulture Event Hall II (Small)",
    subtitle:
      "Our events center offers you two fantastic options to choose from, making sure that you have the perfect venue for your next event. Whether you're looking for a large space to accommodate a big gathering or a smaller, more intimate setting, we've got you covered. Our 'Kulture Event I' is the perfect choice for those looking to host a grand celebration, while our 'Kulture Event II' offers a cozy and intimate space for more low-key events. Choose us and make your next event unforgettable!",

    floorPlanInfo: (
      <>
        Kulture Event II: <br /> <span>2650 SQ Ft</span>
      </>
    ),

    floorPlanImage: floorPlan,

    images: [
      singleEventHall12,
      singleEventHall13,
      singleEventHall14,
      singleEventHall15,
      singleEventHall16,
      singleEventHall17,
      singleEventHall18,
      singleEventHall19,
      singleEventHall20,
      singleEventHall21,
      singleEventHall22,
    ],
  },
];
