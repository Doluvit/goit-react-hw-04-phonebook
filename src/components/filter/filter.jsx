import PropTypes from 'prop-types';
import { FilterContainer, FilterInput, FilterLabel } from './filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func,
};
