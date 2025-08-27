/**
 * Sets target and rel attributes to external links with the "external-link" class.
 * This opens the external links in a new tab and ensures security with noopener noreferrer.
 * Skips links that already have rel attributes set in HTML (e.g., third-party attribution links).
 * Does not add nofollow to allow linking to own pages without SEO penalty.
 */

function addAttributesToExternalLinks() {
  const externalLinks = document.querySelectorAll("a.external-link");

  externalLinks.forEach((link) => {
    if (!link.hasAttribute("rel")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}
