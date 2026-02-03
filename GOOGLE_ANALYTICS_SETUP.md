# Google Analytics Setup Guide

## Current Installation
Google Analytics is installed on all HTML pages with tracking ID: **G-JH9JGB3CVQ**

### Pages with GA installed:
- ✅ index.html
- ✅ insights.html
- ✅ 28xx.html
- ✅ All React-rendered pages (through index.html)

## For Future Pages

### IMPORTANT: Always add this code snippet to every new HTML page

Place this code **immediately after the opening `<head>` tag** in every new HTML file:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JH9JGB3CVQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Set default consent mode for EER users
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  gtag('js', new Date());
  gtag('config', 'G-JH9JGB3CVQ');
</script>
```

### Example HTML Structure:

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <!-- Google tag (gtag.js) - ALWAYS FIRST -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JH9JGB3CVQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500
      });
      gtag('js', new Date());
      gtag('config', 'G-JH9JGB3CVQ');
    </script>

    <!-- Then your regular meta tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Page Title</title>
    <!-- etc... -->
  </head>
  <body>
    <!-- Your content -->
  </body>
</html>
```

## Consent Mode

The tracking code includes **GDPR-compliant consent mode** which:
- Denies analytics storage by default
- Waits for user consent via the cookie banner (CookieBanner.tsx component)
- Automatically grants consent when user accepts cookies

## Verification

To verify GA is working:
1. Open the page in a browser
2. Open DevTools → Network tab
3. Look for requests to `google-analytics.com` or `googletagmanager.com`
4. Check Google Analytics Real-Time reports

## Notes

- The tracking ID `G-JH9JGB3CVQ` is consistent across all pages
- Consent mode complies with GDPR/ePrivacy regulations
- Cookie banner integration is handled by `CookieBanner.tsx` component
- For React-rendered pages, they inherit GA from index.html (SPA behavior)

## Last Updated
2026-02-03
