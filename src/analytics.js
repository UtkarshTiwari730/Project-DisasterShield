import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

// Track page views
export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track custom events
export const trackEvent = (category, action, label = '', value = '') => {
  console.log('Analytics Event:', { category, action, label, value });
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track user interactions
export const trackButtonClick = (buttonName) => {
  trackEvent('Button', 'Click', buttonName);
};

export const trackFormSubmission = (formName) => {
  trackEvent('Form', 'Submit', formName);
};

export const trackLocationAccess = (status) => {
  trackEvent('Location', 'Access', status);
};
