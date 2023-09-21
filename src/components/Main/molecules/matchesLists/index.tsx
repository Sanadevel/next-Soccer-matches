import * as S from "../matchesLists/Style";

const MatchesLists = (matches: any) => {
  console.log(matches.matches);
  return (
    <>
      {matches?.matches.map((element: any) => {
        const scores = element.score.fullTime;
        const matchDate = new Date(element.utcDate);
        return (
          <S.MatchesBox>
            <img
              alt={`${element.homeTeam.name} Logo`}
              src={element.homeTeam.crest}
            />
            <div className="score">
              {scores.home == null ? "0" : scores.home}{" "}
            </div>
            <div>
              {element.homeTeam.name} vs {element.awayTeam.name}
            </div>
            <div className="score">
              {" "}
              {scores.away == null ? "0" : scores.away}
            </div>
            <img
              alt={`${element.awayTeam.name} Logo`}
              src={element.awayTeam.crest}
            />
            <div>{matchDate.toLocaleString()}</div>
            <br />
          </S.MatchesBox>
        );
      })}
    </>
  );
};

export default MatchesLists;
