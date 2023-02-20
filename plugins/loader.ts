import { useLoader } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const loader = useLoader();

  nuxtApp.hook("app:created", () => {
    loader.start();
  });

  nuxtApp.hook("app:suspense:resolve", () => {
    loader.done();
  });

  nuxtApp.hook("page:start", () => {
    loader.start();
  });

  nuxtApp.hook("page:finish", () => {
    loader.done();
  });
});
