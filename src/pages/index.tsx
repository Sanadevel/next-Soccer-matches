import axios from "axios";
import { ObjectHTMLAttributes, useEffect, useState } from "react";

export default function Home() {
  const [teamData, setTeamData] = useState([]);
  const [teamResultsData, setTeamResultsData] = useState([]);
  const [curTeam, setCurTeam] = useState(0);
  const [matches, setMatches] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const axiosData = async () => {
      const results = await axios({
        method: "GET",
        url: `/api/football`,
        headers: {
          "X-Auth-Token": apiKey,
        },
      });
      console.log(results);
      setTeamData(results.data);
      setTeamResultsData(results.data.teams);
    };

    axiosData();
  }, []);

  const onIdChange = (e: any) => {
    setCurTeam(e.target.value);
  };

  const onMatchAxios = (e: any) => {
    e.preventDefault();
    axiosData();
  };

  const axiosData = async () => {
    const data = await axios({
      method: "GET",
      url: `/api/matches/${curTeam}`,
      headers: {
        "X-Auth-Token": "27766488767040f8917d596a4c353114",
      },
    });
    console.log(data.data.matches);
    setMatches(data.data.matches);
  };

  return (
    <>
      <h1>Hi! Do You Have A Team You Love?</h1>
      <form onSubmit={(e) => onMatchAxios(e)}>
        <select onChange={(e) => onIdChange(e)}>
          <option>0. None.</option>
          {teamResultsData.map((team: any, index) => {
            console.log(team.id);
            return (
              <option key={team.id} value={team.id}>
                {index + 1}. {team.name}
              </option>
            );
          })}
        </select>
        <button>버튼</button>
      </form>
      {matches?.map((element: any) => {
        const scores = element.score.fullTime;
        const matchDate = new Date(element.utcDate);
        return (
          <>
            <img
              alt={`${element.homeTeam.name} Logo`}
              src={element.homeTeam.crest}
            />
            <span className="score">
              {scores.home == null ? "0" : scores.home}{" "}
            </span>
            <span>
              {element.homeTeam.name} vs {element.awayTeam.name}
            </span>
            <span> {scores.away == null ? "0" : scores.away}</span>
            <img
              alt={`${element.awayTeam.name} Logo`}
              src={element.awayTeam.crest}
            />
            <span>{matchDate.toLocaleString()}</span>
            <br />
          </>
        );
      })}
    </>
  );
}
