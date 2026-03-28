/**
 * Paste exact text from your LinkedIn profile here (Profile → each section).
 * This file is the source for Experience, Featured (4 items), and Licenses & certifications
 * on the static site. LinkedIn cannot be auto-synced from this project.
 */
window.PROFILE_MIRROR = {
  /**
   * LinkedIn order (newest first). Use a company block when one employer has multiple roles.
   * Flat entry: title, company, employmentType, location, start, end, duration, optional badge, description, bullets.
   * Company block: company, companyDuration, roles: [{ title, start, end, duration, location, badge?, description?, bullets? }].
   */
  experience: [
    {
      company: "Adobe",
      companyDuration: "Full-time · 4 yrs 2 mos",
      roles: [
        {
          title: "AEP Multi-Solution Senior Consultant",
          employmentType: "Full-time",
          start: "Feb 2024",
          end: "Present",
          duration: "2 yrs 2 mos",
          location: "New York, United States",
          bullets: [],
        },
        {
          title: "Senior Technical Consultant",
          employmentType: "Full-time",
          start: "Feb 2022",
          end: "Feb 2024",
          duration: "2 yrs 1 mo",
          location: "Lehi, Utah, United States",
          bullets: [
            "Helping customers to achieve their business goals and realize value using Adobe experience platform technology across all phases of customer journey.",
            "Collaborate, guide and document client business requirements, key performance indicators and other functional and/or technical requirements for data collection and targeting.",
            "Recommend analytics strategies based on industry trends.",
            "Created dashboards for reporting and leverage Adobe workspaces to unit and A/B test and validate analytics changes.",
            "Implemented marketing solutions that deliver on data-driven, personalized, one-to-one, experiences.",
            "Experience with end-to-end product delivery.",
            "Developed technical expertise on Adobe's cross-channel marketing tool by troubleshooting email & push campaigns, A/B tests, and performance metrics.",
            "Worked with server-side API's (Bulk insertion API, Data Insertion API, Edge API) to upload offline data to adobe's platform to develop custom dashboards, seamlessly access features from different platforms and providing a unified user experience.",
            "Helped clients to strategize and drive their audience creation and activation effort and extract business value from Adobe Audience Manager platform and Adobe Real-Time Customer Data Platform.",
            "Implemented Event forwarding in Adobe Experience Platform to send collected event data to a destination for server-side processing.",
            "Managed partnerships with ad-tech companies, ensuring seamless integration with third-party ad platforms and expanding monetization opportunities.",
          ],
        },
      ],
    },
    {
      title: "Adobe Analytics Specialist",
      company: "Zions Bank",
      employmentType: "Full-time",
      location: "Salt Lake City Metropolitan Area",
      start: "Dec 2018",
      end: "Feb 2022",
      duration: "3 yrs 3 mos",
      bullets: [],
    },
    {
      title: "Analytics Engineer",
      company: "Merkle",
      employmentType: "Full-time",
      location: "Salt Lake City Metropolitan Area",
      start: "Jan 2017",
      end: "Dec 2018",
      duration: "2 yrs",
      bullets: [],
    },
    {
      company: "Utah State University",
      companyDuration: "1 yr 5 mos",
      roles: [
        {
          title: "Teaching Assistant- Management of Database System",
          employmentType: "",
          start: "Sep 2016",
          end: "Dec 2016",
          duration: "4 mos",
          location: "",
          bullets: [],
        },
        {
          title: "Web Programmer",
          employmentType: "Part-time",
          start: "Mar 2016",
          end: "Dec 2016",
          duration: "10 mos",
          location: "",
          bullets: [],
        },
        {
          title: "Graduate Research Assistant",
          employmentType: "Part-time",
          start: "Aug 2015",
          end: "Apr 2016",
          duration: "9 mos",
          location: "",
          description:
            "This project proposes a new form of encryption that is similar to slang in human language. Using the context of the conversation develop substitute words to disguise the real meaning of the message.",
          bullets: [],
        },
      ],
    },
  ],

  /** Featured: Adobe Experience League community articles */
  featured: [
    {
      title:
        'Use the Edge Bridge SDK to "Bridge the Gap" in your mobile app migration process for a quicker and easier Edge Integration.',
      subtitle: "",
      url: "https://experienceleaguecommunities.adobe.com/adobe-analytics-3/is-your-mobile-app-analytics-platform-ready-if-not-let-s-bridge-the-gap-12695",
    },
    {
      title:
        "Want to elevate your customer experience? 🚀 Dive into our latest blog to discover how Adobe Journey Optimizer's In-App Messaging Channel can help you engage customers in real-time and drive better outcomes.",
      subtitle: "",
      url: "https://experienceleaguecommunities.adobe.com/adobe-analytics-3/optimize-your-customer-journey-in-real-time-through-adobe-journey-optimizer-s-in-app-messaging-channel-12753#M530",
    },
    {
      title:
        "Adobe's First-Party Device ID (FPID) to help marketers more consistently deliver personalized digital experiences to their customers.",
      subtitle: "",
      url: "https://experienceleaguecommunities.adobe.com/adobe-analytics-3/improved-visitor-identification-using-adobe-s-first-party-device-id-12689",
    },
    {
      title: "Transform Your Mobile App Analytics with Customized Datastreams!",
      subtitle: "",
      url: "https://experienceleaguecommunities.adobe.com/adobe-analytics-3/unlock-the-power-of-custom-datastreams-for-your-mobile-apps-elevate-your-data-collection-strategy-12783",
    },
  ],

  /** Same fields as LinkedIn: name, issuer, issued, expires (or ""), credentialId, optional url */
  certifications: [
    { name: "", issuer: "", issued: "", expires: "", credentialId: "", url: "" },
    { name: "", issuer: "", issued: "", expires: "", credentialId: "", url: "" },
    { name: "", issuer: "", issued: "", expires: "", credentialId: "", url: "" },
    { name: "", issuer: "", issued: "", expires: "", credentialId: "", url: "" },
  ],
};

(function () {
  function esc(s) {
    if (s == null || s === "") return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function bulletsHtml(bullets) {
    const list = bullets || [];
    if (!list.length) return "";
    return (
      "<ul class=\"job-bullets\">" +
      list
        .map(function (b) {
          return "<li>" + esc(b) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function roleDatesLine(r) {
    const span = esc(r.start || "—") + " – " + esc(r.end || "—");
    return r.duration ? span + " · " + esc(r.duration) : span;
  }

  function badgeHtml(badge) {
    if (!badge) return "";
    return '<p class="job-role-badge">' + esc(badge) + "</p>";
  }

  function renderRoleBlockGrouped(r) {
    const metaParts = [r.employmentType, r.location].filter(Boolean);
    const metaHtml =
      metaParts.length > 0
        ? '<p class="job-meta job-meta-inline">' + metaParts.map(esc).join(" · ") + "</p>"
        : "";
    const desc = r.description ? '<p class="job-description">' + esc(r.description) + "</p>" : "";
    return (
      '<article class="experience-role">' +
      '<span class="experience-role-rail" aria-hidden="true"><span class="experience-role-dot"></span></span>' +
      '<div class="experience-role-body">' +
      "<h3>" +
      esc(r.title) +
      "</h3>" +
      metaHtml +
      '<p class="job-dates">' +
      roleDatesLine(r) +
      "</p>" +
      badgeHtml(r.badge) +
      desc +
      bulletsHtml(r.bullets) +
      "</div></article>"
    );
  }

  function renderCompanyGroup(g) {
    const rolesHtml = (g.roles || [])
      .map(function (r) {
        return renderRoleBlockGrouped(r);
      })
      .join("");
    const dur = g.companyDuration
      ? '<p class="experience-company-duration">' + esc(g.companyDuration) + "</p>"
      : "";
    return (
      '<section class="experience-company">' +
      '<header class="experience-company-head">' +
      "<h2>" +
      esc(g.company) +
      "</h2>" +
      dur +
      "</header>" +
      '<div class="experience-role-stack">' +
      rolesHtml +
      "</div></section>"
    );
  }

  function renderFlatJob(j) {
    const dates = roleDatesLine(j);
    const metaParts = [j.employmentType, j.location].filter(Boolean);
    const metaHtml =
      metaParts.length > 0
        ? '<p class="job-meta job-meta-inline">' + metaParts.map(esc).join(" · ") + "</p>"
        : "";
    const desc = j.description ? '<p class="job-description">' + esc(j.description) + "</p>" : "";
    return (
      '<section class="experience-company experience-company-single">' +
      '<header class="experience-company-head">' +
      "<h2>" +
      esc(j.company) +
      "</h2>" +
      "</header>" +
      '<div class="experience-role-stack">' +
      '<article class="experience-role">' +
      '<span class="experience-role-rail" aria-hidden="true"><span class="experience-role-dot"></span></span>' +
      '<div class="experience-role-body">' +
      "<h3>" +
      esc(j.title) +
      "</h3>" +
      metaHtml +
      '<p class="job-dates">' +
      dates +
      "</p>" +
      badgeHtml(j.badge) +
      desc +
      bulletsHtml(j.bullets) +
      "</div></article></div></section>"
    );
  }

  function mountExperience() {
    const root = document.getElementById("experience-mount");
    if (!root || !window.PROFILE_MIRROR.experience) return;

    root.innerHTML = window.PROFILE_MIRROR.experience
      .map(function (entry) {
        if (!entry) return "";
        if (entry.company && entry.roles && entry.roles.length) {
          return renderCompanyGroup(entry);
        }
        if (entry.company && entry.title) {
          return renderFlatJob(entry);
        }
        return "";
      })
      .join("");
  }

  function mountFeatured() {
    const root = document.getElementById("featured-mount");
    if (!root || !window.PROFILE_MIRROR.featured) return;

    const items = window.PROFILE_MIRROR.featured.slice(0, 4);
    while (items.length < 4) {
      items.push({ title: "", subtitle: "", url: "https://www.linkedin.com/in/prachijn0/" });
    }

    root.innerHTML = items
      .map(function (f, i) {
        const titleHtml = f.title
          ? esc(f.title)
          : "Featured item " + (i + 1) + " — add title in profile-content.js";
        const sub = f.subtitle ? '<p class="featured-card-sub">' + esc(f.subtitle) + "</p>" : "";
        const href = esc(f.url || "#");
        const n = i + 1;
        return (
          '<a class="featured-card" href="' +
          href +
          '" target="_blank" rel="noreferrer">' +
          '<span class="featured-card-num" aria-hidden="true">' +
          n +
          "</span>" +
          '<span class="featured-card-kicker">Adobe Experience League · Community</span>' +
          '<h3 class="featured-card-title">' +
          titleHtml +
          "</h3>" +
          sub +
          '<span class="featured-card-cta">Read article <span aria-hidden="true">→</span></span>' +
          "</a>"
        );
      })
      .join("");
  }

  function mountCerts() {
    const root = document.getElementById("certs-mount");
    if (!root || !window.PROFILE_MIRROR.certifications) return;

    const rows = window.PROFILE_MIRROR.certifications
      .map(function (c, i) {
        if (!c || (!c.name && !c.issuer)) {
          return (
            '<li class="cert-row cert-placeholder"><em>Certification ' +
            (i + 1) +
            " — paste name, issuer, and dates from LinkedIn into <code>profile-content.js</code></em></li>"
          );
        }
        const parts = [c.name, c.issuer, c.issued ? "Issued " + c.issued : "", c.expires ? "Expires " + c.expires : "", c.credentialId ? "ID: " + c.credentialId : ""].filter(
          Boolean
        );
        const inner = parts.map(esc).join(" · ");
        const link =
          c.url &&
          ' <a href="' +
            esc(c.url) +
            '" target="_blank" rel="noreferrer" class="cert-show">Show credential</a>';
        return '<li class="cert-row">' + inner + (link || "") + "</li>";
      })
      .join("");

    root.innerHTML = "<ul class=\"cert-list\">" + rows + "</ul>";
  }

  function init() {
    mountExperience();
    mountFeatured();
    mountCerts();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
