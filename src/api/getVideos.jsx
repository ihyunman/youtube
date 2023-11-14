import axios from "axios";

export default async function getVideos({ queryKey }) {
  const type = queryKey[1];
  const { keyword } = queryKey[2];

  return await axios
    .get(`https://ihyunman.github.io/youtube/items/${type}.json`)
    .then((res) =>
      res.data.items.filter((item) =>
        item.snippet.title.toUpperCase().includes(keyword.toUpperCase())
      )
    );
}
