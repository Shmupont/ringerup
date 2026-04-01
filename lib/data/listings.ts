export type Listing = {
  id: string;
  eventName: string;
  courseName: string;
  courseLocation: string;
  date: string;
  time: string;
  format: "Best Ball" | "Captain's Choice" | "Texas Scramble" | "Modified Stringer";
  teamSize: number;
  openSpots: number;
  vibes: "Competitive" | "Fun but trying" | "Social";
  entryFeeCovered: boolean;
  entryFeeAmount?: number;
  lookingForTags: string[];
  preferredHandicapMax: number;
  additionalDetails: string;
  captain: {
    name: string;
    avatar: string;
    bio: string;
  };
  suggestedGolferIds: string[];
  eventType: "Charity" | "Corporate" | "Club" | "Casual";
};

export const listings: Listing[] = [
  {
    id: "1",
    eventName: "Desert Classic Charity Scramble",
    courseName: "TPC Scottsdale",
    courseLocation: "Scottsdale, AZ",
    date: "2026-04-19",
    time: "8:00 AM",
    format: "Captain's Choice",
    teamSize: 4,
    openSpots: 1,
    vibes: "Competitive",
    entryFeeCovered: true,
    entryFeeAmount: 150,
    lookingForTags: ["Low Handicap", "Clutch Putter", "Course Manager"],
    preferredHandicapMax: 4,
    additionalDetails: "Annual charity scramble benefiting Phoenix Children's Hospital. Strong field expected. We finished 3rd last year and want to win this time.",
    captain: {
      name: "Brad Sullivan",
      avatar: "https://i.pravatar.cc/150?img=52",
      bio: "12 handicap, organizer of local golf meetups in Scottsdale. Have played this event 4 years running.",
    },
    suggestedGolferIds: ["1", "5", "6"],
    eventType: "Charity",
  },
  {
    id: "2",
    eventName: "Lone Star Corporate Cup",
    courseName: "Prestonwood Country Club",
    courseLocation: "Dallas, TX",
    date: "2026-04-25",
    time: "9:30 AM",
    format: "Best Ball",
    teamSize: 4,
    openSpots: 2,
    vibes: "Fun but trying",
    entryFeeCovered: true,
    entryFeeAmount: 200,
    lookingForTags: ["Iron Specialist", "Long Driver", "Team Player"],
    preferredHandicapMax: 6,
    additionalDetails: "Corporate tournament, clients will be watching. We want to look good and have fun while being competitive. Dinner and awards ceremony after.",
    captain: {
      name: "Diana Patel",
      avatar: "https://i.pravatar.cc/150?img=44",
      bio: "Sales director by day, golf obsessive on weekends. Organizes team for this event every year.",
    },
    suggestedGolferIds: ["2", "7", "4"],
    eventType: "Corporate",
  },
  {
    id: "3",
    eventName: "Bay Hill Invitational Scramble",
    courseName: "Bay Hill Club & Lodge",
    courseLocation: "Orlando, FL",
    date: "2026-05-03",
    time: "7:30 AM",
    format: "Captain's Choice",
    teamSize: 4,
    openSpots: 1,
    vibes: "Competitive",
    entryFeeCovered: true,
    entryFeeAmount: 250,
    lookingForTags: ["Short Game Wizard", "Clutch Putter", "Scramble Veteran"],
    preferredHandicapMax: 3,
    additionalDetails: "Private club event. Excellent course conditions. We need a specialist who can get up and down from anywhere.",
    captain: {
      name: "Tom Elias",
      avatar: "https://i.pravatar.cc/150?img=67",
      bio: "Club member at Bay Hill for 8 years. 7 handicap who knows every inch of this course.",
    },
    suggestedGolferIds: ["3", "9", "1"],
    eventType: "Club",
  },
  {
    id: "4",
    eventName: "Grand Strand Charity Open",
    courseName: "Pelican's Nest Golf Club",
    courseLocation: "Myrtle Beach, SC",
    date: "2026-04-30",
    time: "8:30 AM",
    format: "Texas Scramble",
    teamSize: 4,
    openSpots: 2,
    vibes: "Fun but trying",
    entryFeeCovered: true,
    entryFeeAmount: 125,
    lookingForTags: ["Long Driver", "Fun Teammate", "Links Player"],
    preferredHandicapMax: 8,
    additionalDetails: "Great coastal course, always a blast. Prizes for closest to pin and long drive. After party on the 19th hole.",
    captain: {
      name: "Wendy Cross",
      avatar: "https://i.pravatar.cc/150?img=38",
      bio: "Myrtle Beach local, 15 handicap, loves meeting new people through golf.",
    },
    suggestedGolferIds: ["4", "8", "10"],
    eventType: "Charity",
  },
  {
    id: "5",
    eventName: "Fiesta Bowl Golf Classic",
    courseName: "Wigwam Golf Club",
    courseLocation: "Phoenix, AZ",
    date: "2026-05-10",
    time: "10:00 AM",
    format: "Best Ball",
    teamSize: 4,
    openSpots: 1,
    vibes: "Social",
    entryFeeCovered: false,
    lookingForTags: ["Course Manager", "Consistent Scorer", "Good Vibe"],
    preferredHandicapMax: 10,
    additionalDetails: "More social than competitive, but we still want to score well. Free-flowing drinks and great food after. Would love someone who lifts the team's energy.",
    captain: {
      name: "Carlos Rivera",
      avatar: "https://i.pravatar.cc/150?img=59",
      bio: "Event planner who puts together golf days for friends. 18 handicap but loves the game.",
    },
    suggestedGolferIds: ["5", "6", "10"],
    eventType: "Casual",
  },
  {
    id: "6",
    eventName: "Dallas Tech Invitational",
    courseName: "Stonebriar Country Club",
    courseLocation: "Dallas, TX",
    date: "2026-05-17",
    time: "9:00 AM",
    format: "Captain's Choice",
    teamSize: 4,
    openSpots: 1,
    vibes: "Competitive",
    entryFeeCovered: true,
    entryFeeAmount: 300,
    lookingForTags: ["Clutch Putter", "Scramble Veteran", "Low Handicap"],
    preferredHandicapMax: 5,
    additionalDetails: "Exclusive tech industry event. Serious players only. Prize pool is significant. We need someone who can close out holes under pressure.",
    captain: {
      name: "Austin Mwangi",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Software founder, 6 handicap. Serious about golf and even more serious about winning this year.",
    },
    suggestedGolferIds: ["2", "7", "3"],
    eventType: "Corporate",
  },
  {
    id: "7",
    eventName: "Orange County Scramble Series",
    courseName: "Orange County National Golf Center",
    courseLocation: "Orlando, FL",
    date: "2026-04-26",
    time: "7:00 AM",
    format: "Texas Scramble",
    teamSize: 4,
    openSpots: 2,
    vibes: "Fun but trying",
    entryFeeCovered: true,
    entryFeeAmount: 100,
    lookingForTags: ["All-Around Player", "Iron Specialist", "Scramble Strategist"],
    preferredHandicapMax: 7,
    additionalDetails: "Part of a local tour series. Points go toward season-long leaderboard. We're mid-pack and looking to move up. Early tee time but totally worth it.",
    captain: {
      name: "Stephanie Ko",
      avatar: "https://i.pravatar.cc/150?img=49",
      bio: "Avid local golfer, 10 handicap. Has played this series 3 years running and loves the competition.",
    },
    suggestedGolferIds: ["9", "3", "2"],
    eventType: "Club",
  },
  {
    id: "8",
    eventName: "Barefoot Resort Invitational",
    courseName: "Barefoot Resort & Golf",
    courseLocation: "Myrtle Beach, SC",
    date: "2026-05-24",
    time: "11:00 AM",
    format: "Modified Stringer",
    teamSize: 4,
    openSpots: 1,
    vibes: "Social",
    entryFeeCovered: false,
    lookingForTags: ["Fun Teammate", "Long Driver", "Weekend Warrior"],
    preferredHandicapMax: 12,
    additionalDetails: "Relaxed beach golf day. We're just out for a good time and maybe a trophy. Cookout and bonfire afterward on the beach. Bring your best attitude.",
    captain: {
      name: "Joe Prescott",
      avatar: "https://i.pravatar.cc/150?img=63",
      bio: "Retired teacher, 20 handicap. Organizes this fun event every year for his group of friends.",
    },
    suggestedGolferIds: ["8", "4", "10"],
    eventType: "Casual",
  },
];
