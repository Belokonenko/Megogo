'use strict';
import baner from "../parts/baner/baner.js";
import rec from "../parts/rec/rec.js";
import newest from "../parts/newest/newest.js";
import search from "../parts/search/search.js";
document.addEventListener('DOMContentLoaded', () => {
    baner();
    rec()
    newest();
    search();
})
