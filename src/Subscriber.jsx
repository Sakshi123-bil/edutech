import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root:{
        display:'flex',
        backgroundColor:'blue',
        color:'white',
        marginBottom:'15px',
      
    },
    btnsec:{
        display:'flex',
        marginTop:'3%'
    },
    delbtn:{
      width:'40px',
      height:'30px',
      marginTop:'1opx',
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
 
 export default function Subscriber() {
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
                   <Typography className={classes.batchinfo}>1st Batch</Typography>
                    <Button variant="contained" color="secondary" className={classes.delbtn}>DELETE</Button>
                 </div>
             </div>
         </div>
     );
    }