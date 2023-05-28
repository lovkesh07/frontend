import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Link } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1rem" }}
        style={{ color: "white" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const [List1, setList1] = useState([
    {
      title: "Services",
      module: [
        {
          name: "Digital Experience"
        },
        {
          name: "Product Engineering",
        },
        {
          name: "Cloud Engineering",
        },
        {
          name: "NextGen Services",
        },
      ],
    },

    {
      title: "Platform & Product",
      module: [
        {
          name: "Kellton4Health",
        },
        {
          name: "KLGAME",
        },
        {
          name: "tHRive",
        },
        {
          name: "Kellton$NFT",
        },
      ],
    },
    {
      title: "About Us",
      module: [
        {
          name: "Our Partners",
        },
        {
          name: "Testimonials",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Investors",
        },
        {
          name: "Privacy-Policy",
        }
      ],
    },
  ]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className="bg-[rgba(16,44,81,255)]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(16,44,81,255)",
      }}
    >
      {List1.map((item, index) => (
        <Accordion
          className=" text-xs w-full"
          style={{ backgroundColor: "rgba(16,44,81,255)", color: "white" }}
          expanded={expanded === "panel" + (index + 1)}
          onChange={handleChange("panel" + (index + 1))}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className=" w-full ">
              <h1 className=" w-full text-xs text-center">{item.title}</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "white", color: "rgba(16,44,81,255)" }}
          >
            {item.module?.map((info, i) => {
              return (
                <li key={i} className=" w-full px-2 py-3 border-b-[1px] border-solid border-black">
                  <div>{info.name}</div>
                </li>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
