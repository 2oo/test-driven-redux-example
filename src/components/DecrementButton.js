import React, {PropTypes} from 'react';

const DecrementButton = ({
    onClick
}) => (
    <div className="decrement-button button"
         onClick={onClick}>
        -
    </div>
);

DecrementButton.propTypes = {
    onClick: PropTypes.func
};

DecrementButton.defaultProps = {
    onClick: () => {}
};

export default DecrementButton;
