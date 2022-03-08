import React from "react"
import classes from './BlogCard.module.css'

const BlogCard = (props) => {
  //Las props solo van a ser visibles donde se las llame.

  return(
    <div className={classes.NewBlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default BlogCard;