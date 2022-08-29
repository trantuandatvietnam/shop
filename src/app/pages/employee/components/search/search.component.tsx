import { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../../contexts/employee-data.context';
import SearchTemplate from './search.template';

function FilterComponent() {
  const employeeData = useContext(EmployeeContext);

  const [search, setSearch] = useState({
    field: 'Name',
    searchValue: '',
  });
  const [startDate, setStartDate] = useState(new Date().toString());
  const [endDate, setEndDate] = useState(new Date().toString());
  const [filterList, setFilterList] = useState<string[]>([]);

  const handleSearch = () => {
    // if (!search.searchValue) return;
    if (search.field === 'StartDate') {
      employeeData?.updateFilterEmployee({
        field: search.field,
        search:
          new Date(startDate).toISOString().split('T')[0] +
          '&' +
          new Date(endDate).toISOString().split('T')[0],
      });
    } else {
      employeeData?.updateFilterEmployee({
        field: search.field,
        search: search.searchValue,
      });
    }
  };

  const handleClearSearch = () => {
    setSearch({
      field: 'Name',
      searchValue: '',
    });
    employeeData?.updateFilterEmployee({
      field: 'Name',
      search: '',
    });
  };

  useEffect(() => {
    if (
      employeeData?.getEmployeeList() &&
      employeeData?.getEmployeeList().length > 0
    ) {
      const filters = Object.keys(employeeData?.getEmployeeList()[0]);
      setFilterList(
        filters
          .filter((item: string) => item !== 'dateCreated')
          .map((item) => item.charAt(0).toUpperCase() + item.slice(1)),
      );
    }
  }, [employeeData]);

  return (
    <SearchTemplate
      handleSearch={handleSearch}
      search={search}
      setSearch={setSearch}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      onClearSearch={handleClearSearch}
      filterList={filterList}
    />
  );
}

export default FilterComponent;
