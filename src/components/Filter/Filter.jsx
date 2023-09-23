import { useDispatch, useSelector } from 'react-redux';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import {selectFilter } from 'redux/selectors';

export const Filter = () => {

  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const updateFilter = payload => {
    dispatch(setFilter(payload));
  };

  const handleChange = event => {
    updateFilter(event.target.value);
  };

  


  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Type a name to search"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};