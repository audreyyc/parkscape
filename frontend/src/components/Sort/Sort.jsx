import React from "react";

const Sort = ({ setSort }) => {
    return (
        <select
            data-testid="sort"
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            defaultValue={"0"}
            id="sort"
            onChange={() => {
                var value = document.getElementById("sort").value;
                if (value == 0) {
                setSort(null);
                } else if (value == 1) {
                setSort("name_asc");
                } else {
                setSort("name_desc");
                }
            }}
            >
            <option value="0">Sort</option>
            <option value="1">Name (A-Z)</option>
            <option value="2">Name (Z-A)</option>
        </select>
    );
}

export default Sort;