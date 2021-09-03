import React from 'react';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import { List } from '@material-ui/core';
import { MessageLeft } from './Message';
import { MessageRight } from './Message';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    reviews: {
        height: '60%',
        margin: 10,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor:'#F3F5FA'
    },
  }),
);

const MessageStyle =() =>{
    const classes = useStyles();
    return(
<Paper className={classes.reviews} elevation={0}>
    <AppBar position="static" color={"transparent"} elevation={0} style={{marginTop: 0}}>
        <Toolbar>
            <Box style={{flex: 1}}>
                <Typography fontWeight="fontWeightBold" variant="h6" className={classes.title}
                            color="inherit" align={"left"}>
                  
                </Typography>

            </Box>
            <div>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true" />
                    <Avatar alt="Travis Howard" src="https://unsplash.com/photos/C8Ta0gwPbQg/download?force=true&w=640" />
                    <Avatar alt="Cindy Baker" src="https://unsplash.com/photos/jzz_3jWMzHA/download?force=true&w=640" />
                    <Avatar alt="Agnes Walker" src="https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true" />
                    <Avatar alt="Trevor Henderson" src="https://unsplash.com/photos/C8Ta0gwPbQg/download?force=true&w=640" />
                </AvatarGroup>
            </div>
        </Toolbar>
    </AppBar>
    <Paper className={classes.reviews} elevation={0}>
        <List style={{
            marginTop: -5,
            maxHeight: '100%', position: 'absolute',
            top: 0,
            left: 0,
            bottom: -20,
            right: -20,
            overflow: 'scroll',
            overflowX: 'hidden',
            padding: 10
        }}>
            <MessageLeft
                message="How are you? Bro dasdasd asdad asdad"
                timestamp="MM/DD 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="Shubham"
                avatarDisp={true}
            />
            <MessageLeft
                message="I'am fine"
                timestamp="MM/DD 00:00"
                photoURL="https://unsplash.com/photos/C8Ta0gwPbQg/download?force=true&w=640"
                displayName="Sham"
                avatarDisp={false}
            />
            <MessageRight
                message="How you doin?"
                timestamp="MM/DD 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="Mayuresh"
                avatarDisp={true}
            />
            <MessageRight
                message="Everyones great here"
                timestamp="MM/DD 00:00"
                photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                displayName="Mayuresh"
                avatarDisp={false}
            />
        </List>
    </Paper>
    <Box style={{margin: 10}}>
        <TextField
            fullWidth={true}
            id="filled-basic" label="Message" variant="outlined" size={"small"}
            InputProps={{
                endAdornment: <IconButton size={"small"} aria-label="send"> <Send
                    fontSize={"small"}/></IconButton>
            }}/>
    </Box>
</Paper>
    );
        }

        export default MessageStyle;