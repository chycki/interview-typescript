// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// 1. Please modify the idsPoll array so each element within will be unique. Order is irrelevant.
const idsPool = [
  "1",
  "2",
  "3",
  "1",
  "4",
  "1",
  "4",
  "1",
  "2",
  "3",
  "1",
  "4"
];

// 2. We have a list airports that are grouped into continents, countries, and states. 
// Translate the object structure into a single hierarchical structure that allows to go from continent 
// to country to state level to pull out all airports from that area.

interface I2020Airport {
  airport: string;
  continent: string;
  country: string;
  state: string;
}

const airportData: Array<I2020Airport> = [
  {
      airport: "Los Angeles",
      continent: "North America",
      country: "USA",
      state: "California"
  },
  {
      airport: "San Francisco",
      continent: "North America",
      country: "USA",
      state: "California"
  },
  {
      airport: "San Diego",
      continent: "North America",
      country: "USA",
      state: "California"
  },
  {
      airport: "New York",
      continent: "North America",
      country: "USA",
      state: "New York"
  },
  {
      airport: "Melbourne",
      continent: "Australia",
      country: "Australia",
      state: "Victoria"
  },
  {
      airport: "Sydney",
      continent: "Australia",
      country: "Australia",
      state: "New South Wales"
  },
  {
      airport: "Wroclaw",
      continent: "Europe",
      country: "Poland",
      state: "Dolnośląskie"
  },
  {
      airport: "Frankfurt",
      continent: "Europe",
      country: "Germany",
      state: "Hessen"
  }
];

