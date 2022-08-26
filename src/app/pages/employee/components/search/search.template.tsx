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
}: ISearchProps) {
  const filterList = ['Name', 'Age', 'Address', 'StartDate', 'Position'];

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
      <Grid item xs={3}>
        <Autocomplete
          size="small"
          id="filters"
          options={filterList}
          onChange={handleChangeFieldSearch}
          renderInput={(params) => (
            <TextField value={search.field} {...params} label="Choose Field" />
          )}
        />
      </Grid>
      <Grid
        className={`${search.field === 'StartDate' ? 'hidden' : 'block'}`}
        item
        xs={4}
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
        xs={4}
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
      <Grid item xs={1}>
        <Button onClick={() => handleSearch()} variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default SearchTemplate;
