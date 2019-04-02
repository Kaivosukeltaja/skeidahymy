const ratingGroups = [
  {
    name: "cleanliness",
    title: "Siisteys",
    description: "Ovatko pinnat puhtaat? Onko pöntössä jarrutusraitoja? Ovatko pyyhkeet puhtaat? Onko lattia kuiva?",
    rating: "great",
  },
  {
    name: "necessities",
    title: "Varustelu",
    description: "Onko paperia tarpeeksi? Saako kädet kuivattua? Toimivatko valot? Löytyykö WC-harja?",
    rating: "great",
  },
  {
    name: "smell",
    title: "Tuoksu",
    description: "Onko ilmanvaihto riittävä? Haiseeko skeida? Onko käytetty tuoksuja?",
    rating: "great",
  },
  {
    name: "serenity",
    title: "Rauhallisuus",
    description: "Saako asioida rauhassa? Onko äänimaailma häiritsevä? Renkataanko ovea?",
    rating: "great",
  },
];

const ratingValues = {
  great: 3,
  good: 2,
  ok: 1,
  bad: 0,
};

export { ratingGroups, ratingValues }