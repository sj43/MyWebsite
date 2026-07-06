import React from 'react';

export default function TimelineItem({ children, reveal = false, className = '' }) {
  const classes = [
    'timeline-item',
    reveal ? 'reveal' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="timeline-dot" />
      {children}
    </div>
  );
}