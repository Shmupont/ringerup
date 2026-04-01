export type Golfer = {
  id: string;
  name: string;
  photo: string;
  handicap: number;
  location: string;
  travelRadius: number;
  specialtyTags: string[];
  rating: number;
  reviewCount: number;
  ghinVerified: boolean;
  bio: string;
  homeClub: string;
  skills: {
    driving: number;
    irons: number;
    shortGame: number;
    putting: number;
    courseManagement: number;
  };
  scrambleResume: {
    eventsPlayed: number;
    notableFinishes: string[];
  };
  rateDescription: string;
  reviews: {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
  }[];
};

export const golfers: Golfer[] = [
  {
    id: "1",
    name: "Tyler Hess",
    photo: "https://i.pravatar.cc/150?img=3",
    handicap: 0,
    location: "Scottsdale, AZ",
    travelRadius: 100,
    specialtyTags: ["Long Driver", "Clutch Putter", "Course Manager"],
    rating: 4.9,
    reviewCount: 34,
    ghinVerified: true,
    bio: "Scratch golfer with 15+ years competing in amateur events. Played D1 golf at Arizona State. I bring calm under pressure and genuine love for the game.",
    homeClub: "TPC Scottsdale",
    skills: { driving: 5, irons: 5, shortGame: 5, putting: 5, courseManagement: 5 },
    scrambleResume: { eventsPlayed: 42, notableFinishes: ["1st Place – Desert Classic Charity Scramble 2024", "2nd Place – Phoenix Metro Amateur Best Ball 2023"] },
    rateDescription: "Entry fee covered + travel within 50 miles. Happy to negotiate for events farther out.",
    reviews: [
      { id: "r1", author: "Mark Delano", rating: 5, text: "Tyler was an absolute stud. Crushed a 320-yard drive on 18 to set up our birdie. Would book again in a heartbeat.", date: "2025-11-14" },
      { id: "r2", author: "Sarah Kowalski", rating: 5, text: "Great teammate, calm demeanor, and his short game saved us on at least 3 holes. Highly recommend.", date: "2025-10-02" },
      { id: "r3", author: "Pete Nguyen", rating: 5, text: "Best ringer we've ever had. Made everything feel easy.", date: "2025-09-18" },
    ],
  },
  {
    id: "2",
    name: "Marcus Webb",
    photo: "https://i.pravatar.cc/150?img=8",
    handicap: 2,
    location: "Dallas, TX",
    travelRadius: 150,
    specialtyTags: ["Iron Specialist", "Scramble Veteran", "Low Pressure"],
    rating: 4.8,
    reviewCount: 27,
    ghinVerified: true,
    bio: "2 handicap with a laser-like iron game. I've played 30+ scrambles across Texas and love helping teams find their rhythm. Good vibes only.",
    homeClub: "Prestonwood Country Club",
    skills: { driving: 4, irons: 5, shortGame: 4, putting: 4, courseManagement: 5 },
    scrambleResume: { eventsPlayed: 31, notableFinishes: ["1st Place – Lone Star Charity Cup 2024", "3rd Place – Dallas Corporate Classic 2023"] },
    rateDescription: "Entry fee + hotel for events over 2 hours away. Very flexible.",
    reviews: [
      { id: "r1", author: "Jason Carr", rating: 5, text: "Marcus hit 14 out of 18 greens with his irons. We won by 4 strokes. Incredible.", date: "2025-12-01" },
      { id: "r2", author: "Trish Holt", rating: 5, text: "Super personable and a great team player. He really elevated our whole round.", date: "2025-11-07" },
    ],
  },
  {
    id: "3",
    name: "Devon Castillo",
    photo: "https://i.pravatar.cc/150?img=12",
    handicap: 1,
    location: "Orlando, FL",
    travelRadius: 75,
    specialtyTags: ["Short Game Wizard", "Clutch Putter", "Competitive Edge"],
    rating: 4.7,
    reviewCount: 19,
    ghinVerified: true,
    bio: "Former mini-tour player turned scramble specialist. My short game is my secret weapon — I get up and down from anywhere.",
    homeClub: "Bay Hill Club & Lodge",
    skills: { driving: 3, irons: 4, shortGame: 5, putting: 5, courseManagement: 4 },
    scrambleResume: { eventsPlayed: 22, notableFinishes: ["1st Place – Orlando Charity Open 2025", "Top 5 – Florida Amateur Scramble Series 2024"] },
    rateDescription: "Entry fee covered. Tips appreciated but not required.",
    reviews: [
      { id: "r1", author: "Bill Stanton", rating: 5, text: "Devon chipped in twice and made a 20-foot putt on the last. Insane short game.", date: "2025-10-20" },
      { id: "r2", author: "Carmen Louis", rating: 4, text: "Great player, very competitive. We finished 2nd overall.", date: "2025-09-14" },
    ],
  },
  {
    id: "4",
    name: "Jake Mullins",
    photo: "https://i.pravatar.cc/150?img=15",
    handicap: 3,
    location: "Myrtle Beach, SC",
    travelRadius: 100,
    specialtyTags: ["Long Driver", "Links Player", "Fun Teammate"],
    rating: 4.6,
    reviewCount: 22,
    ghinVerified: false,
    bio: "3 handicap who grew up playing Myrtle Beach's best tracks. I can stripe it 300+ off the tee and love a good scramble format.",
    homeClub: "Pelican's Nest Golf Club",
    skills: { driving: 5, irons: 4, shortGame: 3, putting: 4, courseManagement: 3 },
    scrambleResume: { eventsPlayed: 18, notableFinishes: ["2nd Place – Myrtle Beach Classic 2024", "1st Place – Grand Strand Charity Scramble 2023"] },
    rateDescription: "Cover my entry and we're good. I just love playing.",
    reviews: [
      { id: "r1", author: "Rich Duffy", rating: 5, text: "Jake absolutely bombed it all day. We used his drive on almost every hole. So much fun.", date: "2025-11-30" },
      { id: "r2", author: "Anna Simms", rating: 4, text: "Great energy, big hitter. Exactly what we needed.", date: "2025-10-11" },
    ],
  },
  {
    id: "5",
    name: "Priya Sharma",
    photo: "https://i.pravatar.cc/150?img=25",
    handicap: 4,
    location: "Phoenix, AZ",
    travelRadius: 80,
    specialtyTags: ["Course Manager", "Consistent Scorer", "Team Player"],
    rating: 4.8,
    reviewCount: 16,
    ghinVerified: false,
    bio: "4 handicap with a reputation for smart, consistent golf. I rarely make big mistakes and keep the team on an even keel. Love charity events.",
    homeClub: "Wigwam Golf Club",
    skills: { driving: 4, irons: 4, shortGame: 4, putting: 5, courseManagement: 5 },
    scrambleResume: { eventsPlayed: 14, notableFinishes: ["1st Place – Fiesta Bowl Charity Classic 2025"] },
    rateDescription: "Entry fee covered. No travel fee within Phoenix metro.",
    reviews: [
      { id: "r1", author: "Greg Tanaka", rating: 5, text: "Priya made 6 birdies and never had a bad hole. She's the real deal.", date: "2025-12-05" },
      { id: "r2", author: "Lisa Monroe", rating: 5, text: "Such a positive presence and super reliable on the course.", date: "2025-11-22" },
    ],
  },
  {
    id: "6",
    name: "Cole Brandt",
    photo: "https://i.pravatar.cc/150?img=7",
    handicap: 5,
    location: "Scottsdale, AZ",
    travelRadius: 60,
    specialtyTags: ["Fairway Finder", "Mid-Iron Master", "Steady Eddie"],
    rating: 4.5,
    reviewCount: 11,
    ghinVerified: false,
    bio: "5 handicap known for hitting fairways and greens. Not the longest off the tee but extremely accurate and reliable under pressure.",
    homeClub: "Grayhawk Golf Club",
    skills: { driving: 3, irons: 5, shortGame: 4, putting: 4, courseManagement: 4 },
    scrambleResume: { eventsPlayed: 10, notableFinishes: ["Top 10 – AZ Corporate Golf Challenge 2024"] },
    rateDescription: "Entry fee and a cold beer after the round.",
    reviews: [
      { id: "r1", author: "Dave Okonkwo", rating: 5, text: "Cole hit every fairway and gave us the best looks all day. Really solid player.", date: "2025-09-30" },
    ],
  },
  {
    id: "7",
    name: "Rachel Tong",
    photo: "https://i.pravatar.cc/150?img=27",
    handicap: 6,
    location: "Dallas, TX",
    travelRadius: 120,
    specialtyTags: ["Sandscape Specialist", "Clutch Putter", "Cheerleader"],
    rating: 4.7,
    reviewCount: 14,
    ghinVerified: false,
    bio: "6 handicap who specializes in bunker shots and making everyone around her better. I bring great energy and a competitive spirit to every event.",
    homeClub: "Stonebriar Country Club",
    skills: { driving: 3, irons: 4, shortGame: 5, putting: 5, courseManagement: 3 },
    scrambleResume: { eventsPlayed: 16, notableFinishes: ["1st Place – Dallas Women's Scramble 2025", "2nd Place – Plano Corporate Cup 2024"] },
    rateDescription: "Entry fee plus lunch is all I ask for.",
    reviews: [
      { id: "r1", author: "Tom Elias", rating: 5, text: "Rachel holed out from a bunker on 14. The whole team went crazy. Best day on the course in years.", date: "2025-10-08" },
    ],
  },
  {
    id: "8",
    name: "Nate Garrison",
    photo: "https://i.pravatar.cc/150?img=11",
    handicap: 7,
    location: "Myrtle Beach, SC",
    travelRadius: 50,
    specialtyTags: ["Long Driver", "Fun Teammate", "Social Player"],
    rating: 4.4,
    reviewCount: 9,
    ghinVerified: false,
    bio: "7 handicap who prioritizes having a great time while still being competitive. I'll bring the energy, the drives, and the good stories.",
    homeClub: "Barefoot Resort & Golf",
    skills: { driving: 5, irons: 3, shortGame: 3, putting: 4, courseManagement: 3 },
    scrambleResume: { eventsPlayed: 9, notableFinishes: ["3rd Place – Coastal Carolina Charity Cup 2024"] },
    rateDescription: "Just cover my entry fee.",
    reviews: [
      { id: "r1", author: "Mike Farrow", rating: 4, text: "Nate was a blast. Big hitter with even bigger energy.", date: "2025-11-03" },
    ],
  },
  {
    id: "9",
    name: "Sam Oduya",
    photo: "https://i.pravatar.cc/150?img=20",
    handicap: 3,
    location: "Orlando, FL",
    travelRadius: 90,
    specialtyTags: ["All-Around Player", "Scramble Strategist", "Iron Specialist"],
    rating: 4.9,
    reviewCount: 21,
    ghinVerified: true,
    bio: "3 handicap with a complete game. I analyze each hole strategically and help the team pick the right shots. 20+ scramble wins in Florida.",
    homeClub: "Orange County National Golf Center",
    skills: { driving: 4, irons: 5, shortGame: 4, putting: 4, courseManagement: 5 },
    scrambleResume: { eventsPlayed: 28, notableFinishes: ["1st Place – Central Florida Pro-Am 2025", "1st Place – Lake Nona Charity Classic 2024", "2nd Place – FL State Amateur Scramble 2023"] },
    rateDescription: "Entry fee + mileage reimbursement for events 30+ miles away.",
    reviews: [
      { id: "r1", author: "Chris Faulk", rating: 5, text: "Sam called every line perfectly. We shot -19 and it didn't feel like an accident.", date: "2025-12-10" },
      { id: "r2", author: "Kathy Bloom", rating: 5, text: "Incredible player. Made three eagles in one round with us.", date: "2025-11-14" },
    ],
  },
  {
    id: "10",
    name: "Luis Reyes",
    photo: "https://i.pravatar.cc/150?img=16",
    handicap: 8,
    location: "Phoenix, AZ",
    travelRadius: 40,
    specialtyTags: ["Mid-Iron Master", "Fun Teammate", "Weekend Warrior"],
    rating: 4.3,
    reviewCount: 7,
    ghinVerified: false,
    bio: "8 handicap who plays 3-4 times a week and loves a good scramble. Not a pro but I hold my own and I show up ready to have the best round of my life.",
    homeClub: "Papago Golf Course",
    skills: { driving: 3, irons: 4, shortGame: 3, putting: 3, courseManagement: 3 },
    scrambleResume: { eventsPlayed: 7, notableFinishes: ["4th Place – AZ Valley Scramble Series 2024"] },
    rateDescription: "Just a spot on the team. Happy to contribute.",
    reviews: [
      { id: "r1", author: "Derek Moss", rating: 4, text: "Luis played great. Made a huge par save on 17 that kept us in contention.", date: "2025-10-19" },
    ],
  },
];
