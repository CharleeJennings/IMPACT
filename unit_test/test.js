
import Login from '../src/shared/components/Login'
import renderer from 'react-test-renderer';
import React from 'react';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Login/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});
