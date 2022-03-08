import React, {useState} from 'react';
import BlogCard from './BlogCard';
import './App.css';

function App() {
  const [showBlogs, setShowBlogs] = useState(true);

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
  ];

  const blogCards = blogArr.map( (item,pos) => {
    return <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
  });

  const onHide = () => {
    setShowBlogs(!showBlogs)
  };
    

  return(
    <div className="App">
      <button onClick={onHide}>{showBlogs ? 'Hide List' : 'Show List' }</button>
      <br></br>
      {
        showBlogs ? blogCards : "☹"
      }
    </div>
  );
  
}

export default App;
