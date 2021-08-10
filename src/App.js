const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, 'Luna'),
    React.createElement('h3', {}, 'Dog'),
    React.createElement('h3', {}, 'Havanese'),
  ]);
};

// React Reusable Component
// This is "vanilla" React -> JSX hides this from you (createElement)
// Component names must be capitalized
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);
