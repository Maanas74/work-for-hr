import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Sl no.', width: 90 },
  {
    field: 'business_code',
    headerName: 'Business Code',
    width: 150,
    editable: true,
  }
];
var rows=[]

async function fetchMovies() {
  const response = await fetch("http://localhost:8080/HRC20582W_Maanas/Fetchservlet");
  const data = await response.json();
  rows=data;
}

            //  fetch("http://localhost:8080/HRC20582W_Maanas/Fetchservlet")
            // .then(response => response.json())
            // .then(data => {
            //     rows=data;
            //     console.log(rows)
            // })

export default function DataLoad() {

  return (
    <div style={{height:'71vh'}}>
        <div className="bt1">
            <button>Heelo</button>
            <button>Hello</button>
            <button>Heeeelooooo</button>
        </div>
        <div className="bt2">
            <button>Refresh</button>
        </div>
        <form className="bt3">
            <input type="text" placeholder="Search Customer Id"/>
        </form>
        <div className="bt4">
            <button>Heelo</button>
            <button>Hello</button>
            <button>Heeeelooooo</button>
        </div>
        <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
        </div>
    </div>

  )
};
