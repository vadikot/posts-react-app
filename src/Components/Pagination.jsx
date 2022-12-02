import React, {useMemo} from "react";
import MyButton from "../UI/Button/MyButton";
import {getPageArr} from "../utils/pages";

const Pagination = ({totalCount, page, setPage}) => {
    const pageArr = useMemo(() => getPageArr(totalCount), [totalCount]);

    return (
        <div className={'page__wrap'}>
            {
                pageArr.map(value => <MyButton
                    onClick={() => setPage(value)}
                    extraClass={(page === value) ? 'current' : ''}
                    key={value}
                >{value}</MyButton>)
            }
        </div>
    );
};

export default Pagination;