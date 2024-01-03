import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
})



function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Hello, World!</h1> */}
      {/* <Typography variant="h1" >Hello World!</Typography>
      <Typography variant="h3" >Hello World!</Typography> */}

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone This is a photo album. you can check out what I work here to make it this material ui website
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">See My Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
