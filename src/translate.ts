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
    console.log(xml.parse);

    // xml to json
    const jsObj = xml.parse(file, { debug: false });

    // json の書き出し
    writePodcastJSON(item.hashEncoded, jsObj);
  }
};

main();
