import {
  getCaseStudyBySlug,
  getCaseStudySlugForExperience,
  getCaseStudySlugForProject,
  getRelatedCaseStudies,
} from './caseStudyLinks';

describe('caseStudyLinks', () => {
  test('looks up case studies by explicit slug', () => {
    expect(getCaseStudyBySlug('microsoft')?.name).toMatch(/Microsoft/);
    expect(getCaseStudyBySlug('missing')).toBeNull();
  });

  test('uses explicit project caseStudySlug before fallback heuristics', () => {
    expect(getCaseStudySlugForProject({ name: 'Display name can change', caseStudySlug: 'menu' })).toBe('menu');
  });

  test('uses explicit experience caseStudySlug before fallback heuristics', () => {
    expect(getCaseStudySlugForExperience({ organization: 'Any org', caseStudySlug: 'expedia' })).toBe('expedia');
  });

  test('returns related studies excluding the current slug', () => {
    const related = getRelatedCaseStudies('microsoft', 2);

    expect(related).toHaveLength(2);
    expect(related.every(caseStudy => caseStudy.slug !== 'microsoft')).toBe(true);
  });
});