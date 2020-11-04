import { useContext } from "react";
import { FilterContext } from "../context/context-filter";
import styled from "styled-components";

const Wraper = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  background-color: #ffffff;
  width: 100%;
  text-align: center;
  margin-top: -36px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 1px 9px 14px -3px rgba(93, 162, 162, 0.7);
  box-shadow: 1px 9px 14px -3px rgba(93, 162, 162, 0.7);
`;

const FiltersWrapper = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-contenr: space-evenly;
  flex-wrap: wrap;
`;

const Clear = styled.button`
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  color: #80aaa9;
  background: transparent;
  border: none;
  font-weight: 700;
  &:hover {
    transition: 0.2s;
    text-decoration: underline;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 13px;
  padding: 8px;
  outline: none;
  border: none;
  background-color: #eef7f6;
  color: #5da2a2;
  font-weight: 700;
  border-radius: 0 4px 4px 0;
`;

const XButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  font-weight: 700;
  background-color: #5ba6a2;
  color: #ffffff;
  border-radius: 4px 0 0 4px;
  outline: none;
  border: none;
  &:hover {
    background-color: #414B4A;
    transition: .2s;
  }
`;

export default function FilterBox() {
  const [filters, setFilters] = useContext(FilterContext);
  const isVisible = filters.length > 0;

  const clearFilters = () => setFilters([]);

  const handleDelete = (e) => {
    const filtered = filters.filter(f => f !== e.target.id);
    setFilters([...filtered]);
  }

  return (
    <Wraper isVisible={isVisible}>
      <FiltersWrapper>
        {filters.map((f) => (
          <LabelWrapper>
            <XButton id={f} onClick={handleDelete}>X</XButton>
            <Label>{f}</Label>
          </LabelWrapper>
        ))}
      </FiltersWrapper>
      <Clear onClick={clearFilters}>Clear</Clear>
    </Wraper>
  );
}
