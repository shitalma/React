import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import TransportationComponent from '../../../src/client/app/TransportationComponent.jsx';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<TransportationComponent />);
});

describe('<TransportationComponent/>', () => {
    it('should have titles', () => {
        expect(wrapper.find('h2').text()).to.equal('Welcome to React Transportation');
        expect(wrapper.find('p').text()).to.equal('The best place to buy vehicles online');
    });


});