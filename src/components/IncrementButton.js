import React, {PropTypes} from 'react';

const IncrementButton = ({
    onClick
}) => (
    <div className="increment-button button"
         onClick={onClick}>
        +
    </div>
);

IncrementButton.propTypes = {
    onClick: PropTypes.func
};

IncrementButton.defaultProps = {
    onClick: () => {}
};

export default IncrementButton;
