// src/data/calendarData.ts

// Nomes dos meses de Tamriel
export const tamrielMonths = [
  "Morning Star",
  "Sun's Dawn",
  "First Seed",
  "Rain's Hand",
  "Second Seed",
  "Mid Year",
  "Sun's Height",
  "Last Seed",
  "Hearthfire",
  "Frostfall",
  "Sun's Dusk",
  "Evening Star",
] as const;

// Feriados do calendário tamrielico (datas no formato DD/MM)
export const holidays = [
  { date: "01/01", name: "New Life Festival" },
  { date: "02/01", name: "Scour Day" },
  { date: "12/01", name: "Ovank'a" },
  { date: "15/01", name: "South Wind's Prayer" },
  { date: "16/01", name: "Day of Lights" },
  { date: "18/01", name: "Waking Day" },

  { date: "02/02", name: "Mad Pelagius Day" },
  { date: "05/02", name: "Othroktide" },
  { date: "08/02", name: "Day of Release" },
  { date: "16/02", name: "Heart's Day" },
  { date: "27/02", name: "Perseverance Day" },
  { date: "28/02", name: "Aduros Nau" },

  { date: "07/03", name: "First Planting" },
  { date: "09/03", name: "Day of Waiting" },
  { date: "21/03", name: "Hogithum" },
  { date: "25/03", name: "Flower Day" },
  { date: "26/03", name: "Festival of Blades" },

  { date: "01/04", name: "Gardtide" },
  { date: "13/04", name: "Day of the Dead" },
  { date: "20/04", name: "Day of Shame" },
  { date: "28/04", name: "Jester's Day" },

  { date: "01/05", name: "Rite of Vigyld" },
  { date: "07/05", name: "Second Planting" },
  { date: "09/05", name: "Maruk's Day" },
  { date: "17/05", name: "Koomu Alezer'i" },
  { date: "20/05", name: "Fire Festival" },
  { date: "30/05", name: "Fishing Day" },

  { date: "01/06", name: "Drigh R'Zimb" },
  { date: "16/06", name: "Mid Year Celebration" },
  { date: "23/06", name: "Dancing Day" },
  { date: "24/06", name: "Tibedetha" },

  { date: "10/07", name: "Merchants' Festival" },
  { date: "12/07", name: "Divad Etep't" },
  { date: "20/07", name: "Sun's Rest" },
  { date: "29/07", name: "Fiery Night" },

  { date: "02/08", name: "Day of Maiden Katrica" },
  { date: "11/08", name: "Koomu Alezer'i" },
  { date: "14/08", name: "Feast of the Tiger" },
  { date: "21/08", name: "Appreciation Day" },
  { date: "27/08", name: "Harvest's End" },

  { date: "01/09", name: "The Rites of Moawita" },
  { date: "03/09", name: "Tales and Tallows" },
  { date: "03/09", name: "Nocturnal's Holy Day" },
  { date: "06/09", name: "Khurat" },
  { date: "12/09", name: "Riglametha" },
  { date: "14/09", name: "The Burning of King Olaf" },
  { date: "19/09", name: "Children's Day" },

  { date: "05/10", name: "Dirij Tereur" },
  { date: "13/10", name: "Witches' Festival" },
  { date: "23/10", name: "Broken Diamonds" },
  { date: "30/10", name: "Emperor's Birthday" },

  { date: "02/11", name: "The Gauntlet" },
  { date: "03/11", name: "Serpent's Dance" },
  { date: "08/11", name: "Moon Festival" },
  { date: "18/11", name: "Hel Anseilak" },
  { date: "20/11", name: "Warriors' Festival" },

  { date: "15/12", name: "North Wind's Prayer" },
  { date: "18/12", name: "Baranth Do" },
  { date: "20/12", name: "The Invocation of Molag Bal" },
  { date: "24/12", name: "Chil'a" },
  { date: "25/12", name: "New Life Festival (Wayrest)" },
  { date: "31/12", name: "Old Life Festival" },
] as const;
