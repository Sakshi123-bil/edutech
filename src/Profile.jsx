import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import clsx from  'clsx';
import { useState } from 'react';

const useStyles = makeStyles({
   root:{
    position: 'relative',
    width: '445px',
    height: '642px',
    
    background: 'linear-gradient(156.26deg, #0D3C56 0%, rgba(0, 56, 255, 0) 109.72%), #FFFFFF',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
   },
   container:{
      padding:'30px',
      alignContent:'center'
   },
   btn:{
   
  
    background: 'linear-gradient(0deg, #0D3C56, #0D3C56), #FFFFFF',
    boxShadow: '4px 10px 50px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    color:'white',
    padding:'10px',
    margin:'10px'
     
   },
   studentInfo:{
    textAlign:'center',
   },
   root1:{
    position: 'absolute',
    top: "21%",
    left: "4%",
    z_index: 10,
    margin: 1,
    width: '405px',
    height: '570px',
    transform: 'matrix(0.99, 0.14, -0.12, 0.99, 0, 0)',

    background: 'linear-gradient(0deg, #0F5982, #0F5982), #FFFFFF',
    borderRadius: '50px',
   },
   root2:{
    position: 'absolute',
    top: "20%",
    left: "2%",
    z_index: 10,
    margin: 1,
    width: '430px',
    height: '586px',
    transform: 'matrix(1, 0.07, -0.06, 1, 0, 0)',
    background: 'linear-gradient(0deg, #0D3C56, #0D3C56), #FFFFFF',
    borderRadius: '50px',
   },
  /* mainContainer:{
    position:'absolute',
    width:'678px',
    height:'649px',
    background:'#51C1FF',
    filter:'blur(600px)'
   }
*/ mainContainer:{
 

marginTop:'70px',

  
},
courseInfo:{
  display:'flex',
   marginLeft:'50px',
},
"@media(max-Width:360px)":{
  root:{
    position: 'relative',
    width: '337px',
    height: '572px',
    
    background: 'linear-gradient(156.26deg, #0D3C56 0%, rgba(0, 56, 255, 0) 109.72%), #FFFFFF',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    
   },
   btn:{
     padding:'0px'
   },
   courseInfo:{
     marginLeft:'20px',
  },
  studentInfo:{
    textAlign:'center',
   },
}
 });
 
 export default function Profile() {
     const classes = useStyles();
     const [value, setValue] = React.useState(2);
     return( 
       <div>
         <h1 style={{marginLeft:'100px',}}>User profile</h1>
     <div className={classes.mainContainer}>
     

        <div className={classes.root1}>
          <div className={classes.container}>
         </div>
      </div>

      <div className={classes.root2}>
          <div className={classes.container}>
         </div>
      </div>
      <div className={classes.root}>
          <div className={classes.container}>
          <Avatar style={{marginLeft:'150px'}}></Avatar>
          <Typography style={{marginLeft:'110px'}}>Meghraj londhe</Typography>
          <Typography style={{marginLeft:'80px'}}>meghraj333@gmail.com</Typography>
          <Typography style={{marginLeft:'100px',marginTop:'8px'}}>My Bio Description</Typography>
          <Typography style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate aspernatur iste unde qui 
              numquam sequi omnis mollitia recusandae quidem! Nisi praesentium
               distinctio nulla qui voluptate explicabo, esse minus quos reiciendis.
         </Typography>
         <Box component="fieldset" mb={3} borderColor="transparent" style={{marginLeft:'60px'}}>
        <Rating
         size="large"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Box>
        <div className={classes.studentInfo}>
        <Typography>100</Typography>
        <Typography>students</Typography>
        </div>
        <div className={classes.courseInfo}>
            <div>
            <Typography>100 </Typography>
           <Typography>courses</Typography>
           
           </div>
           <div style={{marginLeft:'150px'}}>
           <Typography>100 </Typography>
           <Typography>Books</Typography>
             </div>
            </div>

        <div style={{display:'flex',marginLeft:'15px',marginTop:'30px'}}>
            <Typography className={classes.btn}>Edit</Typography>
            <Typography className={classes.btn}>Become Authore</Typography>
            <Typography className={classes.btn}>History</Typography>
        </div>
        </div>

   </div>

   </div>
   </div>
     );
 }