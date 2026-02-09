/**
 * Google Analytics 4 Event Tracking for Zeget'is
 * Add this code to your website to track conversions
 *
 * INSTALLATION:
 * Place this script in your main JS file or add it before </body> tag
 * Make sure GA4 base code (G-JH9JGB3CVQ) is already loaded
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

  // ===== TRACK CONTACT BUTTON CLICKS =====
  // Tracks clicks on buttons/links with text containing "contact", "offerte", "gratis gesprek", etc.
  document.querySelectorAll('a[href*="contact"], button[class*="contact"], a:contains("Contact"), a:contains("Offerte"), a:contains("Zeget\'is call")').forEach(function(element) {
    element.addEventListener('click', function(e) {
      gtag('event', 'close_convert_lead', {
        'event_category': 'contact',
        'event_label': 'contact_button_click',
        'value': 1
      });
      console.log('GA4 Event: close_convert_lead (contact button)');
    });
  });

  // ===== TRACK PHONE NUMBER CLICKS =====
  // Tracks clicks on phone number links (tel: links)
  document.querySelectorAll('a[href^="tel:"]').forEach(function(element) {
    element.addEventListener('click', function(e) {
      var phoneNumber = this.getAttribute('href').replace('tel:', '');
      gtag('event', 'qualify_lead', {
        'event_category': 'contact',
        'event_label': 'phone_click',
        'phone_number': phoneNumber
      });
      console.log('GA4 Event: qualify_lead (phone click)');
    });
  });

  // ===== TRACK EMAIL CLICKS =====
  // Tracks clicks on email links (mailto: links)
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(element) {
    element.addEventListener('click', function(e) {
      var email = this.getAttribute('href').replace('mailto:', '');
      gtag('event', 'qualify_lead', {
        'event_category': 'contact',
        'event_label': 'email_click',
        'email': email
      });
      console.log('GA4 Event: qualify_lead (email click)');
    });
  });

  // ===== TRACK FORM SUBMISSIONS =====
  // Tracks all form submissions (contact forms, quote requests, etc.)
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      // Only track if form has required fields filled
      if (this.checkValidity()) {
        gtag('event', 'close_convert_lead', {
          'event_category': 'form',
          'event_label': 'form_submission',
          'form_name': this.getAttribute('name') || this.getAttribute('id') || 'unnamed_form'
        });
        console.log('GA4 Event: close_convert_lead (form submission)');
      }
    });
  });

  // ===== TRACK 28XX LANDING PAGE VISITS =====
  // Special tracking for your 28XX regional landing page
  if (window.location.pathname.includes('28xx') || window.location.pathname.includes('28XX')) {
    gtag('event', 'page_view', {
      'page_title': '28XX Regional Landing',
      'page_location': window.location.href,
      'event_category': 'engagement',
      'event_label': '28xx_landing_view'
    });
    console.log('GA4 Event: 28XX landing page view');
  }

  // ===== TRACK INSIGHTS/BLOG PAGE VISITS =====
  // Track visits to blog/insights pages (high-intent content)
  if (window.location.pathname.includes('insights') || window.location.pathname.includes('blog')) {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href,
      'event_category': 'engagement',
      'event_label': 'insights_page_view'
    });
    console.log('GA4 Event: Insights page view');
  }

  console.log('✅ GA4 event tracking initialized for Zeget\'is');
});

// ===== HELPER: Track outbound links =====
// Useful for tracking clicks to your social media, portfolio, etc.
document.addEventListener('click', function(e) {
  var target = e.target.closest('a');
  if (target && target.href) {
    var hostname = new URL(target.href).hostname;
    // Track if link goes to external domain
    if (hostname && hostname !== window.location.hostname) {
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': target.href,
        'transport_type': 'beacon'
      });
      console.log('GA4 Event: Outbound link click to ' + hostname);
    }
  }
});
