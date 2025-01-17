export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "🙋",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers intandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏠",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seeks",
    icon: "🚴🏼",
    people: "4",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay concious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location :{location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with Hotel name, hotel address, price, hotel image url, geo cordinates, rating, descriptions and suggest places to visit with place name, place details, place image url, geo coordinates, ticket pricing, time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format";
