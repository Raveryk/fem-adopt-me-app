// Using props to pass from parent (App)
// into child component (Pet)
// Can only go down from parent to child component
const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('h3', {}, props.animal),
    React.createElement('h3', {}, props.breed),
  ]);
};

// React Reusable Component
// This is "vanilla" React -> JSX hides this from you (createElement)
// Component names must be capitalized
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    //creating new instances of the Pet component
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel',
    }),
    React.createElement(Pet, {
      name: 'Sudo',
      animal: 'Dog',
      breed: 'Wheaten Terrier',
    }),
  ]);
};

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);
