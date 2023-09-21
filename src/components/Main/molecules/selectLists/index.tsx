import { useEffect, useState } from "react";

interface propsInterFace {
  setCurTeam: Function;
  teamResultsData: any;
}

interface SelectListProps {
  props: propsInterFace;
}

const SelectList: React.FC<SelectListProps> = ({ props }) => {
  const [teamResultsData, setTeamResultsData] = useState<any>(Object);
  const onIdChange = (e: any) => {
    props.setCurTeam(e.target.value);
  };

  useEffect(() => {
    setTeamResultsData(props.teamResultsData);
  }, []);
  return (
    <>
      <select onChange={(e) => onIdChange(e)}>
        <option>0. None.</option>
        {props.teamResultsData?.map((team: any, index: number) => {
          return (
            <option key={team.id} value={team.id}>
              {index + 1}. {team.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectList;
