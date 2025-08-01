const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Tokyo",
    latitude: 35.6828387,
    longitude: 139.7594549,
  },
  {
    location: "Sydney",
    latitude: -33.865143,
    longitude: 151.209900,
  },
  {
    location: "Paris",
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  {
    location: "Berlin",
    latitude: 52.5170365,
    longitude: 13.3888599,
  },
  {
    location: "Cairo",
    latitude: 30.0443879,
    longitude: 31.2357257,
  },
  {
    location: "São Paulo",
    latitude: -23.5506507,
    longitude: -46.6333824,
  },
  {
    location: "Istanbul",
    latitude: 41.0082376,
    longitude: 28.9783589,
  },
  {
    location: "Bangkok",
    latitude: 13.7563309,
    longitude: 100.5017651,
  },
  {
    location: "Los Angeles",
    latitude: 34.0536909,
    longitude: -118.242766,
  },
];


function getLocations(){
    return data;
}

function getLocationbyName(location){
    if(!location) return null;

    const found = data.find((item)=>item.location.toLowerCase() === location.toLowerCase());

    return found || "Location Not Found";
}

export {getLocations,getLocationbyName}