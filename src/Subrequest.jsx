import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root:{
        display:'flex',
        backgroundColor:'blue',
        color:'white',
        marginBottom:'30px',
        marginLeft:'5%'
    },
    btnsec:{
        display:'flex',
        marginTop:'3%'
    },
    btns:{
      width:'40px',
      height:'30px',
      marginTop:'1opx',
      marginRight:'10px',
      textTransform:'lowercase'
    },
   name:{
       fontWeight:'bold',
   },
   
   batchinfo:{
     marginRight:'5%'
   },
   batchTime:{
       marginLeft:'8%'
   }
 });
 
 export default function Subsrequest() {
     const classes = useStyles();
     return( 
         <div className={classes.root}>
             <div >
                 <Avatar alt="Remy Sharp" src="https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true"></Avatar>
             </div>
             <div style={{paddingLeft:"10px"}}>
                 <Typography className={classes.name}>kamlesh patil</Typography>
                 <Typography className={classes.email}>kamleshpatil333@gmail.com</Typography>
             </div>
             <div className={classes.batchTime}>
                 22 jun,2021 11:59 PM
                 <div className={classes.btnsec}>
                
                     <Button variant="contained" color="secondary" className={classes.btns}>Reject</Button>
                    <Button variant="contained" color="default" className={classes.btns}>ACCEPT</Button>
                 </div>
             </div>
         </div>
     );
    }