import React from "react";

const MySelect = ({options, defaultName, filter, setFilter}) => {

    return (
        <select
            value={filter.sort}
            onChange={e => setFilter({...filter, sort: e.target.value})}
        >
            <option disabled value=''>{defaultName}</option>
            {
                options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)
            }
        </select>
    );
}

export default MySelect;