import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import Subscriber from './Subscriber';
const useStyles = makeStyles({
    root:{
        backgroundColor:'blue',
        color:'white',
        paddingLeft:'15px',
        paddingBottom:'40px',
        width:'110%',
        borderRadius:'10px',
        marginBottom:'10px',
        paddingLeft:'30px',
        paddingRight:'-79px'
    },
    Search:{
        backgroundColor:'white',
        marginRight:'-10px',
        width:'90%'

    },
    pslist:{
        marginTop:'25px'
    }
 });
 
 export default function PresentSub() {
     const classes = useStyles();
     return(
       <div className={classes.root}>
           <h3 style={{paddingTop:'15px'}}>1ST BATCH</h3>
           <TextField className={classes.Search}
           
            id="filled-basic" label="Search" variant="outlined" size={"small"}
            InputProps={{
                endAdornment: <IconButton size={"small"} aria-label="send"> <SearchRounded
                    fontSize={"small"}/></IconButton>
            }}/>
            <div className={classes.pslist}>
            <Subscriber></Subscriber>
            <Subscriber></Subscriber>
            <Subscriber></Subscriber>
           
            </div>
           
         
       </div>
      );
    }