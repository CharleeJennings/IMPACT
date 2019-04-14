
import Login from '../src/shared/components/Login'
import renderer from 'react-test-renderer';
import React from 'react';
const request = require('supertest');
const express = require('express');


const app = express();

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Login/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});
