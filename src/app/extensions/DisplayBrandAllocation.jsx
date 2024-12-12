// File: src/app/extensions/DisplayBrandAllocation.jsx
'use strict';

const { Button } = require('@hubspot/ui-extensions');
const React = require('react');

exports.extension = ({ actions }) => {
  return React.createElement(Button, null, "Allocate Brands");
};
