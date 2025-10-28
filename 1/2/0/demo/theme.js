import {epcc} from "../epcc.js";

var footer = new URL(import.meta.url).searchParams.get("footer");

if (!footer) {
    footer = "&copy; Example footer";
}
epcc.footer_text = footer;

epcc.install();
globalThis.slideshow = remark.create({sourceUrl: 'README.md'});