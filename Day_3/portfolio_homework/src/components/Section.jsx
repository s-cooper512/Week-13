// src/components/Section.jsx

import React from 'react';

function Section({ id, children }) {
  return (
    <section id={id}>
      {children}
    </section>
  );
}

export default Section;
