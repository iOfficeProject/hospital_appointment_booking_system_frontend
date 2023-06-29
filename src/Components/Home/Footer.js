// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div
//       className=" row text-light bg-dark p-2"
//       style={{ maxWidth: "100%", margin: "auto" }}
//     >
//       <div className="col-12 col-md-6 w-100">
//         <h4 className="white-text">Contact Us</h4>
//         <p className="grey-text">ABC 5078, Mumbai, India</p>
//         <p className="grey-text">+919307531964</p>
//       </div>

//       <div className="col-12 col-md-6 w-100">
//         <h4 className="white-text">Social Media</h4>
//         <ul>
//           <li>
//             <Link to="#!" className="grey-text">
//               {" "}
//               Facebook
//             </Link>
//           </li>
//           <li>
//             <Link to="#!" className="grey-text">
//               {" "}
//               Instagram
//             </Link>
//           </li>
//           <li>
//             <Link to="#!" className="grey-text">
//               {" "}
//               Twitter
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div>

//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>
              Hospital Management System<br />
              Country, Postal Code<br />
              Phone: xxx-xxx-xxxx<br />
              Email: info@example.com
            </p>
          </div>
          <div className="col-md-6">
            <h4>Social</h4>
            <p>
              Facebook<br />
              Twitter<br />
              LinkedIn<br />
              Youtube<br />
              Github
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


