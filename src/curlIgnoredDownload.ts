/**
 * curlではダウンロードできないサイト向けのダウンロード実行
 */

import { getEncodedUrl } from "./config.ts";
import { isSoundCloud } from "./soundcloud.ts";
import { writePodcastXML } from "./write.ts";

const main = async () => {
  const list = getEncodedUrl();

  const filtered = list.filter((item) => isSoundCloud(item.url));

  for await (const item of filtered) {
    console.log(`start... ${item.name}`);
    const res = await fetch(item.url).then((response) => {
      return response.text();
    });

    await writePodcastXML(item.hashEncoded, res);
    console.log(`end. ${item.name}`);
  }
};
main();
