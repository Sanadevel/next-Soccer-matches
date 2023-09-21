import SelectList from "../../molecules/selectLists";
import * as S from "../../atoms/submitBtn/style";
import { useEffect, useState } from "react";
import axios from "axios";

interface OrganismsProps {
  setMatches: Function;
}

const MainOrganisms: React.FC<OrganismsProps> = ({ setMatches }) => {
  const [teamResultsData, setTeamResultsData] = useState([]);
  const [curTeam, setCurTeam] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const axiosData = async () => {
    const results = await axios({
      method: "GET",
      url: `/api/football`,
      headers: {
        "X-Auth-Token": apiKey,
      },
    });
    setTeamResultsData(results.data.teams);
    console.log(results.data.teams);
    console.log(typeof results.data.teams);
  };

  const axiosMatches = async () => {
    const results = await axios({
      method: "GET",
      url: `/api/matches/${curTeam}`,
      headers: {
        "X-Auth-Token": apiKey,
      },
    });
    console.log(results.data.matches);
    setMatches(results.data.matches);
  };

  const onMatchAxios = (e: any) => {
    e.preventDefault();
    axiosMatches();
  };

  useEffect(() => {
    axiosData();
  }, []);
  return (
    <>
      <form onSubmit={(e) => onMatchAxios(e)}>
        <SelectList props={{ setCurTeam, teamResultsData }} />
        <S.Button>조회하기</S.Button>
      </form>
    </>
  );
};
export default MainOrganisms;
