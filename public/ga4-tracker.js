/**
 * GA4 Event Tracking for Zeget'is
 * Measurement ID: G-JH9JGB3CVQ
 *
 * Tracks: calendar bookings, email clicks, contact navigation,
 * 28XX landing visits, insights visits, outbound links
 */

document.addEventListener('DOMContentLoaded', function() {

  // Guard: make sure gtag exists before tracking anything
  if (typeof gtag !== 'function') {
    console.warn('GA4: gtag not loaded, skipping event tracking');
    return;
  }

  // ===== TRACK CALENDAR BOOKING CLICKS (main conversion) =====
  // These are the actual CTAs: "Plan een Babbel" and "Boek een Draaidag"
  document.querySelectorAll('a[href*="calendar.app.google"]').forEach(function(el) {
    el.addEventListener('click', function() {
      var href = this.getAttribute('href') || '';
      var isKennismaking = href.includes('XKjMXfBMbewQ5MKc6');
      gtag('event', 'close_convert_lead', {
        'event_category': 'booking',
        'event_label': isKennismaking ? 'kennismakingsgesprek' : 'draaidag_booking',
        'value': 1
      });
      console.log('GA4 Event: close_convert_lead (' + (isKennismaking ? 'kennismakingsgesprek' : 'draaidag') + ')');
    });
  });

  // ===== TRACK EMAIL CLICKS =====
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
    el.addEventListener('click', function() {
      gtag('event', 'qualify_lead', {
        'event_category': 'contact',
        'event_label': 'email_click'
      });
      console.log('GA4 Event: qualify_lead (email click)');
    });
  });

  // ===== TRACK PHONE CLICKS (if added in future) =====
  document.querySelectorAll('a[href^="tel:"]').forEach(function(el) {
    el.addEventListener('click', function() {
      gtag('event', 'qualify_lead', {
        'event_category': 'contact',
        'event_label': 'phone_click'
      });
      console.log('GA4 Event: qualify_lead (phone click)');
    });
  });

  // ===== TRACK CONTACT SECTION NAVIGATION =====
  // Clicks on links that scroll to the contact/calendar section
  document.querySelectorAll('a[href="#contact"], a[href="/#contact"], a[href="#calendar"]').forEach(function(el) {
    el.addEventListener('click', function() {
      gtag('event', 'qualify_lead', {
        'event_category': 'navigation',
        'event_label': 'contact_section_click'
      });
      console.log('GA4 Event: qualify_lead (contact section nav)');
    });
  });

  // ===== TRACK FORM SUBMISSIONS =====
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function() {
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
  if (window.location.pathname.includes('insights') || window.location.pathname.includes('blog')) {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href,
      'event_category': 'engagement',
      'event_label': 'insights_page_view'
    });
    console.log('GA4 Event: Insights page view');
  }

  // ===== CAPTURE UTM PARAMETERS =====
  var params = new URLSearchParams(window.location.search);
  var source = params.get('utm_source');
  if (source) {
    gtag('event', 'campaign_visit', {
      'event_category': 'acquisition',
      'utm_source': source,
      'utm_medium': params.get('utm_medium') || '',
      'utm_campaign': params.get('utm_campaign') || ''
    });
    console.log('GA4 Event: campaign_visit (source: ' + source + ')');
  }

  console.log('GA4 event tracking initialized');
});

// ===== TRACK OUTBOUND LINKS =====
document.addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (!link || !link.href) return;

  try {
    var hostname = new URL(link.href).hostname;
    if (hostname && hostname !== window.location.hostname && !hostname.includes('calendar.app.google')) {
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': link.href,
        'transport_type': 'beacon'
      });
      console.log('GA4 Event: Outbound click to ' + hostname);
    }
  } catch (err) {
    // invalid URL, skip
  }
});
