import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { ThemeProvider } from '@mui/material/styles';
import { theme, useStyles } from "./styles";
// import img from './img.jpeg'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
          <PhotoCamera className={classes.icon} />
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
            <div className={classes.button}>
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={img}
                    image={`https://source.unsplash.com/random?count=${card}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here is give to footer a purpose!
        </Typography>
      </footer>
    </ThemeProvider>
  );
}

export default App;
