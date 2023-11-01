import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ImpoArr from "../../icons/import.png";
import Delete from "../../icons/delete.png";
import Right from "../../icons/Right.png";
import Rect from "../../icons/Rect.png";
import "./Job.css";
function Job() {
  return (
    <div className="job-container">
      <div className="job-section">
        <div className="head-section">
          <h4>JOB</h4>
          <div className="quote-status">
            <p style={{ height: "10px", marginRight: "20px" }}>Quote Status</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Accepted
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="second-section">
          <table className="tbl-cls">
            <tbody>
              <tr>
                <td>
                  <p>Job Name</p>
                </td>
                <td>
                  <h5>Test Project</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Job Number</p>
                </td>
                <td>
                  <h5>Test</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Unit</p>
                </td>
                <td className="unit">
                  <input
                    type="text" disabled
                    style={{
                      
                      border:"none",
                      borderRadius: "14px",
                      width: "133px",
                      height: "30px",
                    }}
                  />
                  <img src={Rect} alt="" />
                </td>
              </tr>
              <tr className="difficulty">
                <td>
                  <p>Difficulty Level</p>
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    style={{ width: "217px", height: "28px", border: "none" }}
                  >
                    <option value="">High</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-sec">
            <button style={{ backgroundColor: "#0d6efd" }}>Job Details</button>
            <button style={{ backgroundColor: "#0d6efd" }}>Button 2</button>
            <button style={{ color: "#0d6efd" }}>Button 3</button>
          </div>
        </div>
        <div className="middle-sec">
          <input type="text" placeholder="Search projects" />
          <p>Sort By</p>
          <select name="" id="">
            <option value="">Name </option>
          </select>
          <button>
            Import <img src={ImpoArr} alt="" />
          </button>
        </div>
        <div className="last-sec">
          <table width="1050px" className="item-list">
            <tr className="t-head">
              <td>-</td>
              <td>SI NO</td>
              <td>Assembly Name</td>
              <td>Length</td>
              <td>Quantity</td>
              <td>-</td>
            </tr>

            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>1</td>
              <td>2”x4” Drop-in T-Bar (1/2” Flex)</td>
              <td className="len">100 M</td>
              <td className="len">-</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>2</td>
              <td>1”x4” Surface Fluor Fixt</td>
              <td className="len">-</td>
              <td className="len">120</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>3</td>
              <td>1/2” EMT DC SS Connector</td>
              <td className="len">-</td>
              <td className="len">500</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>4</td>
              <td>2”x4” Drop-in T-Bar (1” Flex)</td>
              <td className="len">120 M</td>
              <td className="len">-</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>5</td>
              <td>3” EMT DC SS Connector</td>
              <td className="len">-</td>
              <td className="len">270</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr className="t-body">
              <td>
                <img src={Right} alt="" />
              </td>
              <td>6</td>
              <td>2”x6” Surface Fluor Fixt</td>
              <td className="len">-</td>
              <td className="len">1200</td>
              <td>
                <img src={Delete} alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Job;
