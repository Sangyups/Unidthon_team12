// 이 파일들은 다른 import 보다 상단에 위치해야 함
import './home.css';
import '../styles/fonts.css';
import { withRouter } from "react-router-dom";
//
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

class Home extends React.Component {
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
    constructor(props){
        super(props);
    }

    goToSlide = () => {
        this.props.history.push("/slides");
    };

    render() {
        return (
            <Container sx={{ pt: '8%' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h3" sx={{ pl: '3%', mb: '-2%' }}>
                        #새싹들
                    </Typography>
                </Stack>

                <Grid container spacing={3} sx={{ width: '60%', pl:'2%' }}>
                    <Grid item className="itemBox" xs={12} sm={3} md={3} >
                        <Paper className="paper">
                            <button onClick={this.goToSlide}> 이거 </button>
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
        );
    }
}

export default Home;
