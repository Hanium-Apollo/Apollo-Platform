import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";

function Wait() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")}>
      Go to Home
    </Button>
  );
}

export default Wait;
