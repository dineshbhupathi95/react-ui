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
  const [values,setValues] = React.useState({
    "first_name": null,
    "last_name": null,
    "email": null,
    "company": null,
    "phone": null,
    "mobile": null,
    "jobtitle": null,
    "message": null
  })

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
      axios.post('http://127.0.0.1:8000/requestdemo/',values).then(response=>{
        console.log(response,'success')
       setOpen(false)
      })
      .catch(error=>{
        console.log(error,'error')
      })
      console.log(values)
  }
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Request Demo
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Request a Demo
        </DialogTitle>
        <DialogContent>
     <Grid container spacing={1} direction="row">
      <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="fname"
            name="first_name"
            label="First Name"
            type="text"
            required
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="lname"
            name="last_name"
            label="Last Name"
            type="text"
            required
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="number"
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="cname"
            name="company"
            label="Company Name"
            type="text"
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={5} xs={10}>
      <TextField
            autoFocus
            label="Outlined" variant="outlined"
            margin="dense"
            id="jtitle"
            name="jobtitle"
            label="Job Title"
            type="text"
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={10} xs={20}>
      <TextField
      className={classes.linput}
            autoFocus
             label="Outlined" variant="outlined"
            margin="dense"
            id="looking"
            label="what Are You Looking For ?"
            type="text"
            onChange={handleInput}
          />
          </Grid>
          <Grid item sm={10} xs={20}>
          <TextField
          className={classes.linput}
          id="outlined-multiline-static"
          label="Your Message"
          multiline
          name="message"
          rows={4}
          variant="outlined"
          onChange={handleInput}
        />
          </Grid>
    </Grid>
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} autoFocus onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}