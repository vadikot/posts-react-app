import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/Selects/MySelect";
import PostNumbersSelect from "../UI/Selects/PostNumbersSelect";

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    const selectOptions = [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By description'},
    ];

    const postNumbers = [
        {value: 5, name: 5},
        {value: 10, name: 10},
        {value: 20, name: 20},
    ];

    return (
        <div className='filter__wrap'>
            <MySelect
                options={selectOptions}
                defaultName={'Sorting by'}
                filter={filter}
                setFilter={setFilter}

            />
            <PostNumbersSelect
                options={postNumbers}
                defaultName={'Post numbers'}
                limit={limit}
                setLimit={setLimit}

            />
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Search on page'}
            />
        </div>
    );
};

export default PostFilter;