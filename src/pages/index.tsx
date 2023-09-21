import axios from "axios";
import { ObjectHTMLAttributes, useEffect, useState } from "react";
import * as S from "../components/Main/atoms/submitBtn/style";
import SelectList from "@/components/Main/molecules/selectLists";
import MainOrganisms from "@/components/Main/organisms/MainOrganisms";
import MatchesLists from "@/components/Main/molecules/matchesLists";

export default function Home() {
  const [matches, setMatches] = useState([]);
  const [searched, setSearched] = useState(false);

  return (
    <>
      <MainOrganisms setMatches={setMatches} />
      {matches ? <MatchesLists matches={matches} /> : "Not Selected"}
    </>
  );
}
