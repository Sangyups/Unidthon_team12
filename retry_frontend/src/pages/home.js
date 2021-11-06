//
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: '50%',
        backgroundImage: "url('static/mock-image/main_page_image.jpg')"
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }
  }));

function GridItem({ classes }) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>
    );
} 

export default function Home() {
    const classes = useStyles();
    return (
        <Container sx={{ p: '3%' }} >
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    Blog
                </Typography>
            </Stack>

            <Grid container spacing={3} sx={{ width: '60%' }}>
                <GridItem classes={classes} />
                <GridItem classes={classes} />
                <GridItem classes={classes} />
                <GridItem classes={classes} />
            </Grid>
        </Container>
    );
}
