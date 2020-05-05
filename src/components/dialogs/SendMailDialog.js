import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Snackbar from '@material-ui/core/Snackbar';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const useStyles = makeStyles((theme) => ({
    linput: {
        width: "460px"
    },
    button: {
        float: "left"
    }
}));
export default function RequestDemoPopup() {
    const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [snackopen, setsnackOpen] = React.useState(false);
  const [values,setValues] = React.useState({
    "to_address": null,
    "subject": null,
    "text_body": null,
  })

  const handleClosesnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setsnackOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (e) =>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
  }
  const handleSubmit =e=>{
      e.preventDefault()
      setOpen(false);
      axios.post('https://djangosalesforce.herokuapp.com/sendmails/',values).then(response=>{
        console.log(response,'success')
        setsnackOpen(true);
      })
      .catch(error=>{
        console.log(error,'error')
      })
      console.log(values)
  }
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Send Mail
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
       Email
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={1} direction="row">
      <Grid item sm={8} xs={16}>
      <TextField
            autoFocus
            margin="dense"
            id="tomail"
            label="To Mail Here"
            name="to_address"
            type="email"
            fullWidth
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={8} xs={16}>
      <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            name="subject"
            type="text"
            fullWidth
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={8} xs={16}>
          <TextField
           autoFocus
           margin="dense"
        //   className={classes.linput}
          id="outlined-multiline-static"
          label="Message Body"
          multiline
          name="text_body"
          rows={4}
          variant="outlined"
          onChange={handleInput}
        //   onChange={handleInput}
        />
          </Grid>
          <Grid item sm={8} xs={16}>
          <AttachFileIcon />
          </Grid>
          </Grid>
 
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" autoFocus onClick={handleSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',        
        }}
        open={snackopen}
        autoHideDuration={3000}
        onClose={handleClosesnackbar}
        message="Send success"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" onClick={handleClosesnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      
    </div>
  );
}