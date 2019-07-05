import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Login.css';



class Login extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {

        return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="Title">
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <form className="Email" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="Submit"
                        >
                            Sign In
          </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="./" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        );
    }
}

export default Login;