import React from 'react';
import { forecastData, mappedForecastData } from './fixtures/forecastdata.js';
import TodayForecast from '../src/js/components/TodayForecast';

describe('TodayForecast Component Shallow', () => {
  let wrapper;
  beforeEach(function () {
    wrapper = shallow(<TodayForecast
      unit="metric"
      todayData={mappedForecastData.days[0]}
    />);
  });
  afterEach(function () { });
  it('should render the component', () => {
    expect(wrapper.find('.rw-today')).to.have.length(1);
  });
  it('should render the date', () => {
    expect(wrapper.find('.date').text()).to.equal('Thu 8 Jun');
  });
  it('should render the current temprature and unit', () => {
    expect(wrapper.find('.current').text()).to.equal('17 C');
  });
});