// factories are functions that create objects and return them
// can use factories instead of classes, in most cases
// factories are more simple than classes
// no need to use the "this" keyword when using factory functions

const dog = () => {
  const sound = 'woof';
  return {
    talk: () => console.log(sound)
  };
};

const sniffles = dog();
sniffles.talk();
