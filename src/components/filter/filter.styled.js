import styled from "styled-components";


export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: var(--textColor);
  text-shadow: var(--insetBoxShadow);
`;

export const FilterInput = styled.input`
  padding: 5px 10px;

  font-size: 24px;
  color: var(--textColor);

  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: var(--insetBoxShadow);
`;