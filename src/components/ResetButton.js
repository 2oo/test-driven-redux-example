import React, {PropTypes} from 'react';

const ResetButton = ({
    onClick
}) => (
    <div className="reset-button button"
         onClick={onClick}>
        Reset
    </div>
);

ResetButton.propTypes = {
    onClick: PropTypes.func
};

ResetButton.defaultProps = {
    onClick: () => {}
};

export default ResetButton;
