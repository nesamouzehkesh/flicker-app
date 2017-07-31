import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import SearchForm from '../SearchForm';
import fetchMock from 'fetch-mock';
require('isomorphic-fetch');
import { MOCK_500PX_PHOTOS_RESPONSE } from '../../tests/mocks';


test('Search renders correctly', () => {
    const component = shallow(
        <Search />
    );
    const tree = component.getNode();
    expect(tree).toMatchSanpshot();
});

test('Search searches correctly', (done) => {
    fetchMock.get('https://api.500px.com/v1/photos/search?consumer_key=8hG9yijCS5ZyJy7DpFtSZu1QsVkIoqqMQF7NcBtz&term=test',
        MOCK_500PX_PHOTOS_RESPONSE);

    const component = shallow(
        <Search/>
    );

    const searchForm = component.find(SearchForm);
    searchForm.prop('onSearch')('test');

    setTimeout(() => {
        const tree = component.getNode();
        expect(tree).toMatchSnapshot();

        expect(fetchMock.calls.length).toBe(1);

        done();
    }, 0);
});