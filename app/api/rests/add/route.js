import { Rest } from "@models/rest";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const currentYear = new Date().getFullYear();
  const argoData = {
    name: "Argo",
    slogan: "Seaside Dining, Elevated.",
    tel: "+306998469136",
    email: "vluxurysuitespefkochori@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Mikoniaty str, 1, Nea Kallikratia, Halchidiki, Greece 60380",
    coords: {
      mainSpot: { latitude: 40.31014129002744, longitude: 23.064639118995103 },
      beachSpot1: {
        latitude: 40.30973099821641,
        longitude: 23.064613317581866,
      },
    },
    radiuses: { mainSpot: 10, beachSpot1: 15 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4074718635",
    backendEndpoints: { waiter: "/waiter", bill: "/bill" },
    pathName: "restaurantArgo",
    themeName: "themeArgo",
    // app: {
    //   menu: true,
    //   about: true,
    //   buttonWaiter: true,
    //   buttonBill: true,
    //   buttonSisha: false,
    //   numberOfTables: { inside: 10, outside: 50 },
    //   languages: { eng: true, el: true },
    // },
  };

  const arazoData = {
    name: "Αρα... ζω",
    slogan: "Come for the view, return for the meals at Αρα...ζω.",
    tel: "+3010001000",
    email: "ara_zo.restaurant@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    menu: null,
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4056772394,",
    backendEndpoints: { waiter: "/waiter_arazo", bill: "/bill_arazo" },
    pathName: "restaurantArazo",
    themeName: "themeArazo",
    app: {
      about: true,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const genesisData = {
    name: "Genesis",
    slogan:
      "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.",
    tel: "+3010001000",
    email: "genesis@genesis.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Antonioy Kelesi, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    workingTimeBeachSpots: {
      startTime: "09:00",
      endTime: "20:00",
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/waiter3", bill: "/bill3" },
    pathName: "genesis",
    themeName: "themeGenesis",
    app: {
      menu: true,
      about: true,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
    animLogo: "/assets/images/Genesis/logo.png",
  };

  const defaultData = {
    name: "Your Beach Bar",
    slogan: "Your Beach Bar Slogan",
    tel: "+3010001000",
    email: "yourrestaurant@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    workingTimeBeachSpots: {
      startTime: "09:00",
      endTime: "20:00",
    },
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/waiter3", bill: "/bill3" },
    pathName: "restaurantYour",
    themeName: "themeGenesis",
    app: {
      menu: false,
      about: true,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const belvedereData = {
    name: "Belevedere Restaurant",
    slogan: "Belevedere Restaurant Slogan",
    tel: "+3010001000",
    email: "belvedere@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/waiter4", bill: "/bill4" },
    pathName: "restaurantBelvedere",
    themeName: "themeBelvedere",
    app: {
      menu: false,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const corleoneData = {
    name: "Corleone",
    slogan: "Corleone Slogan",
    tel: "+3010001000",
    email: "corleone@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/button2607", bill: "/button2607" },
    pathName: "restaurantCorleone",
    themeName: "corleoneTheme",
    app: {
      menu: false,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const jukeboxData = {
    name: "Jukebox",
    slogan: "Jukebox Slogan",
    tel: "+3010001000",
    email: "jukebox@gmail.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/button2607", bill: "/button2607" },
    pathName: "restaurantJukebox",
    themeName: "jukeboxTheme",
    app: {
      menu: false,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const gelissimoData = {
    name: "Gelissimo",
    slogan: "Taste the sunshine with Gelissimo!",
    logoSrc: "/assets/images/Gelissimo/logo.png",
    workingTimeBeachSpots: {
      startTime: "09:00",
      endTime: "20:00",
    },
    tel: "+3010001000",
    email: "gelissimo@gelissimo.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4011132632",
    backendEndpoints: { waiter: "/button2607", bill: "/button2607" },
    pathName: "gelissimo",
    themeName: "gelissimoTheme",
    app: {
      menu: false,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  const twinsData = {
    name: "Twins",
    slogan: "Double the Fun, Twice the Chill!",
    logoSrc: "/assets/images/Twins/logo.png",
    workingTimeBeachSpots: {
      startTime: "09:00",
      endTime: "20:00",
    },
    tel: "+3010001000",
    email: "twins@twins.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot2: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: { mainSpot: 12, beachSpot1: 12, beachSpot2: 12 },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4088789673",
    backendEndpoints: { waiter: "/button2607", bill: "/button2607" },
    pathName: "twins",
    themeName: "twinsTheme",
    app: {
      menu: true,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };
  const saharaData = {
    name: "Sahara",
    slogan: "Much more than a Beach bar...",
    workingTimeBeachSpots: {
      startTime: "09:00",
      endTime: "20:00",
    },
    tel: "+3010001000",
    email: "sahara@sahara.com",
    schedule: "Mon-Sat: 11AM - 23PM",
    address: "Παρναβέλη 1Β, Nea Kallikratia 63080, Halchidiki, Greece",
    coords: {
      mainSpot: { latitude: 40.310434866939566, longitude: 23.06235701312798 },
      beachSpot1: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot2: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot3: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot4: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot5: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot6: { latitude: 40.3100075, longitude: 23.0628176 },
      beachSpot7: { latitude: 40.3100075, longitude: 23.0628176 },
    },
    radiuses: {
      mainSpot: 12,
      beachSpot1: 12,
      beachSpot2: 12,
      beachSpot3: 12,
      beachSpot4: 12,
      beachSpot5: 12,
      beachSpot6: 12,
      beachSpot7: 12,
    },
    datesBeachSpot: {
      start: new Date(currentYear, 3 - 1, 1),
      end: new Date(currentYear, 10 - 1, 30),
    },
    chat_id: "-4088789673",
    backendEndpoints: { waiter: "/button2607", bill: "/button2607" },
    pathName: "sahara",
    themeName: "saharaTheme",
    app: {
      menu: true,
      about: false,
      buttonWaiter: true,
      buttonBill: true,
      buttonSisha: false,
      numberOfTables: { inside: 10, outside: 50 },
      languages: { eng: true, el: true },
    },
  };

  //   const rest = (await request.json());
  const rest = saharaData;
  try {
    await connectToDB();
    const { name, pathName } = rest;

    // Check if a restaurant with the same name or pathName already exists
    const existingRest = await Rest.findOne({
      $or: [{ name }, { pathName }],
    });

    if (existingRest) {
      return new Response("This restaurant already exists", { status: 409 });
    }

    const newRest = new Rest(rest);

    await newRest.save();
    return new Response(JSON.stringify(newRest), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new rest", { status: 500 });
  }
};
