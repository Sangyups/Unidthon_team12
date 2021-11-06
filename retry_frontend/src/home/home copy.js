//
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';

import './home.css';
import '../styles/fonts.css';
import Slide from '../slide/Slide';

import { withRouter } from 'react-router';
import axios from 'axios';

// ----------------------------------------------------------------------

const Home = () => {
  const [kewords, setKewords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 kewords 를 초기화하고
        setError(null);
        setKewords(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://localhost:8000/api/keywords'
        );
        setKewords(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!kewords) return null;
  return (
    <div>
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
          {kewords.map(keword => (
            <Grid item className="itemBox" xs={12} sm={3} md={3}>
              <Paper className="paper">
                <div className="keyword"> { keword } </div>
              </Paper>
            </Grid>
          ))}

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
    </div>
  );
};

export default Home;
