import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { links } from "../../data";

const Login = () => {
  const linksCount = 0;

  const [lsLinks, setLsLinks] = useState({});

  const getDataFromLocalStorage = () => {
    const getLinks = localStorage.getItem("links-count");
    if (getLinks) {
      setLsLinks(JSON.parse(getLinks));
    }
  };

  useEffect(() => {
    setInterval(() => {
      getDataFromLocalStorage();
    }, 5000);
  }, []);
  return (
    <div className="update">
      <div>
        {links.map((link, index) => (
          <a className="update__link" href={link} target="_blank">
            Link {index + 1} : {link}
          </a>
        ))}
      </div>

      <div>
        {Object.keys(lsLinks).length > 0
          ? Object.keys(lsLinks).map((key) => (
              <div>
                {key} : {lsLinks[key]}
              </div>
            ))
          : "Loading.."}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
