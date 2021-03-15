export const GA_TRACKING_ID_UA = 'UA-157966292-1'
export const GA_TRACKING_ID_V4 = 'G-YZPV918BE1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url) => {
  window.gtag('config', GA_TRACKING_ID_UA, {
    page_path: url,
    linker: {
      domains: [
        'reactbricks.com',
        'dashboard.reactbricks.com',
        'docs.reactbricks.com',
      ],
    },
  })
  window.gtag('config', GA_TRACKING_ID_V4, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// https://support.google.com/analytics/answer/7478520
export const trackOutboundLink = (url, isBlank = false) => (event) => {
  if (!isBlank) {
    event.preventDefault()
  }
  window.gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
    event_callback: () => {
      if (!isBlank) {
        window.location.href = url
      }
    },
  })
}
