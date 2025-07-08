export const GA_TRACKING_ID = 'G-5Z51F1XJRF';


export const analyticsEvent = ({ action, category, label, ...rest }) => 
  typeof window !== 'undefined' &&
  window?.gtag &&
  setTimeout(() => {
    window?.gtag('event', action, {
      event_category: category,
      event_label: label,
      send_to: GA_TRACKING_ID,
      ...rest
    });
  }, 0);

export const pageScroll = (slot) => {
  analyticsEvent({
    action: 'page_scroll',
    category: slot
  });
};
