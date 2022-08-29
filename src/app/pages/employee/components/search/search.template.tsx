import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { ChangeEvent } from 'react';
import { ISearchProps } from '../../models/search.prop';

function SearchTemplate({
  search,
  setSearch,
  handleSearch,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  onClearSearch,
  filterList = [],
}: ISearchProps) {
  // List filter look like below
  // const filterList = ['id', 'name', 'age', 'address', 'startDate', 'position'];

  const handleChangeSearchValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearch({ ...search, searchValue: e.target.value });
  };

  const handleChangeFieldSearch = (_: any, value: string | null) => {
    setSearch({ ...search, field: value! });
  };

  const handleChangeStartDateValue = (value: any) => {
    const date = new Date(value).toISOString().split('T')[0];
    setStartDate(date);
  };

  const handleChangeEndDateValue = (value: any) => {
    const date = new Date(value).toISOString().split('T')[0];
    setEndDate(date);
  };

  return (
    <Grid maxWidth={900} container spacing={2}>
      <Grid item xs={4}>
        <Autocomplete
          size="small"
          id="filters"
          options={filterList}
          onChange={handleChangeFieldSearch}
          value={search.field}
          renderInput={(params) => (
            <TextField {...params} label="Choose Field" />
          )}
        />
      </Grid>
      <Grid
        className={`${search.field === 'StartDate' ? 'hidden' : 'block'}`}
        item
        md={4}
        xs={8}
      >
        <div className="items-center">
          <TextField
            onChange={handleChangeSearchValue}
            name="seachValue"
            value={search.searchValue}
            size="small"
            id="search"
            label="Search"
            sx={{ width: '100%' }}
          />
        </div>
      </Grid>
      <Grid
        className={`${search.field === 'StartDate' ? 'block' : 'hidden'}`}
        item
        md={4}
        xs={8}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className={`flex items-center gap-x-[12px]`}>
            <MobileDatePicker
              label="Start Date"
              inputFormat="MM/dd/yyyy"
              value={new Date(startDate)}
              onChange={handleChangeStartDateValue}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
            <span>To</span>
            <MobileDatePicker
              label="End Date"
              inputFormat="MM/dd/yyyy"
              value={new Date(endDate)}
              onChange={handleChangeEndDateValue}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </div>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={1}>
        <div className="inline-flex items-center gap-x-[12px]">
          <Button onClick={() => handleSearch()} variant="contained">
            Search
          </Button>
          <Button
            color="success"
            onClick={() => onClearSearch()}
            variant="contained"
          >
            Clear
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default SearchTemplate;
