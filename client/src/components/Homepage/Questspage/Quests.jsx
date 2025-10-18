// components/Homepage/Questspage/Quests.jsx
import Dailyquiz from "./Dailyquiz/Dailyquiz";
import TimeTrials from "./TimeTrials/TimeTrials";
import WeeklyTournament from "./WeeklyTournament/WeeklyTournament";
import SeasonalBattles from "./SeasonalBattles/SeasonalBattles";
import GlobalTournaments from "./GlobalTournaments/GlobalTournaments";

export const QuestRoutes = [
    { path: "/quests/daily-quiz", element: <Dailyquiz /> },
    { path: "/quests/time-trials", element: <TimeTrials /> },
    { path: "/quests/weekly-tournament", element: <WeeklyTournament /> },
    { path: "/quests/seasonal-battles", element: <SeasonalBattles /> },
    { path: "/quests/global-tournaments", element: <GlobalTournaments /> },
];
