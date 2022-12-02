import {  render, fireEvent } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import InfoAboutMe from './info-about-me';

describe('InfoAboutMe', () => {
  it('should render successfully',  () => {
    const { baseElement } = render(<InfoAboutMe token={''} />);

    const bio_title =  baseElement.querySelector('#bio_title') as HTMLInputElement;
     fireEvent.input(bio_title, { target: { defaultValue: '2' } });

    const bio =  baseElement.querySelector('#bio') as HTMLInputElement;
     fireEvent.input(bio, { target: { defaultValue: '1' } });

    const hero_title =  baseElement.querySelector('#hero_title') as HTMLInputElement;
     fireEvent.input(hero_title, { target: { defaultValue: '3' } });

    const hero_image =  baseElement.querySelector('#hero_image') as HTMLInputElement;
     fireEvent.input(hero_image, { target: { defaultValue: '4' } });

    expect(bio.defaultValue).toEqual('1');
    expect(bio_title.defaultValue).toEqual('2');
    expect(hero_title.defaultValue).toEqual('3');
    expect(hero_image.defaultValue).toEqual('4');
  });
});
