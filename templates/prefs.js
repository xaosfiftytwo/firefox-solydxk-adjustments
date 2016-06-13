// Update settings
user_pref("app.update.channel", "default");
user_pref("app.update.enabled", false);
user_pref("extensions.update.enabled", true);

// Let user decide the ui language
user_pref("intl.locale.matchOS", false);

// Disable default browser checking.
user_pref("browser.shell.checkDefaultBrowser", false);

// Prevent EULA dialog to popup on first run
user_pref("browser.EULA.override", true);

// Set the UserAgent
user_pref("general.useragent.vendor", "SolydXK");
user_pref("general.useragent.vendorSub", "1");
user_pref("general.useragent.vendorComment", "Debian based distribution");

// Default search engine
user_pref("browser.search.defaultenginename", "Startpage (SSL)");
user_pref("browser.search.defaultenginename.US", "data:text/plain,browser.search.defaultenginename.US=Startpage (SSL)");
user_pref("browser.search.order.1", "Startpage (SSL)");
user_pref("browser.search.order.2", "DuckDuckGo");
user_pref("browser.search.order.3", "Google");
user_pref("browser.search.order.US.1", "data:text/plain,browser.search.order.US.1=Startpage (SSL)");
user_pref("browser.search.order.US.2", "data:text/plain,browser.search.order.US.2=DuckDuckGo");
user_pref("browser.search.order.US.3", "data:text/plain,browser.search.order.US.3=Google");

// Activate the backspace key for browsing back
user_pref("browser.backspace_action", 0);

// Disable ipv6
user_pref("network.dns.disableIPv6", true);

// Ignore Mozilla release notes startup pages
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.homepage", "http://solydxk.com");

// Save tabs before exiting
user_pref("browser.showQuitWarning", true);

// Default spell checker
user_pref("spellchecker.dictionary", "en_US");

// Enable extensions by default
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.enabledScopes", 15);

// Do not track
user_pref("privacy.donottrackheader.enabled", true);

// Enable HTML5
user_pref("media.fragmented-mp4.exposed", true);
user_pref("media.fragmented-mp4.ffmpeg.enabled", true);
//user_pref("media.fragmented-mp4.gmp.enabled", true);
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.webm.enabled", true);

