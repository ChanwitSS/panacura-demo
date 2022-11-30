import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const Table = (props: any) => {
  const dispatch: any = useDispatch();
  const columns: GridColDef[] = [
    {
      field: 'pos',
      headerName: 'Pos',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'ref',
      headerName: 'Ref',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'alt',
      headerName: 'Alt',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'qual',
      headerName: 'Qual',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'filter',
      headerName: 'Filter',
      width: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'info',
      headerName: 'Info',
      width: 200,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (record: any) => {
        return JSON.stringify(record.row.info);
      },
    },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ height: '10%' }}></div>
      <div style={{ height: '90%' }}>
        <DataGrid
          rows={props?.data ?? []}
          columns={columns}
          pageSize={10}
          // rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
  );
};

export default Table;
