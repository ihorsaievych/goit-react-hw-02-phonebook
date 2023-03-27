import React from 'react';
import PT from 'prop-types';
export default function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PT.string.isRequired,
  children: PT.node.isRequired,
};
