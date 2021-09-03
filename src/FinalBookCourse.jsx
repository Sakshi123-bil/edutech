import React from 'react'
import { makeStyles } from '@material-ui/styles';
import CourseVideoBooks from './CoursesVideoBooks';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    
   courses:{
       display:'flex',
   },
   videos:{
      display:'flex',
   },
   books:{
       display:'flex'
   },
   heading:{
       display:'flex'
   },
   btn:{
    position:'absolute',
    width:'128px',
    height:'35px',
    fontFamily: 'Roboto',
    fontStyle:'normal',
    fontWeight:'500',
    fonSize: '15px',
   
    marginLeft:'28%',
    background: 'linear-gradient(0deg, #0D3C56, #0D3C56), #FFFFFF',
    color:'white',
    borderRadius: '10px',
   paddingLeft:'30px',
  
   paddingTop:'10px',
   
    
    
   }
   ,
   root:{
       marginLeft:'20%'
   },
   
   "@media (max-width: 360px)": {
    root:{
       marginRight:'1%',
       marginLeft:'2%'
    },

    btn:{
        position:'absolute',
        width:'111px',
        height:'29px',
        fontFamily: 'Roboto',
        fontStyle:'normal',
        fontWeight:'500',
        fonSize: '15px',
       
        marginLeft:'50%',
        background: 'linear-gradient(0deg, #0D3C56, #0D3C56), #FFFFFF',
        color:'white',
        borderRadius: '10px',
       paddingLeft:'16px',
      
       paddingTop:'4px',
       marginTop:'31px'
       
        
        
       },
    },

       "@media (max-width: 411px)": {
        root:{
            root:{
              
                marginLeft:'0%'
             },
        },
    
}
   
 });
 
 export default function FinalBookCourse(props){
     const classes = useStyles();
     return(
         <div className={classes.root}>
             <div className={classes.heading}>
             <h3 style={{letterSpacing:'3px',fontSize:'25px'}}>Courses</h3>
             <h3 className={classes.btn}>New Course</h3>
             </div>
             
         <div className={classes.courses}>
            
     <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
     <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
        
           
         </div>
         <div className={classes.heading}>
             <h3 style={{letterSpacing:'3px',fontSize:'25px'}} >Videos</h3>
             <h3 className={classes.btn}>Upload Video</h3>
             </div>
         <div className={classes.videos}>
         <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
         <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
         </div>

            <div className={classes.heading}>
             <h3 style={{letterSpacing:'3px',fontSize:'30px'}}>Books</h3>
           
             </div>
        
         <div className={classes.books}>
         <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
         <CourseVideoBooks image="https://tse1.mm.bing.net/th?id=OIP.t8et97qAv0z6bBiyZ1j8JwHaD8&pid=Api&P=0&w=370&h=198"></CourseVideoBooks>
         </div>
         </div>
     )
 }