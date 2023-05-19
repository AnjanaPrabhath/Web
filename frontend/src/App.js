import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import AddMemberForm from './addMemberForm';
import NoticeForm from "./noticeForm";
import ProductListing from "./productListing";
import CustomerListing from "./customerListing";
import LivestockListing from "./livestockListing";


function App() {
  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-2">
      <Sidebar />
    </div>
    <div className="col-10 d-flex flex-column align-items-center">
      <h2 className="mt-3">Admin Dashboard Quick Checking</h2>
      <hr />
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Member</h5>
              <AddMemberForm />
            </div>
          </div>
        </div>       
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Notice Form</h5>
              <NoticeForm />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Listing</h5>
              <ProductListing />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Livestock Listing</h5>
              <LivestockListing />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer Listing</h5>
              <CustomerListing />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
