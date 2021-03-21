import axios from 'axios';
import { DateTime } from 'luxon';

const formatApiResponse = (data) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // DATE FORMAT
  const dateObject = DateTime.fromISO(data.items[0].snippet.publishedAt);
  const newFormat = dateObject.toLocaleString(DateTime.DATE_MED);
  data.items[0].snippet.publishedAt = newFormat;

  // ADDING COMAS TO THOUSANDS
  const { viewCount, likeCount, dislikeCount } = data.items[0].statistics;
  data.items[0].statistics.viewCount = numberWithCommas(viewCount);
  data.items[0].statistics.likeCount = numberWithCommas(likeCount);
  data.items[0].statistics.dislikeCount = numberWithCommas(dislikeCount);
};

const getVideoData = async () => {
  const videoId = 'zABG-oJzkJ0';
  const apiKey = process.env.REACT_APP_YT_API_KEY;
  const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${apiKey}`;

  try {
    const { data } = await axios.get(fetchUrl);
    formatApiResponse(data);
    return data;
  } catch (err) {
    console.error({ msg: 'Error occured when trying to get Video Details' });
  }
};
export default getVideoData;
