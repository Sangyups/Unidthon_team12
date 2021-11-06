//
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

import './home.css';
import Slide from '../slide/Slide';

import { withRouter } from 'react-router';

// ----------------------------------------------------------------------

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  goToSlide = () => {
    //this.props.history.push('/Slide'); 여기가 일단 안되서 주석처리
  };

  render() {
    return (
      <Container sx={{ pt: '8%' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h3" sx={{ pl: '3%', mb: '-2%' }}>
            #새싹들
          </Typography>
        </Stack>

        <Grid container spacing={3} sx={{ width: '60%', pl: '2%' }}>
          <Grid
            item
            className="itemBox"
            xs={12}
            sm={3}
            md={3}
            onClick={this.goToSlide}
          >
            <Paper className="paper">
              <div className="keyword"> 클릭 </div>
            </Paper>
          </Grid>
          <Grid
            item
            className="itemBox"
            xs={12}
            sm={3}
            md={3}
            onClick={this.goToSlide}
          >
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ width: '70%', pt: '2%', pl: '7%' }}>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
          <Grid item className="itemBox" xs={12} sm={3} md={3}>
            <Paper className="paper">
              <div className="keyword"> item </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
