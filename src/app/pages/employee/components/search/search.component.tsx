import { useContext, useState } from 'react';
import { AppContext } from '../../../../app.context';
import SearchTemplate from './search.template';

function FilterComponent() {
  const appData = useContext(AppContext);
  const [search, setSearch] = useState({
    field: '',
    searchValue: '',
  });
  const [startDate, setStartDate] = useState(new Date().toString());
  const [endDate, setEndDate] = useState(new Date().toString());

  const handleSearch = () => {
    if (search.field === 'StartDate') {
      appData?.updateFilterEmployee({
        field: search.field,
        search:
          new Date(startDate).toISOString().split('T')[0] +
          '&' +
          new Date(endDate).toISOString().split('T')[0],
      });
    } else {
      appData?.updateFilterEmployee({
        field: search.field,
        search: search.searchValue,
      });
    }
  };

  return (
    <SearchTemplate
      handleSearch={handleSearch}
      search={search}
      setSearch={setSearch}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
  );
}

export default FilterComponent;
