import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import AddMemberForm from './addMemberForm';
import NoticeForm from "./noticeForm";
import ProductListing from "./productListing";
import CustomerListing from "./customerListing";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar/>
        </div>
        <div className="col-10">
          <h2 className="mt-3 ml-15">Admin Dashboard Quick Checking</h2>
          <div className="row">
            <div className="col-4">
              <AddMemberForm/>
            </div>
            <div className="col-4">
              <NoticeForm/>
            </div>
            <div className="col-4">
              <ProductListing/>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <CustomerListing/>
            </div>
            <div className="col-4">
              <AddMemberForm/>
            </div>
            <div className="col-4">
              <AddMemberForm/>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
