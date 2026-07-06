export const SECTION_IDS = Object.freeze({
  experience: 'resume',
  projects: 'portfolio',
  achievements: 'achievements',
  education: 'education',
  contact: 'contact',
});

export const NAV_ITEMS = Object.freeze([
  { id: SECTION_IDS.experience, label: 'Experience' },
  { id: SECTION_IDS.projects, label: 'Projects' },
  { id: SECTION_IDS.achievements, label: 'Achievements' },
  { id: SECTION_IDS.education, label: 'Education' },
  { id: SECTION_IDS.contact, label: 'Get In Touch' },
]);

export const DEFAULT_SECTION_ID = SECTION_IDS.experience;

export function getSectionIds() {
  return NAV_ITEMS.map(section => section.id);
}

export function getSectionHash(id) {
  return `#${id}`;
}

export function getSectionPath(id) {
  return `/${getSectionHash(id)}`;
}