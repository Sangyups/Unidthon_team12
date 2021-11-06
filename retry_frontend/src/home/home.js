//
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

import './home.css';
import '../styles/fonts.css';
import Slide from '../slide/Slide';

// ----------------------------------------------------------------------

class Home extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <Container sx={{ pt: '8%' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h3" sx={{ pl: '3%', mb: '-2%' }}>
                        #새싹들
                    </Typography>
                </Stack>

                <Grid container spacing={3} sx={{ width: '60%', pl:'2%' }}>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper">
                            <div className="keyword"> item </div>
                        </Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ width: '70%', pt: '2%', pl: '7%' }}>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper">
                            <div className="keyword"> item </div>
                        </Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                    <Grid item className="itemBox" xs={12} sm={3} md={3}>
                        <Paper className="paper"><div className="keyword"> item </div></Paper>
                    </Grid>
                </Grid>
            </Container>
=======
            <Slide />
            // <Container sx={{ pt: '8%', ml: '5%' }} >
            //     <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            //         <Typography variant="h3" sx={{ pl: '1%', mb: '-2%' }} fontFamily="KOTRAHOPE">
            //             #새싹들
            //         </Typography>
            //     </Stack>

            //     <Grid container spacing={3} sx={{ width: '60%' }} fontFamily="KOTRAHOPE">
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper">
            //                 <div className="keyword"> item </div>
            //             </Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //     </Grid>

            //     <Grid container spacing={4} sx={{ width: '70%', pt: '2%', pl: '5%' }} fontFamily="KOTRAHOPE">
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper">
            //                 <div className="keyword"> item </div>
            //             </Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //         <Grid item className="itemBox" xs={12} sm={3} md={3}>
            //             <Paper className="paper"><div className="keyword"> item </div></Paper>
            //         </Grid>
            //     </Grid>
            // </Container>
>>>>>>> 65708f8087dba1769d481460a7cddd78cd310838
        );
    }
}

export default Home;