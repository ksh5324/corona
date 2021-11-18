import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import korea from "../../img/south-korea.png";
import earth from "../../img/free-icon-world-761505.png";
import a from "../../img/premium-icon-allergy-shots-2248420.png";
import people from "../../img/premium-icon-distance-2775699.png";
import I from "../Info/i";
import { Link } from "react-router-dom";

const TabPanel = React.memo((props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "300px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          borderRight: 0,
          width: "250px",
          boxShadow: "0 0 3px 0px #666",
          borderRadius: "4px",
          height: "280px",
          marginTop: "20px",
        }}
      >
        <Tab
          label={
            <div>
              <Link to="/" className="link-deco">
                <div style={{ display: "flex" }}>
                  <img
                    src={korea}
                    width="10%"
                    style={{ marginRight: "10px" }}
                  />
                  국내
                </div>
              </Link>
            </div>
          }
          {...a11yProps(0)}
          sx={{ fontSize: "17px", height: "60px" }}
        />
        <Tab
          label={
            <div>
              <Link to="/earth" className="link-deco">
                <div style={{ display: "flex" }}>
                  <img
                    src={earth}
                    width="10%"
                    style={{ marginRight: "10px" }}
                  />
                  세계
                </div>
              </Link>
            </div>
          }
          {...a11yProps(1)}
          sx={{ fontSize: "17px", height: "70px" }}
        />
        <Tab
          label={
            <div>
              <Link to="/a" className="link-deco">
                <div style={{ display: "flex" }}>
                  <img src={a} width="10%" style={{ marginRight: "10px" }} />
                  백신
                </div>
              </Link>
            </div>
          }
          {...a11yProps(2)}
          sx={{ fontSize: "17px", height: "70px" }}
        />
        <Tab
          label={
            <div>
              <Link to="/people" className="link-deco">
                <div style={{ display: "flex" }}>
                  <img
                    src={people}
                    width="10%"
                    style={{ marginRight: "10px" }}
                  />
                  거리두기
                </div>
              </Link>
            </div>
          }
          {...a11yProps(3)}
          sx={{ fontSize: "17px", height: "70px" }}
        />
      </Tabs>
    </Box>
  );
}
