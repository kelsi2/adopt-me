const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ])
};

const App = () => {
  return React.createElement(
    "div",
    // We can pass arguments here (id, class, etc.)
    {},
    [
      React.createElement('h1', { id: 'something-important' }, "Adopt Me!"),
      // No attributes or children, these are optional
      React.createElement(Pet, { 
        name: 'Hermione', 
        animal: 'Cat', 
        breed: 'Domestic short-hair' 
      }),
      React.createElement(Pet, { 
        name: 'Pepper', 
        animal: 'Bird', 
        breed: 'Cockatiel' 
      }),
      React.createElement(Pet, { 
        name: 'Luna', 
        animal: 'Dog', 
        breed: 'Havanese' 
      })
    ]
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))