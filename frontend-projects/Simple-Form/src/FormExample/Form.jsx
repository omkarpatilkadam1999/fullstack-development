import React, { useState } from "react";
import "../FormExample/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  const [formData, setformData] = useState({ name: "", email: "", mobile: "", age: "" });

  const [allData, setAllData] = useState([]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((olddata) => ({ ...olddata, [name]: value }));
  };

  function deleteData(index) {
    const updatedData = allData.filter((_, i) => i !== index);
    setAllData(updatedData);
    toast.info("Data deleted!", { autoClose: 1000 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim() || !formData.age.toString().trim()) {
      toast.error("Please fill all fields!", { autoClose: 1200 });
      return;
    }
    if (formData.mobile.trim().length !== 10) {
      toast.error("Please enter a 10 digit mobile number!", { autoClose: 1200 });
      return;
    }

    setAllData((olddata) => [...olddata, formData]);
    toast.success("Data submitted successfully!", { autoClose: 1200 });

    setformData({ name: "", email: "", mobile: "", age: "" });
  };

  return (
    <div className="container">
      <h1 className="tittle">User Registration Form</h1>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit} className="formbox">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>

            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>

            <label>Mobile</label>
            <input type="telephone" name="mobile" placeholder="Enter your mobile" value={formData.mobile} onChange={handleChange}/>

            <label>Age</label>
            <input type="number" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange}/>

            <button type="submit" className="btn"> Submit </button>
          </form>
        </div>

        <div className="col">
          <div className="databox">
            <h3>All Submitted Data</h3>
            {allData.length === 0 
            ? 
            (
              <p className="emptybox">No data submitted yet.</p>
            ) 
            : (
                <table className="customtable">
                    <thead>
                      <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Age</th>  
                        <th>Action</th>                      
                      </tr>
                    </thead>
                    <tbody>
                      {allData.map((item,index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.age}</td>
                          <td>
                            <button className="btn" onClick={() => deleteData(index)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
