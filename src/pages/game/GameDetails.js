import React from "react";
import { useHistory, useParams } from "react-router";
import Button from "@material-ui/core/Button";

const GameDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <>
      <h1>Game details with ID #{id}</h1>
      <Button
        onClick={() => history.goBack()}
        variant={"outlined"}
        color={"primary"}
      >
        Back
      </Button>
    </>
  );
};

export default GameDetails;
