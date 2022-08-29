/**
 * curlではダウンロードできないサイト向けのダウンロード実行
 */

import { getEncodedUrl } from "./config.ts";
import { isSoundCloud } from "./soundcloud.ts";
import { writePodcastXML } from "./write.ts";

const main = async () => {
  const list = getEncodedUrl();

  const filtered = list.filter((item) => isSoundCloud(item.url));

  for await (let item of filtered) {
    const res = await fetch(item.url).then((response) => {
      return response.text();
    });

    await writePodcastXML(item.hashEncoded, res);
  }
};
main();
