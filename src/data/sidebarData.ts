// src/data/sidebarData.ts

// Defines the phases of the moon in a Tamrielic calendar
export const moonPhasesData = [
  { title: "New Moon", description: "The moon is not visible from Nirn's surface." },
  { title: "Waxing Crescent", description: "A sliver of lunar light grows each night." },
  { title: "First Quarter", description: "Half of the lunar disc is illuminated." },
  { title: "Waxing Gibbous", description: "More than half of the moon is lit up." },
  { title: "Full Moon", description: "The moon shines fully, brightest in the sky." },
  { title: "Waning Gibbous", description: "The lunar illumination begins to shrink." },
  { title: "Last Quarter", description: "Half the moon is lit on the opposite side." },
  { title: "Waning Crescent", description: "Only a sliver of the moon remains visible." },
] as const;

// Defines the Zodiac signs (constellations associated with Tamrielic astrology)
export const zodiacSignsData = [
  { title: "The Warrior", description: "Mar 21 – Apr 19: Symbol of bravery and combat." },
  { title: "The Mage", description: "Apr 20 – May 20: Represents wisdom and arcane power." },
  { title: "The Thief", description: "May 21 – Jun 20: Cunning and stealth typify this sign." },
  { title: "The Lord", description: "Jun 21 – Jul 22: Authority and leadership qualities." },
  { title: "The Lady", description: "Jul 23 – Aug 22: Nurturing and compassion shine forth." },
  { title: "The Lover", description: "Aug 23 – Sep 22: Passion and emotional depth guide." },
  { title: "The Shadow", description: "Sep 23 – Oct 22: Mystery and secrecy reign." },
  { title: "The Steed", description: "Oct 23 – Nov 21: Freedom and adventure spur." },
  { title: "The Tower", description: "Nov 22 – Dec 21: Stability and endurance endure." },
  { title: "The Atronach", description: "Dec 22 – Jan 19: Elemental forces manifest." },
  { title: "The Thief", description: "Jan 20 – Feb 18: Innovation and resourcefulness." },
  { title: "The Ritual", description: "Feb 19 – Mar 20: Themes of life, death, and renewal." },
] as const;
