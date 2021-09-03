import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) =>
   
    createStyles({
        messageRow: {
            display: "flex"
        },
        messageRowRight: {
            display: "flex",
            justifyContent: "flex-end"
        },
        messageBlue: {
            position: "relative",
            marginLeft: 20,
            marginBottom: 20,
            padding: 15,
            backgroundColor:'#F3F5FA',
            width: "90%",
            //height: "50px",
            textAlign: "left",
            border: "1px solid #F3F5FA",
            borderRadius: 10,
            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "15px solid #F3F5FA",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                left: -15
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: 0,
                height: 0,
                borderTop: "17px solid #F3F5FA",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: -1,
                left: -17
            }
        },
        messageOrange: {
            position: "relative",
            marginRight: 20,
            marginBottom: 10,
            padding: 10,
            backgroundColor: "#C4E1F2",
            width: "60%",
            //height: "50px",
            textAlign: "left",
            border: "1px solid #C4E1F2",
            borderRadius: 10,
            "&:after": {
                content: "''",
                position: "absolute",
                width: 0,
                height: 0,
                borderTop: "15px solid #C4E1F2",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: 0,
                right: -15
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: 0,
                height: 0,
                borderTop: "17px solid #C4E1F2",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: -1,
                right: -17
            }
        },

        messageContent: {
            padding: 0,
            margin: 0,
            fontSize: 12,
        },
        messageTimeStampRight: {
            position: "absolute",
            fontSize: 8,
            fontWeight: "300",
            marginTop: 10,
            bottom: 1,
            right: 5
        },

        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        avatarNothing: {
            color: "transparent",
            backgroundColor: "transparent",
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        displayName: {
            marginLeft: 10,
            fontSize: 10,
        }
    })
);

export const MessageLeft = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "2:30";
    const photoURL = props.photoURL ? props.photoURL : "dummy.js";
    const displayName = props.displayName ? props.displayName : "No Name";
    const classes = useStyles();
    return (
        <>
            <div className={classes.messageRow}>
                <Avatar
                    alt={displayName}
                    className={classes.orange}
                    src={photoURL}
                />
                <div>
                    <Typography className={classes.displayName} align={"left"}>{displayName}</Typography>
                    <Typography className={classes.messageBlue}>
                        <Typography className={classes.messageContent}>
                            {message}
                        </Typography>
                        <Typography className={classes.messageTimeStampRight} noWrap={true}>{timestamp}</Typography>
                    </Typography>
                </div>
            </div>
        </>
    );
};
export const MessageRight = (props) => {
    const classes = useStyles();
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "3:30";
    return (
        <div className={classes.messageRowRight}>
            <Typography className={classes.messageOrange}>
                <Typography className={classes.messageContent}>{message}</Typography>
                <Typography className={classes.messageTimeStampRight}>{timestamp}</Typography>
            </Typography>
        </div>
    );
};

