import React from 'react';

export const withHooks = (hooks) => (WrappedComponent) => {

    return (props) => {
        const hookProps = hooks(props);

        return (
            <WrappedComponent
                {...props}
                {...hookProps}
            />
        );
    }
};
