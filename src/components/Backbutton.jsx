// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="ghost" 
      className="mb-1 text-sm" 
      onClick={() => navigate(-1)}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      {/* <span>Back</span> */}
    </Button>
  );
};

export default BackButton;