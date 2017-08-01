import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = ({ photos, onClick }) => (
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
                        <a onClick={() => onClick(photo)} style={{ cursor: 'pointer' }}>
                            <Thumbnail
                                src={photo.image_url}
                            />
                        </a>
                    </div>
                )
            })
        }
    </div>
);

Thumbnails.propTypes = {
    photos: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Thumbnails;
