import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudyButton({ slug, children = 'Case Study →' }) {
  const navigate = useNavigate();
  if (!slug) return null;

  return (
    <button
      className="cs-card-btn"
      onClick={() => navigate(`/project/${slug}`)}
    >
      {children}
    </button>
  );
}