import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from '../SearchForm';
import { mount } from 'enzyme';
import { stub } from 'sinon';

test('SearchForm renders correctly', () => {
    const component = renderer.create(
        <SearchForm onSearch={() => {
        }}/>
    );
    const tree = component.toJSON;
    expect(tree).toMatchSanpshot();
});

test('SearchForm calls onSearch with the contents of the input when the form is submitted',
    () => {

        /*now we need to make sure that our onSearch method has actually been called
         to do this we will use a library named Sinon which provides us with
         stub functions which help us keep track of when something has been
         called and with what arguments */
        const onSearchStub = stub();
        const component = mount(
          <SearchForm onSearch={onSearchStub}/>
        );

        //these two lines will simulate filling in our input element
        //and then clicking on the button
        component.find('input').simulate('change', { target: {value: 'Test'}});
        component.find('button').get(0).click();

        //onSearch should only be called once
        expect(onSearchStub.callCount).toBe(1);

        //has onSearch been called with correct argument? In this case 'Test'
        expect(onSearchStub.calledWith('Test')).toBe(true);

});