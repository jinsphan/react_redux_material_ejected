import React from "react";
import { bool, array } from "prop-types";
import { Paper } from "material-ui";

const List = props => {
  const ListCompoent = props.data.map(item => {
    return (
      <Paper key={item.match_number}>
        <p>Match number: {item.match_number}</p>
        <p>Location: {item.location}</p>
        <p>Time: {item.datetime}</p>
      </Paper>
    );
  });

  const ErrorCompoent = (
    <p className="text-warning">Error! Please try again!</p>
  );

  return (
    <div className="List">
      {props.apiFail ? ErrorCompoent : ListCompoent}
    </div>
  );
};

List.propTypes = {
  apiFail: bool.isRequired,
  data: array.isRequired,
};

export default List;
