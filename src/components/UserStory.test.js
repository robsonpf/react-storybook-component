import React from 'react'
// import ReactDOM from 'react-dom'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import People from './UserStory'


describe('UserStory', () => {
  it('clicks both buttons', () => {
    const updateStatus = jest.fn();
    const component = shallow(<UserStory updateStatus={updateStatus}/>);
    component.find('.deliver').simulate('click');
    expect(updateStatus.mock.calls.toEqual([['delivered']]);
  });
  it('clicks finish button', () => {
    const updateStatus = jest.fn();

    const component = shallow(<UserStory updateStatus={updateStatus}/>);
    component.find('.finish').toEqual([['finished']]);
  });
});
