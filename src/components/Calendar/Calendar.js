import React from 'react';
import Month from '../../containers/Month';
import Toolbar from '../../containers/Toolbar';

const Calendar = (props) => {

    const {
        value,
        onChange,
        onClickNextMonth,
        onClickPrevMonth,
        monthData,
        DayComponent,
        onMouseEnterDay,
        onMouseOutDay,
        hoverDate,
    } = props;


    return (
        <div className={"grid-container"}>
            {
                monthData.map((data, index) => {
                    return (
                        <div className={"calendar-month"} key={index}>
                            <Toolbar
                                date={data.date}
                                onClickPrevMonth={index === 0 && onClickPrevMonth}
                                onClickNextMonth={index === monthData.length - 1 && onClickNextMonth}
                            />
                            <Month
                                date={data.date}
                                value={value}
                                onChange={onChange}
                                DayComponent={DayComponent}
                                onMouseEnterDay={onMouseEnterDay}
                                onMouseOutDay={onMouseOutDay}
                                hoverDate={hoverDate}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Calendar;
