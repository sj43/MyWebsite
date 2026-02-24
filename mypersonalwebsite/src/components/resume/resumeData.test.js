// resumeData exports as default ES module
import resumeData from './resumeData';

describe('resumeData integrity', () => {
  test('has required top-level fields', () => {
    expect(resumeData.name).toBeTruthy();
    expect(typeof resumeData.name).toBe('string');
    expect(resumeData.role).toBeTruthy();
    expect(resumeData.email).toBeTruthy();
    expect(resumeData.imagebaseurl).toBeTruthy();
  });

  test('imagebaseurl does not point to localhost', () => {
    expect(resumeData.imagebaseurl).not.toContain('localhost');
  });

  test('does not expose phone number', () => {
    expect(resumeData.phone).toBeUndefined();
  });

  test('education is an object with required fields', () => {
    expect(resumeData.education).toBeTruthy();
    expect(typeof resumeData.education).toBe('object');
    expect(resumeData.education.school).toBeTruthy();
    expect(resumeData.education.major).toBeTruthy();
  });

  test('experience is an array with at least one entry', () => {
    expect(Array.isArray(resumeData.experience)).toBe(true);
    expect(resumeData.experience.length).toBeGreaterThan(0);
  });

  test('each experience entry has required fields', () => {
    resumeData.experience.forEach(ex => {
      expect(ex.organization).toBeTruthy();
      expect(Array.isArray(ex.description)).toBe(true);
    });
  });

  test('skills data is structured correctly', () => {
    if (resumeData.skills) {
      expect(typeof resumeData.skills).toBe('object');
      const hasAtLeastOneCategory = Object.values(resumeData.skills).some(
        arr => Array.isArray(arr) && arr.length > 0
      );
      expect(hasAtLeastOneCategory).toBe(true);
    }
  });

  test('achievements is an array if present', () => {
    if (resumeData.achievements) {
      expect(Array.isArray(resumeData.achievements)).toBe(true);
      resumeData.achievements.forEach(a => {
        expect(a.title).toBeTruthy();
        expect(a.description).toBeTruthy();
      });
    }
  });
});
