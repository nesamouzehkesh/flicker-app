import React from 'react';

const Thumbnail = ({ src }) => (
        <img src={src} />
);

Thumbnail.propTypes = {
    src: React.PropTypes.string.isRequired,
};

export default Thumbnail;