import React from "react";
//import { useState } from 'react';
import Checkbox from "../components/common/Checkbox";
//import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable, { ROW_SELECT_SINGLE, SelectRowProps } from 'react-bootstrap-table-next'


//import { useNavigate } from 'react-router';
//import { Button } from 'react-bootstrap';
//import service from '../Services/service';
//import userDetails from '../components/common/Input';

// interface Props{
//     text: string
//     response: any
//     error: any

// }

//  const usersList: React.FC<Props> = () => {

//     const [users, setUsers] = useState([]);
//     const history = useNavigate();

//     useEffect(() => {
//         init();
//     }, []);

//     Printing All User Details
//     const init = () => {
//         service.getAll()
//             .then(response => {
//                 console.log('printing the user data', response.data);
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.log('Something went wrong', error);
//             });
//     };

//     Deleting a record
//     const handleDelete = id => {
//         service.remove(id)
//             .then(response => {
//                 console.log('User deleted successfully', response.data);
//                 init();
//             })
//             .catch(error => {
//                 console.log('Something went wrong', error);
//             });
//     };

//     return (
//         <div classNameName='container'>
//             <h3 className='text-center' style={{marginTop:'70px'}}>Book List</h3>
//             <hr />
//             <div>
//                 <table border="1" cellPadding="10" className='table table-striped table-bordered'>
//                     <thead >
//                         <tr className='tr-expand-md tr-dark bg-dark' style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}>
//                             <th>USERNAME</th>
//                             <th>ROLE</th>
//                             <th>CREATED DATE</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map(book => (
//                                 <tr key={book.id}>
//                                     <td>{book.userName}</td>
//                                     <td>{book.role}</td>
//                                     <td>{book.createdDate}</td>
//                                     {/* <td>
//                                         <Link className="btn btn-info" to={`/books/edit/${book.id}`} style={{ marginLeft: '40px' }} >Update</Link>
//                                         <Button variant="danger" onClick={(e) => {
//                                             handleDelete(book.id);
//                                         }} style={{ marginLeft: '20px' }}>Delete</Button>
//                                     </td> */}
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

//  export default usersList;

const data = [
  { username: "User 1", role: "Admin", createdDate: "Nov 4, 2021" },
  { username: "User 2", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 3", role: "Super Admin", createdDate: "Nov 4, 2021" },
  { username: "User 4", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 5", role: "Admin", createdDate: "Nov 4, 2021" },
  { username: "User 6", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 7", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 8", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 9", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 10", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 11", role: "User", createdDate: "Nov 4, 2021" },
  { username: "User 12", role: "User", createdDate: "Nov 4, 2021" },
];

const columns = [
  {
    dataField: "username",
    text: "USERNAME",
  },
  {
    dataField: "role",
    text: "ROLE",
  },
  {
    dataField: "createdDate",
    text: "CREATED DATE",
  },
];

const options = {
  paginationSize: 2,
  pageStartIndex: 1,
  firstPageText: "First",
  prePageText: "Previous",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: "9",
      value: 9,
    },
  ],
};

const selectRow: SelectRowProps<any> = {
  mode: 'checkbox',
  onSelect: (row, isSelect, rowIndex, e) => {
    if (row==rowIndex && isSelect==true) {
      return true;
    }
  }
}

const UsersList = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row" >
        <div className="Home" style={{ padding: "10px" }}>
          <img
            src="/Home_Button.png"
            alt="img"
            style={{ width: "45px", height: "25px" }}
          />
        </div>
        <div style={{ padding: "10px", marginLeft: "84%" }}>
          <Checkbox name="selectall" label="Select all" onChange={undefined} />
        </div>
      </div>
      <hr style={{ color: "#636363" }} />
      <div className="d-flex flex-row">
        <div>
          <h2 style={{ color: "#4B4B4B", fontWeight: "bold" }}>
            User Management
          </h2>
        </div>
        <div style={{ marginLeft: "69%" }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#00B0FF", border: "#00B0FF" }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "5px" }}
            >
              <path
                d="M16.7143 7.23995H10.9286V1.90302C10.9286 1.24814 10.3528 0.717041 9.64286 0.717041H8.35714C7.64719 0.717041 7.07143 1.24814 7.07143 1.90302V7.23995H1.28571C0.575759 7.23995 0 7.77105 0 8.42594V9.61192C0 10.2668 0.575759 10.7979 1.28571 10.7979H7.07143V16.1348C7.07143 16.7897 7.64719 17.3208 8.35714 17.3208H9.64286C10.3528 17.3208 10.9286 16.7897 10.9286 16.1348V10.7979H16.7143C17.4242 10.7979 18 10.2668 18 9.61192V8.42594C18 7.77105 17.4242 7.23995 16.7143 7.23995Z"
                fill="white"
              />
            </svg>
            Add a User
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          position: "relative",
          maxWidth: "max-content",
        }}
      >
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Search"
          style={{ borderRadius: "100px", maxWidth: "400px", width: "400px" }}
        />
        <div style={{ position: "absolute", right: "13px", top: "5px" }}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3719 24.2622L20.1447 17.7168C21.5608 15.5072 22.2595 12.7463 21.8854 9.8044C21.2476 4.80048 17.3459 0.728341 12.5806 0.0941977C5.49556 -0.848131 -0.462119 5.41401 0.434446 12.8611C1.03791 17.8721 4.91259 21.9765 9.67373 22.6437C12.4726 23.0368 15.0997 22.3027 17.2015 20.814L23.4286 27.3594C24.2412 28.2135 25.559 28.2135 26.3716 27.3594C27.1834 26.5042 27.1834 25.1153 26.3719 24.2622ZM4.45978 11.3738C4.45978 7.51434 7.44694 4.37451 11.1187 4.37451C14.7905 4.37451 17.7777 7.51434 17.7777 11.3738C17.7777 15.2332 14.7905 18.373 11.1187 18.373C7.44694 18.373 4.45978 15.2343 4.45978 11.3738Z"
              fill="#636363"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </div>
      <div style={{ marginTop: "25px" , color:"#636363"}}>
        <BootstrapTable 
          keyField="id"
          data={data}
          columns={columns}
          pagination={paginationFactory(options)}
          rowStyle={ { color: '#636363', } }
          selectRow={ selectRow }
          classes="table"
        />
      </div>
    </div>
  );
};

export default UsersList;
