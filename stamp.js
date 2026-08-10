/* Stamps every asset reference with the file's own modification time, so a
   browser that has already downloaded a picture asks for it again once the
   picture changes. Screenshots keep their filenames as they are recaptured,
   and without this a reader who visited last week keeps seeing last week's
   version of the site under this week's captions.

   No build step and no dependencies — run it after changing any asset:

     node stamp.js
*/
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const FILES = ["index.html", "app.js"];
const stamp = f => {
  const p = path.join(ROOT, f);
  return fs.existsSync(p) ? Math.floor(fs.statSync(p).mtimeMs) : Date.now();
};

let touched = 0;
for (const file of FILES) {
  const p = path.join(ROOT, file);
  const before = fs.readFileSync(p, "utf8");
  // strip any stamp already there, then write a fresh one per referenced file
  const after = before
    .replace(/(assets\/[\w./-]+?\.(?:jpg|jpeg|png|pdf|webp|svg))(\?v=\d+)?/g,
             (_, ref) => ref + "?v=" + stamp(ref))
    .replace(/(styles\.css|app\.js)(\?v=\d+)?/g,
             (_, ref) => ref + "?v=" + stamp(ref));
  if (after !== before) { fs.writeFileSync(p, after); touched++; }
  console.log((after === before ? "  unchanged  " : "  stamped    ") + file);
}
console.log(touched ? "\nHard-reload once (Ctrl+Shift+R); every visit after that is automatic." : "\nNothing to do.");
