import React from 'react';

const Month = (props) => {

    const {
        value,
        onChange,
        weekArray,
        dayIsDisabled,
        DayComponent,
        onMouseEnterDay,
        onMouseOutDay,
        hoverDate,
    } = props;

    return (
        <div className={"month-root"}>
            {
                weekArray.map((week, index1) => {

                    return (
                        week.map((day, index2) => {

                            return (
                                <DayComponent
                                    key={`${index1}-${index2}`}
                                    date={day}
                                    disabled={dayIsDisabled(day)}
                                    value={value}
                                    onChange={onChange}
                                    onMouseEnter={onMouseEnterDay}
                                    onMouseOut={onMouseOutDay}
                                    hoverDate={hoverDate}
                                />
                            );
                        })
                    );
                })
            }
        </div>
    );
};

export default Month;
