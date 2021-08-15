import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';


const Posts =() =>{
    const posts = useSelector((state) =>state.posts)
    const classes = useStyles();

    console.log(posts);

    return(
        <>
        <h1 className={classes.something}></h1>
        
        </>

    )
}

export default Posts;  