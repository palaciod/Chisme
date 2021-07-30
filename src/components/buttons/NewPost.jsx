import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NewPostForm from "../forms/posts/NewPostForm";
import DialogButton from './DIalogButton';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const colorTheme = createMuiTheme({
    palette: {
      secondary: {
        main: "#9932CC",
      },
    },
  });

 function NewPost() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <ThemeProvider theme={colorTheme}>
          <DialogButton buttonType={"fab"} dialogView={<NewPostForm />}/>
        </ThemeProvider>
        
    </div>
  );
}

export default NewPost;