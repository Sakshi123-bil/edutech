import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { CardMedia } from '@material-ui/core';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
    
     media:{
       
         width:'330px',
        height:'185.56px',
        filter: 'drop-shadow(4px 20px 50px rgba(0, 0, 0, 0.5))',
        borderRadius: '30px',
        marginRight:'40px',
        marginTop:'20px',
        marginBottom:'10px'
     },
     "@media (max-width: 360px)": {
        media:{
       
            width:'330px',
           height:'62.56px',
           filter: 'drop-shadow(4px 20px 50px rgba(0, 0, 0, 0.5))',
           borderRadius: '14px',
           marginRight:'40px',
           marginTop:'20px',
           marginBottom:'10px'
        },
     }
  });
  
  export default function CourseVideoBooks(props){
      const classes = useStyles();
      return(
       
              <CardMedia
              className={classes.media}
              image={props.image}
         
              ></CardMedia>
        
      )
  }