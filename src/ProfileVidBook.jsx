import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Profile from './Profile';
import FinalBookCourse from './FinalBookCourse';

const useStyles = makeStyles({
    mainContainer:{
        display:'flex'
    },

   
    
    "@media (max-width: 1024px)": {
        mainContainer:{
            display:'block',
        }
    }
 });
 
 export default function ProfileVidBook(){
     const classes = useStyles();
     return(
         <div  className={classes.mainContainer}>
             <Profile></Profile>
             <FinalBookCourse></FinalBookCourse>
         </div>
       
     )
 }