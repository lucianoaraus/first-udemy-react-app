import './App.css';

function App() {
  
  const blogArr = [
    {
      id: 0,
      title: 'Blog Title 1',
      description: 'This is the card description and it hasn´t any sense.'
    },
    {
      id: 1,
      title: 'Blog Title 2',
      description: 'This is the card description and it hasn´t any sense.'
    },
    {
      id: 2,
      title: 'Blog Title 3',
      description: 'This is the card description and it hasn´t any sense.'
    }
  ]

  const blogCards = blogArr.map( (item,pos) => {
    console.log(item,pos)
    return <div className='BlogCard' key={item.id}>
      <h3>{item.title}</h3>
      <p>id: {item.id}</p>
      <p>{item.description}</p>
    </div>
  })
    

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
