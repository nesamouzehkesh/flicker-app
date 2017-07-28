import React from 'react';

const Thumbnails = ({ photos }) => (
    <div>
        {
            photos.map(photo => {
                return (
                    <div
                        key={photo.id}
                        style={{
                            float: 'left',
                            marginRight: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <img src={ photo.image_url }/>
                    </div>
                )
            })
        }
    </div>
);

Thumbnails.propTypes = {
    photos: React.PropTypes.array.isRequired
};

export default Thumbnails;
