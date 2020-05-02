import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Sales Force Website Site Name
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [passwordType,setPasswordType] = React.useState('password')
  const [open, setOpen] = React.useState(false);
  const [values,setValues] = React.useState({
    "username":null,
    "password":null,
    "securitytoken": null
  })
  const handleInput = (e) =>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
  }
  const handleClosesnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleSubmit =e=>{
      e.preventDefault()
      axios.post('http://127.0.0.1:8000/login/',values).then(response=>{
        console.log(response,'success')
        window.location.pathname='/home/'
      })
      .catch(error=>{
        setOpen(true);
        console.log(error,'error')
      })
      console.log(values)
  }
  const showPassword = ()=>{
    passwordType=='password'?setPasswordType('text'):setPasswordType('password')
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} validate="true">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            type="email"
            autoComplete="username"
            autoFocus
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordType}
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="securitytoken"
            label="securitytoken"
            type={passwordType}
            id="securitytoken"
            // autoComplete="current-password"
            onChange={handleInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" onChange = {showPassword} />}
            label="Show password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="https://developer.salesforce.com/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClosesnackbar}
        message="Invalid Credintials"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClosesnackbar}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosesnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}