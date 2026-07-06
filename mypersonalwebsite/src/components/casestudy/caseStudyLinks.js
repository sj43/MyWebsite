import caseStudies from './caseStudyData';

const caseStudiesBySlug = new Map(caseStudies.map(caseStudy => [caseStudy.slug, caseStudy]));

const legacyProjectNameToSlug = new Map(
  caseStudies.flatMap(caseStudy => {
    const shortName = caseStudy.name.split(' — ')[0].split(' · ')[0].trim();
    return shortName === caseStudy.name
      ? [[caseStudy.name, caseStudy.slug]]
      : [[caseStudy.name, caseStudy.slug], [shortName, caseStudy.slug]];
  })
);

export function getCaseStudyBySlug(slug) {
  return caseStudiesBySlug.get(slug) || null;
}

export function getCaseStudySlugForProject(project) {
  if (project.caseStudySlug) return project.caseStudySlug;
  if (legacyProjectNameToSlug.has(project.name)) return legacyProjectNameToSlug.get(project.name);

  const slugMatch = caseStudies.find(caseStudy => project.name.toLowerCase().includes(caseStudy.slug));
  return slugMatch?.slug || null;
}

export function getCaseStudySlugForExperience(experience) {
  if (experience.caseStudySlug) return experience.caseStudySlug;
  return legacyProjectNameToSlug.get(experience.organization) || null;
}

export function getRelatedCaseStudies(slug, limit = 2) {
  return caseStudies.filter(caseStudy => caseStudy.slug !== slug).slice(0, limit);
}