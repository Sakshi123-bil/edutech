import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { createStyles } from '@material-ui/styles';
import { Avatar, Card, CardActions, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import MessageStyle from './MessageStyle';



const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '90%',
            height: '110%',
            border: '10px solid blue',
            backgroundColor: '#F3F5FA',
            padding: '10px'
        },

        primarytext: {
            display: 'flex',
        },
        secondtext: {
            display: 'flex',
        },
        button: {
            marginTop: '15%',
            marginLeft: '35%',

        },
        studentInfo: {
            display: 'flex'
        },
        name: {

        },
        date: {

        },
        email: {

        },
        status: {
            marginLeft: '50%',
        },
        message: {


        },
        marks: {
            marginTop: "10%",
            marginLeft: '10%'
        },
        btn: {
            margin: '10px'


        },
        nameg: {
            float: 'left',
        },

        "@media (max-width: 720px)": {
            studentInfo: {
                width: '100%',
            }

        }

    }),
);

export default function AttemptsCard() {
    const classes = useStyles();
    const [isStudentClicked, update] = useState(false);


    return (

        <div className={classes.root}>


            <Avatar alt="Remy Sharp" src="https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true"></Avatar>
            <div className={classes.studentInfo}>
                <div className={classes.expandText}>

                    <ListItemText primary="kaml patil" secondary="kamalpatil@123gmail.com" />
                    <ListItemText secondary="Checked" primary="Jan 9, 2014" className={classes.studentInfo} />
                </div>




            </div>

            <TextField id="filled-basic" label="Marks" variant="filled" className={classes.marks} />
            <div className={classes.button}>
                <Button variant="contained" color="primary" className={classes.btn}>
                    Reject
                </Button>
                <Button variant="contained" color="secondary" className={classes.btn}>
                    Update
                </Button>
            </div>
            <MessageStyle className={classes.message}></MessageStyle>
        </div>


    );
}