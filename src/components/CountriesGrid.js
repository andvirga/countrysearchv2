import React from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const showFlag = (cellValue) => {
  var eDiv = document.createElement('div');
  eDiv.innerHTML = `<img src="https://www.countryflags.io/${cellValue.value}/flat/32.png">`;
  return eDiv;
}

const columnDefs = [
  { headerName: 'Code', field: 'alpha3Code', width: 100 },
  { headerName: 'Country', field: 'name', width: 200 },
  {
    headerName: 'Flag',
    field: 'alpha2Code',
    cellRenderer: showFlag,
    width: 80,
    sortable: false,
    filter: false,
  },
  { headerName: 'Capital', field: 'capital', width: 200 },
  { headerName: 'Population', field: 'population', width: 200 },
  { headerName: 'Region', field: 'region', width: 200 },
  { headerName: 'Subregion', field: 'subregion', width: 200 },
];

const defaultColDef = {
  sortable: true,
  filter: true,
};

export const CountriesGrid = (props) => {
  const { countryList } = props;
  return (
    <div className='ag-theme-alpine' style={{ height: '600px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={countryList}
      />
    </div>
  );
};

CountriesGrid.propTypes = {
  countryList: PropTypes.array,
};

CountriesGrid.defaultProps = {
  countryList: [],
};
