import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import qs from 'qs';
import axios from 'axios';
import Loading from '../loading/Loading';

const Wrap = styled.div`
  margin: 5% auto;
  width: 50vw;
  height: 80vh;
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    font-size: 40px;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    font-size: 40px;
  }
`;

const Slide = ({ location }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
  };
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = query.keyword; // 쿼리의 파싱결과값은 문자열입니다.
  const [promises, setPromises] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 promises 를 초기화하고
        setError(null);
        setPromises(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/promise/?keyword=${keyword}`
        );
        setPromises(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!promises) return null;

  console.log(promises);

  return (
    <Wrap>
      <Slider {...settings}>
        {promises.map((promise, index) => (
          <Card {...promise} />
        ))}
      </Slider>
    </Wrap>
  );
};

export default Slide;
