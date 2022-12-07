import React from "react";
import NavBar from "../components/NavBar";
import "./CollectorVehicles.css";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
const CollectorList = [
  {
    id: "CC01",
    name: "Janne Cooper",
    email: "jannecooper@company.com",
    vehicle: "V1",
    available: "no",
  },
  {
    id: "CC02",
    name: "Cody Fisher",
    email: "codyfisher@company.com",
    vehicle: "V1",
  },
  {
    id: "CC03",
    name: "Ether Howard",
    email: "etherhoward@company.com",
    vehicle: "V1",
  },
  {
    id: "CC04",
    name: "Helena Smith",
    email: "helenasmith@company.com",
    vehicle: "V1",
    assign: "no",
  },
];
const VehicleList = [
  { id: "V0001", plate: "017529", capicity: 2, collector: "C001" },
  { id: "V0002", plate: "892256", capicity: 3, collector: "C002" },
  { id: "V0003", plate: "797155", capicity: 1, collector: "C003" },
  { id: "V0004", plate: "882623", capicity: 2, collector: "C004" },
];

const CollectorVehicles = () => {
  let color = "#4069e5ff";

  return (
    <div>
      <NavBar ></NavBar>
      <div className="container_cv">
        <div className="header">
          <div className="heading">Collector list</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input type="text" id="name" placeholder="Search" />
            <AiIcons.AiOutlineSearch
              style={{
                backgroundColor: "#1091F4FF",
                height: "40px",
                width: "42px",
                color: "white",
              }}
            />
          </div>
          <div className="page-number">
            <div> &lt; </div>
            <div style={{ backgroundColor: color }}>1</div>
            <div>2</div>
            <div>..</div>
            <div>10</div>
            <div>11</div>
            <div> &gt; </div>
          </div>
        </div>
        <div className="table">
          <table className="content-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Vehicle</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {CollectorList.map((element, index) => {
                return (
                  <tr className={`row${index}`}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>{element.vehicle}</div>

                      <button className="button1">
                        Vehicle
                        <AiIcons.AiFillCaretDown
                          size={10}
                        ></AiIcons.AiFillCaretDown>
                      </button>
                      <button
                        className={
                          element.available === "no"
                            ? "button2_disable"
                            : "button2"
                        }
                      >
                        {element.assign === "no" ? "UNASSIGN" : "ASSIGN"}
                      </button>
                    </td>
                    <td>
                      <RiIcons.RiDeleteBin5Fill
                        size={20}
                      ></RiIcons.RiDeleteBin5Fill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container_cv">
        <div className="header">
          <div className="heading">Vehicle list</div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input type="text" id="name" placeholder="Search" />
            <AiIcons.AiOutlineSearch
              style={{
                backgroundColor: "#1091F4FF",
                height: "40px",
                width: "42px",
                color: "white",
              }}
            />
          </div>
          <div className="page-number">
            <div> &lt; </div>
            <div style={{ backgroundColor: color }}>1</div>
            <div>2</div>
            <div>..</div>
            <div>10</div>
            <div>11</div>
            <div> &gt; </div>
          </div>
        </div>
        <div className="table">
          <table className="content-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Plate</th>
                <th>Capacity(Ton)</th>
                <th>Collector</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {VehicleList.map((element, index) => {
                return (
                  <tr className={`row${index}`}>
                    <td>{element.id}</td>
                    <td>{element.plate}</td>
                    <td>{element.capicity}</td>
                    <td
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>{element.collector}</div>
                    </td>
                    <td>
                      <RiIcons.RiDeleteBin5Fill
                        size={20}
                      ></RiIcons.RiDeleteBin5Fill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CollectorVehicles;
