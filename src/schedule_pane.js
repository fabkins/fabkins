
import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Sta', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Start Time', width: 300 },
  { field: 'col2', headerName: 'Status', width: 100 }
];

 function SchedulePane() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default SchedulePane;
