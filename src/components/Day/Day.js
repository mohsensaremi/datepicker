import React from 'react';
import classnames from 'classnames';

const Day = (props) => {

    const {
        date,
        disabled,
        isToday,
        isActive,
        isPast,
        isHover,
        onClick,
        onMouseEnter,
        text,
    } = props;

    return (
        <button
            className={classnames("button", "day-root", {
                "day-root-today": isToday,
                "day-root-active": !disabled && isActive,
                "day-root-past": isPast,
                "day-root-hover": !disabled && isHover,
            })}
            disabled={disabled}
            onClick={() => onClick(date)}
            onMouseEnter={() => onMouseEnter ? onMouseEnter(date) : null}
        >
            {text}
        </button>
    );
};

export default Day;
