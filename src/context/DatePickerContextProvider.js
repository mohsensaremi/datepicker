import React from 'react';
import {DatePickerContext} from './index';

class DatePickerContextProvider extends React.Component {
    state = {
        Adapter: this.props.adapter,
        adapter: new this.props.adapter(),
    };

    render() {

        return (
            <DatePickerContext.Provider value={this.state}>
                {this.props.children}
            </DatePickerContext.Provider>
        );
    }
}

export default DatePickerContextProvider;
