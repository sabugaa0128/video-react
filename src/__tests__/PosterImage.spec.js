import React from 'react';
import { shallow } from 'enzyme';
import { PosterImage } from '../';

describe('PosterImage', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false,
        }}
      />
    );

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "poster" class', () => {
    const wrapper = shallow(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false,
        }}
      />
    );
    expect(wrapper.hasClass('poster')).toBe(true);
  });
});
