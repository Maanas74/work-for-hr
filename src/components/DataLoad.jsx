import React , {useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
  { field: 'id', headerName: 'Sl no.', width: 90 },
  {
    field: 'business_code',
    headerName: 'Business Code',
    width: 150,
    editable: true,
  },
  {
    field: 'cust_number',
    headerName: 'Cust Number',
    width: 150,
    editable: true,
  },
  {
    field: 'clear_date',
    headerName: 'Clear Date',
    width: 150,
    editable: true,
  },
  {
    field: 'buisness_year',
    headerName: 'Business Year',
    width: 150,
    editable: true,
  },
  {
    field: 'doc_id',
    headerName: 'Doc Id',
    width: 150,
    editable: true,
  },
  {
    field: 'posting_date',
    headerName: 'Posting Date',
    width: 150,
    editable: true,
  },
  {
    field: 'document_create_date',
    headerName: 'Document Create Date',
    width: 150,
    editable: true,
  },
  {
    field: 'due_in_date',
    headerName: 'Due In Date',
    width: 150,
    editable: true,
  },
  {
    field: 'invoice_currency',
    headerName: 'Invoice Currency',
    width: 150,
    editable: true,
  },
  {
    field: 'document_type',
    headerName: 'Document Type',
    width: 150,
    editable: true,
  },
  {
    field: 'posting_id',
    headerName: 'Posting Id',
    width: 150,
    editable: true,
  },
  {
    field: 'total_open_amount',
    headerName: 'Total Open Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'baseline_create_date',
    headerName: 'Baseline Create Date',
    width: 150,
    editable: true,
  },
  {
    field: 'cust_payment_terms',
    headerName: 'Cust Payment Terms',
    width: 150,
    editable: true,
  },
  {
    field: 'invoice_id',
    headerName: 'Invoice Id',
    width: 150,
    editable: true,
  }

];

export default function DataLoad() {

  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() =>{
    getdata()
  },[])

  async function getdata() {
    await axios('http://localhost:8080/hrc/Fetchservlet')
    .then(response => {
      setData(response.data)
    })
    .catch( error => {
      console.error("Error Fetching data:",error);
      setError(error)
    })
    .finally(() =>{
      setLoading(false);
    })
  }

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
                        rows={data}
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
