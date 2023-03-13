import React from 'react'
//@mui imports
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';

//constants for testing
// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name', headerName: 'Name', renderCell: (rowData: any) => {
      return (<Box display={'flex'}><Image src={rowData?.row?.image} width='20' height='20' alt='logo' />{' '}<>{ rowData?.row?.name}</></Box>)
  },width: 150 },
  { field: 'symbol', headerName: 'Symbol', width: 150 },
  { field: 'current_price', headerName: 'Price', width: 150 },
  { field: 'market_cap', headerName: 'Market Cap', width: 150 }, //market_cap_change_24h
  { field: 'market_cap_change_24h', headerName: 'Volumne (24h)', width: 150 },
];

interface ListingProps{
  data: Array<any>
}

const Listings = ({ data }: ListingProps) => {
  console.log(data, 'check')
  return (
    <Box width='100%' height={'580px'}>
      <DataGrid
        columns={columns}
        rows={data}
        paginationMode='server'
      />
    </Box>
  );
};

export default Listings