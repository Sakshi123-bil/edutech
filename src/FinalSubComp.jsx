import React from 'react';
import Batches from './Batches';
import Subscriber from './Subscriber';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Subreqlist from './Subrequlist';
import PresentSub from './PresentSub';


const useStyles = makeStyles({
  
 });
 
 export default function FinalSubComp() {
     const classes = useStyles();
     return( 
      
          <div style={{display:'flex'}}>
            <div style={{width:'70%', marginRight:'-100px'}}>
            <Batches style={{paddingRight:"-10px"}}></Batches>
            </div>
           
            <div style={{width:'27%'}}>
                <PresentSub ></PresentSub>
                <Subreqlist></Subreqlist>
            </div>
            
          </div>
      
     );
 }