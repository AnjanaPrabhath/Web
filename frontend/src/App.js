import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import AddMemberForm from './addMemberForm';


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
              <AddMemberForm/>
            </div>
            <div className="col-4">
              <AddMemberForm/>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <AddMemberForm/>
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
