import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox";

import "@fancyapps/ui/dist/fancybox.css";

export default defineNuxtPlugin(({ vueApp }) => {
  Fancybox.bind("[data-fancybox-customers]", {
    Thumbs: false,
    Toolbar: true,

    closeButton: "top",
  });

  Fancybox.bind("[data-fancybox-certifcates]");
  Fancybox.bind("[data-fancybox-experts]");
});
