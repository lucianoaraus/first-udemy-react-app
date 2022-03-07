import './App.css';
import BlogCard from './BlogCard';

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
    return <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
  })
    

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
