import React from 'react';
import SearchForm from './SearchForm';
import Thumbnails from './Thumbnails';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            photos: []
        };

        this.search = this.search.bind(this);
    };

    search(query) {
        const apiUrl = `https://api.500px.com/v1/photos/search?consumer_key=8hG9yijCS5ZyJy7DpFtSZu1QsVkIoqqMQF7NcBtz&term=${query}`;

        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({ photos: json.photos })
            })
            .catch(error => {
                console.error(error)
            });
    };

    render() {
        const { photos } = this.state;

        return (
          <div>
            <div
                style={{
                    marginBottom: '20px'
                }}
            >
                <SearchForm onSearch={this.search}/>
            </div>
            <Thumbnails photos={photos}/>
          </div>
        );
    }
}
export default Search;