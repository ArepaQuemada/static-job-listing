import { FilterContext } from "../context/context-filter";
import { useContext } from "react";
import FilterBox from "./FilterBox";
import JobItem from "./JobItem";
import styled from "styled-components";
import data from "../data.json";

const Container = styled.div`
  padding-left: 45px;
  padding-right: 45px;

  @media (max-width: 750px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const getFiltered = (filters) => {
  const mapped = data.map(d => d = {...d, filters: [d.role, d.level, ...d.languages, ...d.tools]});
  return mapped.filter(m => {
    let equalElements = [];
    m.filters.forEach(mf => {
      const f = filters.find(f => f === mf);
      if (f) {
        equalElements = [...equalElements, f];
      }
    })
    return equalElements.length === filters.length;
  });
};

export default function View() {
  const [filters] = useContext(FilterContext);
  const filtered = filters.length > 0 ? getFiltered(filters) : data;

  return (
    <Container>
      <FilterBox />
      {filtered.map((d) => {
        return <JobItem item={d} key={d.id} />;
      })}
    </Container>
  );
}
