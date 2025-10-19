import Header from "./Components/Header";
import LastSection from "./Components/LastSection";
import Taps from "./Components/Taps";

function Leaderboard() {
  const leaderboardData = [
  {
    id: 1,
    name: "Sophia Carter",
    username: "@sophia",
    points: 1320,
    bugs: 41,
    dayStreak: 14,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 2,
    name: "Ethan Miller",
    username: "@ethan",
    points: 1285,
    bugs: 38,
    dayStreak: 12,
    language: "JavaScript",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 3,
    name: "Olivia Brown",
    username: "@olivia",
    points: 1210,
    bugs: 34,
    dayStreak: 10,
    language: "C++",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 4,
    name: "Liam Johnson",
    username: "@liam",
    points: 1155,
    bugs: 30,
    dayStreak: 9,
    language: "JavaScript",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 5,
    name: "Ava Wilson",
    username: "@ava",
    points: 1080,
    bugs: 27,
    dayStreak: 8,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 6,
    name: "Noah Davis",
    username: "@noah",
    points: 1025,
    bugs: 22,
    dayStreak: 7,
    language: "C++",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 7,
    name: "Emma Garcia",
    username: "@emma",
    points: 970,
    bugs: 19,
    dayStreak: 6,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 8,
    name: "James Anderson",
    username: "@james",
    points: 915,
    bugs: 16,
    dayStreak: 5,
    language: "JavaScript",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 9,
    name: "Mia Robinson",
    username: "@mia",
    points: 870,
    bugs: 13,
    dayStreak: 4,
    language: "C++",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 10,
    name: "William Martinez",
    username: "@william",
    points: 820,
    bugs: 10,
    dayStreak: 3,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 11,
    name: "Sara John",
    username: "@sarra",
    points: 320,
    bugs: 11,
    dayStreak: 14,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
   {
    id: 12,
    name: "Elina sina",
    username: "@elina",
    points: 300,
    bugs: 10,
    dayStreak: 9,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
   {
    id: 13,
    name: "Mo Sam",
    username: "@Mo",
    points: 190,
    bugs: 8,
    dayStreak: 7,
    language: "Python",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
    {
    id: 14,
    name: "Windy goerge",
    username: "@windy",
    points: 290,
    bugs: 9,
    dayStreak: 8,
    language: "JavaScript",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  
];

  return (
    <div className="max-w-[70rem] m-auto">
      <Header />
      <Taps leaderboardData={leaderboardData}/>
      <LastSection />
    </div>
  );
}

export default Leaderboard;
