import React, { useEffect,useState } from 'react';
import clsx from 'clsx';
import TopBar from '../components/homeComponents/headerBar/TopBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core'
import LoginForm from '../components/LoginForm'
import Footer from '../components/homeComponents/footerBar/Footer'

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}))

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};
const featuredPosts = [
    {
      title: 'BY PHONE',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: '',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
  

export default function Home(props){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [state,setState] = useState({})
    useEffect(()=>{
        test()
    },[])
    const test = () =>{
        console.log('test')
    }
    return(
        <div>
            <Container maxWidth="lg">
                <main>
                    <div className={classes.appBarSpacer} />
                    <LoginForm></LoginForm> 
                    <div className={classes.appBarSpacer} />
                </main>
            </Container>
        </div>
    )
}