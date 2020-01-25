import Model from '../Model';

describe('Model', () => {
  let mockData = {};

  beforeEach(() => {
    mockData = {
      id: 45,
      name: 'is a name',
      summary: 'summary show',
      image: {
        original: '/link/original',
        medium: '/link/medium'
      },
      other: 'ís other'
    };
  });
  it('should instantiate', () => {
    const model = new Model(mockData);
    expect(model).toMatchSnapshot();
  });

  it('should get work', () => {
    const model = new Model(mockData);
    expect(model.get('other')).toBe(mockData.other);
  });

  it('should getter works', () => {
    const model = new Model(mockData);
    expect(model.getId()).toBe(mockData.id);
    expect(model.getSummary()).toBe(mockData.summary);
    expect(model.getImage('medium')).toBe(mockData.image.medium);
    expect(model.getImage()).toBe(mockData.image.original);
    expect(model.getName()).toBe(mockData.name);
  });
});
