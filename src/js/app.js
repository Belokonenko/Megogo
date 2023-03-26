'use strict';
import baner from "../parts/baner/baner.js";
import rec from "../parts/rec/rec.js";
import newest from "../parts/newest/newest.js";
import search from "../parts/search/search.js";
import description from "../parts/description/description.js";
import form from "../parts/form/form.js";
import burger from "../parts/burger/burger.js";
import stars from "../parts/stars/stars.js";
import searchB from "../parts/search/search-b.js";

document.addEventListener('DOMContentLoaded', () => {
    baner();
    rec()
    newest();
    description();
    form();
    burger();
    stars()
    search();
    searchB();

})
