import { getEncodedUrl } from "./config.ts";
import { writePodcastJSON } from "./write.ts";
import * as xml from "https://deno.land/x/xml@2.0.4/mod.ts";

// create a SAX parser instance

const main = async () => {
  const urlList = getEncodedUrl();
  for (var i = urlList.length - 1; i >= 0; i--) {
    const item = urlList[i];

    console.log(item.hashEncoded);

    // xmlの読み込み
    const file = await Deno.readTextFile(`rss/${item.hashEncoded}.xml`);

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
    writePodcastJSON(item.hashEncoded, json);
  }
};

main();
