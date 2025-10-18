import React from "react";
import { Route } from "react-router-dom";

import Dailyquiz from "./Dailyquiz/Dailyquiz";
import TimeTrials from "./TimeTrials/TimeTrials";
import WeeklyTournament from "./WeeklyTournament/WeeklyTournament";
import SeasonalBattles from "./SeasonalBattles/SeasonalBattles";
import GlobalTournaments from "./GlobalTournaments/GlobalTournaments";

export const QuestRoutes = () => (
    <>
        <Route path="/quests/daily-quiz" element={<Dailyquiz />} />
        <Route path="/quests/time-trials" element={<TimeTrials />} />
        <Route path="/quests/weekly-tournament" element={<WeeklyTournament />} />
        <Route path="/quests/seasonal-battles" element={<SeasonalBattles />} />
        <Route path="/quests/global-tournaments" element={<GlobalTournaments />} />
    </>
);
