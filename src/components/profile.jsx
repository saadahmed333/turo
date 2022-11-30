import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCar,
  faKey,
  faHeadphones,
  faLegal,
  faTools,
  faCalculator,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import { Dropdown, Menu, Space } from 'antd';
import "./header.css";

import Dropdown from "react-bootstrap/Dropdown";

function Profile() {
  return (
    <Dropdown className="dropdowns">
      <Dropdown.Toggle
        variant="success"
        className="options"
        id="dropdown-basic"
      >
        <FontAwesomeIcon icon={faBars} className="logos" />
        <FontAwesomeIcon icon={faUser} className="logos" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu">
        <Dropdown.Item href="#/action-1" className="items">Login</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="items">SignUp</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="becomeHr items">
        <FontAwesomeIcon icon={faCar} className="logos" />
            Become a host</Dropdown.Item>
        <Dropdown.Item href="#/action-4" className="items">
        <FontAwesomeIcon icon={faKey} className="logos" />
            How Turo Works</Dropdown.Item>
        <Dropdown.Item href="#/action-5" className="items">
        <FontAwesomeIcon icon={faHeadphones} className="logos" />
            Contact supports</Dropdown.Item>
        <Dropdown.Item href="#/action-6" className="items">
        <FontAwesomeIcon icon={faLegal} className="logos" />
            Legals</Dropdown.Item>
        <Dropdown.Item href="#/action-7" className="items">
        <FontAwesomeIcon icon={faPortrait} className="logos" />
            Insurance & protection</Dropdown.Item>
        <Dropdown.Item href="#/action-8" className="items">
          <FontAwesomeIcon icon={faTools} className="logos" />
          Host tools
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { Profile };

// const menu = (
//   <Menu
//   className="menu"
//     items={[
//       {
//         key: '1',
//         label: (
//           <a className="items" target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//             Login
//           </a>
//         ),
//       },
//       {
//         key: '2',
//         label: (
//           <a className="items" target="_blank" rel="noopener noreferrer">
//             SignUp
//           </a>
//         ),
//         // icon: <SmileOutlined />,
//         // disabled: true,
//       },
//       {
//         key: '3',
//         label: (
//           <a className="items becomeHr" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faCar} className="logos" />
//             Become a host
//           </a>
//         ),
//         // disabled: true,
//       },
//       {
//         key: '4',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//              <FontAwesomeIcon icon={faKey} className="logos" />
//             How Turo Works
//         </a>
//         )
//       },
//       {
//         key: '5',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faHeadphones} className="logos" />
//             Contact supports
//         </a>
//         )
//       },
//       {
//         key: '6',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faLegal} className="logos" />
//             Legal
//         </a>
//         )
//       },
//       {
//         key: '7',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faPortrait} className="logos" />
//             Insurance & protection
//         </a>
//         )
//       },
//       {
//         key: '8',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faTools} className="logos" />
//             Host tools
//         </a>
//         )
//       },
//       {
//         key: '8',
//         label: (
//         <a className="items" target="_blank" rel="noopener noreferrer">
//             <FontAwesomeIcon icon={faCalculator} className="logos" />
//             Carculator
//         </a>
//         )
//       },
//     ]}
//   />
// );
// const Profile = () => (
//   <Dropdown overlay={menu} >
//     <a onClick={(e) => e.preventDefault()}>
//       <Space>
//          <FontAwesomeIcon icon={faBars} className="logos" />
//         <FontAwesomeIcon icon={faUser} className="logos" />
//         {/* <DownOutlined /> */}
//       </Space>
//     </a>
//   </Dropdown>
// );
// export { Profile };

// function Profile() {
//     return (
//       {/* <FontAwesomeIcon icon={faBars} />
// <FontAwesomeIcon icon={faUser} /> */}

//     )
// }

// export {Profile}
