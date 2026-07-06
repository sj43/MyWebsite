import React from 'react';

export default function SkillTags({ items, limit, className = 'timeline-tech', tagClassName = 'skill-badge' }) {
  if (!items?.length) return null;

  const visibleItems = typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <div className={className}>
      {visibleItems.map(item => (
        <span key={item} className={tagClassName}>{item}</span>
      ))}
    </div>
  );
}