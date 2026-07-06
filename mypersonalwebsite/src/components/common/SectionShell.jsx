import React from 'react';

export default function SectionShell({ id, title, rowClassName = '', mainClassName = 'nine columns main-col', children }) {
  return (
    <section id={id}>
      <div className={`row${rowClassName ? ` ${rowClassName}` : ''}`}>
        <div className="three columns header-col">
          <h2><span>{title}</span></h2>
        </div>
        <div className={mainClassName}>
          {children}
        </div>
      </div>
    </section>
  );
}