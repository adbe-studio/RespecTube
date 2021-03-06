import axios from 'axios';
import qs from 'qs';
import config from './config';

const postTextToApi = async (commentInput) => {
  const data = qs.stringify({
    text: commentInput,
    api_key: config.ParallelDots_API_KEY,
  });
  const params = {
    method: 'post',
    url: 'https://apis.paralleldots.com/v4/abuse',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      //   Cookie: '__cfduid=d264bc3363c13f2b60e9bc14bc549bbff1614723098',
    },
    data: data,
  };

  return axios(params);
};

export default postTextToApi;
