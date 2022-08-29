import { getEncodedUrl } from "./config.ts";
import { writePodcastJSON } from "./write.ts";
import * as xml from "https://deno.land/x/xml@2.0.4/mod.ts";

const output = async (item) => {
  // xmlの読み込み
  const file = await Deno.readTextFile(`rss/${item.hashEncoded}.xml`);

  console.log(file);

  // xml to json
  const jsObj = xml.parse(file, { debug: false });

  // json の書き出し

  let json = jsObj?.rss?.channel || "";
  // airsap の動的な要素を削除する
  if (item.url.includes(`airsap.net`)) {
    json.item = json.item.map((d) => {
      delete d["content:encoded"];

      return d;
    });
  } else if (
    [`anchor.fm`, `pitpa.jp`].some((pattern) => item.url.includes(pattern))
  ) {
    delete json["lastBuildDate"];
  }

  console.log(json);
  await writePodcastJSON(item.hashEncoded, json);
};

const main = async () => {
  const urlList = getEncodedUrl();
  const writePromiseList = [];
  for (var i = urlList.length - 1; i >= 0; i--) {
    const item = urlList[i];
    writePromiseList.push(output(item));
  }

  await Promise.allSettled(writePromiseList);
};

main();
