import { Part } from './part';

describe('Part', () => {
  it('should create an instance', () => {
    expect(new Part()).toBeTruthy();
  });
});

  it('should accept values in the constructor', () => {
    let part = new Part({
      name: 'newPart',
      description: 'newDescription'
    });
    expect(part.name).toEqual('newPart');
    expect(part.description).toEqual('newDescription');
  });
});
