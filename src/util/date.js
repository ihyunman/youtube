import { format } from "timeago.js";

export default function formatDate(publishedAt) {
  return format(publishedAt, "en-US");
}
