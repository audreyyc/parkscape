import React from "react";

const Filter = ({ filterId, data, setFilter }) => {
  return (
    <select
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      defaultValue={"0"}
      id={filterId}
      data-testid="select"
      onChange={() => {
        var e = document.getElementById(filterId);
        if (e.value == 0) {
          setFilter(null);
        } else {
          setFilter(e.options[e.selectedIndex].text);
        }
      }}
    >
      {data.map((option, index) => (
        <option data-testid="option" value={index} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;
