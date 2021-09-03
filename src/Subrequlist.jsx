import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import Subscriber from './Subscriber';
import Subsrequest from './Subrequest';
const useStyles = makeStyles({
    root:{
        backgroundColor:'blue',
        color:'white',
        paddingLeft:'15px',
        paddingBottom:'40px',
        width:"114%",
        borderRadius:'10px',
        paddingTop:'30px'
    },
    Search:{
        backgroundColor:'white',
        marginRight:'-10px',
        width:'90%'

    },
    pslist:{
        marginTop:'25px'
    },
    student:{
      marginBottom:'30px'
    }
 });
 
 export default function Subreqlist() {
     const classes = useStyles();
     return(
       <div className={classes.root}>
           
         
           <Subsrequest></Subsrequest>
           <Subsrequest></Subsrequest>
           <Subsrequest></Subsrequest>
           <Subsrequest></Subsrequest>
          
           
         
       </div>
      );
    }