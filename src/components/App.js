import React from 'react';
import Header from './Header';
import Search from './Search';
import PhotoModal from './PhotoModal';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
           modalVisible: false,
           activePhoto: null,
        };
    }

    handleShowPhoto = (photo) => {
        this.setState({
           modalVisible: true,
           activePhoto: photo,
        });
    }

    handleHideModal = () => {
        this.setState({
           modalVisible: false,
        });
    }

    render() {
        const { activePhoto, modalVisible } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <Search onShowPhoto={this.handleShowPhoto}/>
                </div>
                <PhotoModal
                    photo={activePhoto}
                    show={modalVisible}
                    onHide={this.handleHideModal}
                />
            </div>
        );
    }
}
export default App;

