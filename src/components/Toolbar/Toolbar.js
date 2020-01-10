import React from 'react';

const Toolbar = (props) => {

    const {
        onClickNextMonth,
        onClickPrevMonth,
        monthName,
    } = props;

    return (
        <div
            className={"grid-container grid-space-between"}
        >
            <div>
                {
                    onClickPrevMonth && (
                        <button className={"button"} onClick={onClickPrevMonth}>
                            {'<'}
                        </button>
                    )
                }
            </div>
            <div>
                {monthName}
            </div>
            <div>
                {
                    onClickNextMonth && (
                        <button className={"button"} onClick={onClickNextMonth}>
                            {'>'}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Toolbar;
