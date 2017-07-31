import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../Thumbnail';


test('Thumbnail renders an img tag with the correct src', () => {
    const component = renderer.create(
      <Thumbnail src='http://test.com/test.json'/>
    );
    const tree = component.toJSON();

    //you will see the structure of the obj that renderer creates
    console.log(tree);

    //this is for a simple tests
    //expect(tree.props.src).toBe('http://test.com/test.jpg');

    //snapshot testing:
    expect(tree).to.matchSnapshot();

});