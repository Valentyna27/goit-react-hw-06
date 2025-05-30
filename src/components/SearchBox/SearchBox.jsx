import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import './SearchBox.modules.css';

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className="boxWrapper">
      <label className="labelSearch" htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className="inputSearch"
        type="text"
        id={id}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
