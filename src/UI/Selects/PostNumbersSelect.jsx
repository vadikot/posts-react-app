import React from "react";

const PostNumbersSelect = ({options, defaultName, limit, setLimit}) => {

    return (
        <select
            value={limit}
            onChange={e => setLimit(e.target.value)}
        >
            <option disabled value=''>{defaultName}</option>
            {
                options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)
            }
        </select>
    );
}

export default PostNumbersSelect;