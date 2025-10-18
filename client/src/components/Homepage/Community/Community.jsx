// components/Homepage/Community/Community.jsx
import Forums from "./Forums/Forums";
import FriendsTeams from "./FriendsTeams/FriendsTeams";
import EventsMeetups from "./EventsMeetups/EventsMeetups";
import Leaderboards from "./Leaderboards/Leaderboards";
import Achievements from "./Achievements/Achievements";

export const CommunityRoutes = [
    { path: "/community/forums", element: <Forums /> },
    { path: "/community/teams", element: <FriendsTeams /> },
    { path: "/community/events", element: <EventsMeetups /> },
    { path: "/community/leaderboards", element: <Leaderboards /> },
    { path: "/community/achievements", element: <Achievements /> }
];
