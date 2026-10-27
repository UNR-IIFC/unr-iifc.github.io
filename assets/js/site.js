// Renders the content from data.js into each page. You shouldn't need to edit this file.
(function () {
  var data = window.IIFC;
  if (!data) return;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function initials(name) {
    return name.split(/\s+/).map(function (p) { return p.charAt(0); }).join("").slice(0, 2);
  }

  // Home page band of Greek letters
  fill("letters-band", data.chapters.map(function (c) {
    return '<li><a href="chapters.html#' + esc(c.id) + '">' +
      '<span class="greek" aria-hidden="true">' + esc(c.letters) + '</span>' +
      '<span class="label">' + esc(c.name) + '</span></a></li>';
  }).join(""));

  var igIcon = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>';

  function igHandle(url) {
    var m = String(url).match(/instagram\.com\/([^\/?#]+)/);
    return m ? "@" + m[1] : "Instagram";
  }

  // Chapters page
  fill("chapter-list", data.chapters.map(function (c) {
    var links = [];
    if (c.instagram) links.push('<a class="ig" href="' + esc(c.instagram) + '" target="_blank" rel="noopener" aria-label="' + esc(c.name) + ' on Instagram">' + igIcon + esc(igHandle(c.instagram)) + '</a>');
    if (c.website) links.push('<a href="' + esc(c.website) + '">National website</a>');
    return '<li class="chapter" id="' + esc(c.id) + '">' +
      '<div class="greek" aria-hidden="true">' + esc(c.letters) + '</div>' +
      '<div>' +
        '<h2>' + esc(c.name) + '</h2>' +
        (c.founded ? '<p class="founded">' + esc(c.founded) + '</p>' : '') +
        (c.blurb ? '<p>' + esc(c.blurb) + '</p>' : '') +
        (c.photo ? '<img class="photo" src="' + esc(c.photo) + '" alt="Members of ' + esc(c.name) + '">' : '') +
        (links.length ? '<p class="links">' + links.join("") + '</p>' : '') +
      '</div></li>';
  }).join(""));

  // Recruitment page
  var r = data.recruitment;
  fill("recruit-season", r.season
    ? '<p><strong>' + esc(r.season) + '</strong></p>'
    : '<div class="notice"><p>Recruitment dates for the next term will be posted here. Fill out the interest form and we\'ll let you know as soon as they\'re set.</p></div>');

  fill("recruit-steps", r.steps.map(function (s) {
    return '<li><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div></li>';
  }).join(""));

  fill("recruit-reqs", r.requirements.length
    ? '<ul class="req-list">' + r.requirements.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join("") + '</ul>'
    : '<p>Eligibility requirements will be posted before recruitment begins.</p>');

  document.querySelectorAll("[data-interest-form]").forEach(function (btn) {
    if (r.interestFormUrl) {
      btn.href = r.interestFormUrl;
    } else {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
      btn.textContent = "Interest form opens soon";
    }
  });

  // Events
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var upcoming = data.events
    .map(function (e) {
      var p = e.date.split("-");
      return { e: e, d: new Date(+p[0], +p[1] - 1, +p[2]) };
    })
    .filter(function (x) { return x.d >= today; })
    .sort(function (a, b) { return a.d - b.d; });

  fill("event-list", upcoming.length
    ? upcoming.map(function (x) {
        var e = x.e;
        var meta = [e.time, e.location].filter(Boolean).map(esc).join(", ");
        return '<li class="event">' +
          '<time datetime="' + esc(e.date) + '"><span class="m">' + months[x.d.getMonth()] + '</span><span class="d">' + x.d.getDate() + '</span></time>' +
          '<div><h3>' + esc(e.title) + '</h3>' +
          (meta ? '<p class="meta">' + meta + '</p>' : '') +
          (e.description ? '<p>' + esc(e.description) + '</p>' : '') +
          '</div></li>';
      }).join("")
    : '<li><div class="notice"><p>No events are scheduled right now. Check back soon for council meetings, philanthropy, and recruitment events.</p></div></li>');

  // Executive board
  fill("board", data.officers.map(function (o, i) {
    var name = o.name || "To be announced";
    var avatar = o.photo
      ? '<img class="avatar" src="' + esc(o.photo) + '" alt="">'
      : '<span class="avatar" aria-hidden="true">' + esc(o.name ? initials(o.name) : "–") + '</span>';
    return '<li class="officer' + (i === 0 ? ' lead' : '') + '">' + avatar +
      '<div><span class="name">' + esc(name) + '</span>' +
      '<span class="role">' + esc(o.role) + '</span>' +
      (o.email ? '<a href="mailto:' + esc(o.email) + '">' + esc(o.email) + '</a>' : '') +
      '</div></li>';
  }).join(""));

  // Resources page
  function docItem(d) {
    var meta = "PDF" + (d.pages ? ", " + d.pages + " pages" : "");
    return '<li class="doc">' +
      '<h3>' + esc(d.title) + '</h3>' +
      (d.description ? '<p>' + esc(d.description) + '</p>' : '') +
      '<div class="doc-actions">' +
        '<a class="btn btn-small" href="' + esc(d.file) + '">View ' + esc(d.title) + '</a>' +
        '<a class="btn btn-small btn-outline" href="' + esc(d.file) + '" download>Download</a>' +
        '<span class="meta">' + meta + '</span>' +
      '</div>' +
      '</li>';
  }
  function docsIn(section) {
    return (data.resources || []).filter(function (d) { return (d.section || "governing") === section; });
  }
  fill("resource-list", docsIn("governing").map(docItem).join(""));
  fill("scholarship-list", docsIn("scholarships").map(docItem).join(""));

  // Contact details: footer on every page, plus the Contact page
  var c = data.council;
  var telHref = c.phone ? "tel:+1" + String(c.phone).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "") : "";
  var contact = [];
  if (c.email) contact.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.phone) contact.push('<a href="' + telHref + '">' + esc(c.phone) + '</a>');
  if (c.instagram) contact.push('<a href="' + esc(c.instagram) + '">Instagram</a>');
  fill("footer-contact", contact.join("<br>"));

  var rows = [];
  if (c.email) rows.push('<div><dt>Email</dt><dd><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></dd></div>');
  if (c.phone) rows.push('<div><dt>Phone</dt><dd><a href="' + telHref + '">' + esc(c.phone) + '</a></dd></div>');
  if (c.instagram) rows.push('<div><dt>Instagram</dt><dd><a href="' + esc(c.instagram) + '">' + esc(igHandle(c.instagram)) + '</a></dd></div>');
  fill("contact-list", rows.join(""));

  // Parents page
  function telLink(phone) {
    return '<a href="tel:+1' + String(phone).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "") + '">' + esc(phone) + '</a>';
  }
  var pres = data.officers.filter(function (o) { return o.role === "President"; })[0];
  var councilLines = [];
  if (c.email) councilLines.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.phone) councilLines.push(telLink(c.phone));
  fill("council-contact",
    '<span class="name">' + esc(pres && pres.name ? pres.name : "Council president") + '</span>' +
    '<span class="role">President, Independent Interfraternity Council</span>' +
    '<span class="lines">' + councilLines.join("<br>") + '</span>');

  fill("chapter-contacts", data.chapters.map(function (ch) {
    var p = ch.president || {};
    var lines = [];
    if (p.email) lines.push('<a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>');
    if (p.phone) lines.push(telLink(p.phone));
    if (!lines.length && ch.instagram) lines.push('<a href="' + esc(ch.instagram) + '" target="_blank" rel="noopener">Message ' + esc(igHandle(ch.instagram)) + ' on Instagram</a>');
    return '<li><span class="chapter-name">' + esc(ch.name) + '</span>' +
      (p.name ? '<span class="pres-name">' + esc(p.name) + ', President</span>' : '') +
      '<span class="lines">' + lines.join("<br>") + '</span></li>';
  }).join(""));

  var concern = [];
  if (c.complaintFormUrl) concern.push('<a class="btn btn-light" href="' + esc(c.complaintFormUrl) + '">Submit an anonymous report</a>');
  if (c.email) concern.push('<p>' + (c.complaintFormUrl ? 'Or email' : 'Email') + ' <a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' + (c.complaintFormUrl ? ' if you\'d like a response.' : '.') + '</p>');
  fill("concern-actions", concern.join(""));

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
