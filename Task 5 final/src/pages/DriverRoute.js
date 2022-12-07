import React from "react";
import NavBar from "../components/NavBar";
import "./CollectorVehicles.css";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
const DriverList = [
  {
    id: "D1",
    name: "Janne Cooper",
    email: "jannecooper@company.com",
    route: "R1",
    available: "no",
  },
  {
    id: "D2",
    name: "Cody Fisher",
    email: "codyfisher@company.com",
    route: "NULL",
  },
  {
    id: "D3",
    name: "Ether Howard",
    email: "etherhoward@company.com",
    route: "NULL",
  },
  {
    id: "D4",
    name: "Helena Smith",
    email: "helenasmith@company.com",
    route: "R3",
  },
];
const RouteList = [
  {
    id: "R1",
    route: "M001 -> M007 -> M009",
    length: 12,
    time: "30:56",
    driver: "D1",
  },
  {
    id: "R2",
    route: "M005 -> M008 -> M012",
    length: 14,
    time: "30:56",
    driver: "D2",
  },
  {
    id: "R3",
    route: "M003 -> M014 -> M016",
    length: 10,
    time: "27:38",
    driver: "NULL",
  },
  {
    id: "R4",
    route: "M003 -> M014 -> M011 -> M004",
    length: 8,
    time: "36:20",
    driver: "NULL",
    assign: "no",
  },
];

const DriverRoute = () => {
  let color = "#4069e5ff";

  return (
    <div>
      <NavBar></NavBar>
      <div className="container_cv">
        <div className="header">
          <div className="heading">Driver list</div>
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
                <th>Route</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {DriverList.map((element, index) => {
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
                      <div>{element.route}</div>

                      <button className="button1">
                        Route
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
          <div className="heading">Route list</div>

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
                <th>Route</th>
                <th>Length(KM)</th>
                <th>Time</th>
                <th>Driver</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {RouteList.map((element, index) => {
                return (
                  <tr className={`row${index}`}>
                    <td>{element.id}</td>
                    <td>{element.route}</td>
                    <td>{element.length}</td>
                    <td>{element.time}</td>
                    <td>{element.driver}</td>

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

export default DriverRoute;
