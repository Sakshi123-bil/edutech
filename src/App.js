import React from 'react'
import SimpleAccordion from './SimpleAccordion'
import VideoJs from './VideoJs'
import { makeStyles } from '@material-ui/core'
import { createStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import HomeworkComponent from './HomeworkComponet'
import HomeWork from './HomeWork'
import {MessageLeft,MessageRight} from './Message';
import MessageStyle from './MessageStyle'
import ActiveList from './ActiveList'
import AttemptsCard from './AttemptsCard'
import FinalHw from './FinalHW'
import Try from './Try'
import StudentHwList from './StudentHwList'
import Batches from './Batches'
import Subscriber from './Subscriber'
import PresentSub from './PresentSub'
import Subsrequest from './Subrequest'
import Subreqlist from './Subrequlist'
import FinalSubComp from './FinalSubComp'
import Profile from './Profile'
import CourseVideoBooks from './CoursesVideoBooks'
import FinalBookCourse from './FinalBookCourse'
import ProfileVidBook from './ProfileVidBook'




export default function App() {
  
  return (
    // _________________task 1_________________________
    /*<Grid container spacing ={3}>
         <Grid item md={12} lg={8}>
           <VideoJs></VideoJs>
         </Grid>
         <Grid item xs={12} sm={12} lg={4}>
          <SimpleAccordion></SimpleAccordion>
         </Grid>
    </Grid>*/
    
    // ____________________task2_________________________
   <ProfileVidBook></ProfileVidBook>
  )
}
