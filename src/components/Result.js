import React, {PropTypes} from 'react';

const Result = ({
    value
}) => (
    <div className="result">
        {value}
    </div>
);

Result.propTypes = {
    value: PropTypes.number.isRequired
};

export default Result;
