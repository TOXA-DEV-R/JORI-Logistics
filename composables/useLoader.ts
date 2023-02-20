export default () => {
  const store = useState("loader-state", () => ({ active: false }));

  //   Methods
  const toggle = () => {
    store.value.active = !store.value.active;
  };

  const start = () => {
    store.value.active = false;
  };

  const done = () => {
    setTimeout(() => {
      store.value.active = true;
    }, 500);
  };

  return { toggle, start, done };
};
