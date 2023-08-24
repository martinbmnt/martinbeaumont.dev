export async function get() {
  const updateDate = new Date().toISOString().slice(0, 10).replace(/-/g, "/");

  return {
    body: `
/* TEAM */

  Web developer: Martin Beaumont
  Site: https://www.martinbeaumont.dev
  Contact: hello [at] martinbeaumont.dev
  Twitter: @martinbmnt
  From: Laval, France

/* THANKS */

  Feedbacks: Maxence Colet
  Twitter: @MaxenceClt
  From: Laval, France
  
  CSS Reset by: Elad Shechter (@eladsc) / https://github.com/elad2412/the-new-css-reset
    

/* SITE */
  Last update: ${updateDate}
  Language: French
  Doctype: HTML5
  Components: astro, the-new-css-reset, eslint, prettier, pa11y-ci, sharp, shiki
  IDE: VSCode
`.trim(),
  headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  };
}
