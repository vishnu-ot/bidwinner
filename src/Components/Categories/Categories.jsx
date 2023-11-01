import React, { useState } from "react";
import "./Categories.css";

import Ri from "../../icons/ri.png";
import Lens from "../../icons/lens.png";
import Table from "react-bootstrap/Table";
import LeftArrow from "../../icons/ArrowFatRight.png";
import SubCatData from "../../data/SubCat.json";
import Arr from "../../icons/arr.png";
import CategoryData from "../../data/Catogories.json";
import AssemblyData from "../../data/Assembly.json";
import Plus from "../../icons/plus.png";
import { useNavigate } from "react-router-dom";
function Categories() {
  const [assembly, setAssembly] = useState(false);
  const [assembly1, setAssembly1] = useState(false);
  const navigate = useNavigate();
  const fileChange = () => {
    setAssembly1((prev) => !prev);
    setAssembly(false);
  };
  const assemblyMove = () => {
    setAssembly((prev) => !prev);
  };

  const newForm=()=>{
    
  }
  const backtoCat = () => {
    if (!assembly1) {
      setAssembly(false);
    } else if (assembly1) {
      setAssembly1(false);
      setAssembly(true);
    }
  };
  return (
    <div className="catogory-container">
      <div className="cat">
        <img
          onClick={backtoCat}
          src={LeftArrow}
          alt=""
          style={{ width: "17px", height: "17px" }}
        />
        {assembly ? (
          <div className="cat-head">
            <h5>SubCategory</h5>
          </div>
        ) : assembly1 ? (
          <div className="cat-head">
            <h5>Assembly</h5>
          </div>
        ) : (
          <div className="cat-head">
            <h5>Categories</h5>
          </div>
        )}
        <div className="search">
          <input type="text" placeholder="Search sub Categories" />
        </div>
      </div>
      <div
        className="table-sec"
        style={{
          marginLeft: "31px",
          marginTop: "15px",
          width: "500px",
          height: "auto",
          marginBottom: "20px",
        }}
      >
        <Table style={{ height: "90vh", overflow: "hidden" }}>
          <thead>
            <tr>
              <td
                className="tbl-hed"
                style={{ borderBottom: "none", fontSize: "14px" }}
              >
                SI NO
              </td>
              <td className="tbl-hed" style={{ borderBottom: "none" }}>
                Name
              </td>
              <td className="tbl-hed" style={{ borderBottom: "none" }}>
                Type
              </td>
            </tr>
          </thead>
          <tbody>
            {assembly
              ? SubCatData.map((item) => {
                  return (
                    <tr key={item.id} onClick={fileChange}>
                      <td style={{ borderBottom: "none" }}>{item.id}</td>
                      <td style={{ borderBottom: "none" }}>{item.name}</td>
                      <td style={{ borderBottom: "none" }}>
                        {item.Type} <img src={Arr} alt="" />
                      </td>
                    </tr>
                  );
                })
              : assembly1
              ? AssemblyData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ borderBottom: "none" }}>{item.id}</td>
                      <td style={{ borderBottom: "none" }}>{item.name}</td>
                      <td style={{ borderBottom: "none" }}>
                        {item.Type} <img src={Plus} alt="" onClick={newForm}/>
                      </td>
                    </tr>
                  );
                })
              : CategoryData.map((item) => {
                  return (
                    <tr key={item.id} onClick={assemblyMove}>
                      <td style={{ borderBottom: "none" }}>{item.id}</td>
                      <td style={{ borderBottom: "none" }}>{item.name}</td>
                      <td style={{ borderBottom: "none" }}>
                        {item.Type} <img src={Arr} alt="" />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Categories;
