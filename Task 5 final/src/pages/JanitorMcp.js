import React from "react";
import NavBar from "../components/NavBar";
import "./CollectorVehicles.css";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";
import ProgressBar from "@ramonak/react-progress-bar";

const JanitorList = [
  {
    id: "J1",
    name: "Janne Cooper",
    email: "jannecooper@company.com",
    mcp: "M1",
    available: "no",
  },
  {
    id: "CC02",
    name: "Cody Fisher",
    email: "codyfisher@company.com",
    mcp: "NULL",
  },
  {
    id: "CC03",
    name: "Ether Howard",
    email: "etherhoward@company.com",
    mcp: "NULL",
  },
  {
    id: "CC04",
    name: "Helena Smith",
    email: "helenasmith@company.com",
    mcp: "NULL",
    assign: "no",
  },
];
const mcpList = [
  {
    id: "M1",
    location: "756 Dien Bien Phu P4 Q3",
    capicity: 80,
    janitor: "C001",
    route: "R1",
    color: "#E05858FF",
  },
  {
    id: "M2",
    location: "458 To Hien Thanh P14 Q10",
    capicity: 40,
    janitor: "C002",
    route: "NULL",
    color: "#52B87EFF",
  },
  {
    id: "M3",
    location: "315 Truong Chinh P9 Q.Tan Phu",
    capicity: 20,
    janitor: "C003",
    route: "NULL",
    color: "#52B87EFF",
  },
  {
    id: "M4",
    location: "215 Tran Hung Dao P.Cau Kho Q1",
    capicity: 60,
    janitor: "C004",
    route: "R1",
    color: "#ED7D2DFF",
  },
];

const JanitorMCP = () => {
  let color = "#4069e5ff";

  return (
    <div>
      <NavBar></NavBar>
      <div className="container_cv">
        <div className="header">
          <div className="heading">Janitor list</div>
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
                <th>MCP</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {JanitorList.map((element, index) => {
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
                      <div>{element.mcp}</div>

                      <button className="button1">
                        MCP
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
          <div className="heading">Mcp list</div>

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
                <th></th>
                <th>ID</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Janitor</th>
                <th>Route</th>
                <th>
                  <AiIcons.AiOutlinePlus></AiIcons.AiOutlinePlus>
                </th>
              </tr>
            </thead>
            <tbody>
              {mcpList.map((element, index) => {
                return (
                  <tr className={`row${index}`}>
                    <td>
                      <input type="checkbox" style={{ width: "20px" }}></input>
                    </td>
                    <td>{element.id}</td>
                    <td>{element.location}</td>
                    <td>
                      <ProgressBar
                        completed={`${element.capicity}`}
                        bgColor={`${element.color}`}
                      ></ProgressBar>
                    </td>
                    <td>{element.janitor}</td>
                    <td>{element.route}</td>
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
      <div style={{ textAlign: "right", marginRight: "20px" }}>
        <button className="final_button">Create Route</button>
      </div>
    </div>
  );
};

export default JanitorMCP;
