import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID_UA, GA_TRACKING_ID_V4 } from '../utils/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            async
            defer
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID_UA}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID_UA}', {
                page_path: window.location.pathname,
                linker: {
                  domains: [
                    "reactbricks.com",
                    "dashboard.reactbricks.com",
                    "docs.reactbricks.com",
                  ],
                },
              });
              gtag('config', '${GA_TRACKING_ID_V4}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
