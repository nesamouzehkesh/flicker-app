import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
          query: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.query);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="tex"
                        className="form-control"
                        id="search"
                        placeholder="Enter your search"
                        style={{ marginRight: '5px' }}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-default"
                >
                    Search
                </button>
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSearch : React.PropTypes.func.isRequired,
};

export default SearchForm;