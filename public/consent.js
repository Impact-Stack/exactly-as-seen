/*
 * Google Consent Mode v2 + cookie banner, shared by the React site and the static pages in /public.
 * Load with a plain <script src="/consent.js"></script> in <head>, BEFORE the Google tag snippet,
 * so the consent default is in the dataLayer before any gtag('config', ...) call.
 */
(function () {
  var STORAGE_KEY = "impactstack_consent_v1";
  var BANNER_ID = "isa-consent-banner";
  var CONSENT_TYPES = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"];

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // gtag.js only reads Arguments objects, so push `arguments`, not an array.
      window.dataLayer.push(arguments);
    };

  function consentState(value) {
    var state = {};
    for (var i = 0; i < CONSENT_TYPES.length; i++) state[CONSENT_TYPES[i]] = value;
    return state;
  }

  function readChoice() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === "granted" || value === "denied" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function saveChoice(value) {
    try {
      if (value) window.localStorage.setItem(STORAGE_KEY, value);
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Storage blocked (private mode etc.): the choice applies to this page view only.
    }
  }

  var defaults = consentState("denied");
  defaults.wait_for_update = 500;
  window.gtag("consent", "default", defaults);

  var saved = readChoice();
  if (saved === "granted") window.gtag("consent", "update", consentState("granted"));

  var STYLES =
    "#" + BANNER_ID + "{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:720px;margin:0 auto;" +
    "box-sizing:border-box;padding:16px 20px;display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;" +
    "background:#05050A;color:#E8E8F0;border:1px solid rgba(255,255,255,0.14);border-radius:12px;" +
    "box-shadow:0 12px 40px rgba(0,0,0,0.5);font:14px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;}" +
    "#" + BANNER_ID + " p{margin:0;flex:1 1 280px;}" +
    "#" + BANNER_ID + " a{color:#C4B5FD;text-decoration:underline;}" +
    "#" + BANNER_ID + " .isa-consent-actions{display:flex;gap:10px;flex:0 0 auto;}" +
    "#" + BANNER_ID + " button{min-width:96px;padding:9px 18px;border-radius:8px;cursor:pointer;" +
    "font-family:inherit;font-size:14px;font-weight:600;line-height:1.2;color:#E8E8F0;background:transparent;border:1px solid rgba(255,255,255,0.45);}" +
    "#" + BANNER_ID + " button:hover{background:rgba(255,255,255,0.08);}" +
    "#" + BANNER_ID + " button:focus-visible,#" + BANNER_ID + " a:focus-visible{outline:2px solid #C4B5FD;outline-offset:2px;}" +
    "@media (max-width:480px){#" + BANNER_ID + " .isa-consent-actions{flex:1 1 100%;}#" + BANNER_ID + " button{flex:1 1 0;}}";

  function injectStyles() {
    if (document.getElementById(BANNER_ID + "-styles")) return;
    var style = document.createElement("style");
    style.id = BANNER_ID + "-styles";
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function hideBanner() {
    var banner = document.getElementById(BANNER_ID);
    if (banner) banner.remove();
    document.body.style.paddingBottom = "";
  }

  function choose(value) {
    saveChoice(value);
    window.gtag("consent", "update", consentState(value));
    hideBanner();
  }

  function showBanner(focus) {
    if (document.getElementById(BANNER_ID)) return;
    injectStyles();

    var banner = document.createElement("div");
    banner.id = BANNER_ID;
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie preferences");
    banner.innerHTML =
      '<p>We use cookies for analytics and advertising (Google) to measure and improve our marketing. ' +
      '<a href="/legal/cookie-policy">Cookie policy</a></p>' +
      '<div class="isa-consent-actions">' +
      '<button type="button" data-consent="granted">Accept</button>' +
      '<button type="button" data-consent="denied">Decline</button>' +
      "</div>";
    banner.addEventListener("click", function (e) {
      var value = e.target && e.target.getAttribute && e.target.getAttribute("data-consent");
      if (value) choose(value);
    });
    document.body.appendChild(banner);

    // Reserve space so the fixed banner never hides the end of the page (e.g. footer contact links).
    document.body.style.paddingBottom = banner.offsetHeight + 32 + "px";
    if (focus) banner.querySelector("button").focus();
  }

  window.openConsentSettings = function () {
    saveChoice(null);
    showBanner(true);
  };

  if (!saved) {
    if (document.body) showBanner(false);
    else document.addEventListener("DOMContentLoaded", function () { showBanner(false); });
  }
})();
