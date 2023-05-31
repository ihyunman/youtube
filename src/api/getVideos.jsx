import axios from "axios";

export default async function getVideos({ queryKey }) {
  const type = queryKey[1];
  // get url에 /로 시작하지않으면 현재 경로를 기준으로 작동한다.
  return await axios.get(`/items/${type}.json`).then((res) => res.data.items);
  // console.log("fetch");
  // return axios.get(`videos/popular.json`).then((res) => res.data.items);
}
