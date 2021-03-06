export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageView = (url: string) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event: (params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => void = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
