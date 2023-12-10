import { getEncodedUrl } from "./config.ts";
import { writePodcastJSON, writeNewPodcastJSON } from "./write.ts";
import * as xml from "https://deno.land/x/xml@2.0.4/mod.ts";

export type NewItem = { hash: string; latestId: string };
const newList: NewItem[] = [];

const output = async (item) => {
  // xmlの読み込み
  const file = await Deno.readTextFile(`rss/${item.hashEncoded}.xml`);

  // XMLパースエラーになるのを防ぐための処理
  // null文字除去
  // XSLTの宣言行を除外
  const cleanedFile = file
    .replaceAll(/\u2028/gi, "")
    .split("\n")
    .filter((line) => !line.includes(`<?xml-stylesheet`))
    .join("\n");

  // xml to json
  const jsObj = xml.parse(cleanedFile, { debug: false });

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

  const latestEpisode = json.item[0];
  const guid =
    typeof latestEpisode.guid === "string"
      ? latestEpisode.guid
      : latestEpisode.guid["#text"];

  // 新しいエピソードをnewListに登録する
  newList.push({
    hash: item.hash,
    latestId: guid,
  });

  await writePodcastJSON(item.hashEncoded, json);
};

const main = async () => {
  console.log(`\n\n\ntranslate start\n\n\n`);
  const urlList = getEncodedUrl();

  const writePromiseList = [];
  for (var i = urlList.length - 1; i >= 0; i--) {
    const item = urlList[i];
    writePromiseList.push(output(item));
    console.log(`start... ${item.name}`);
  }

  await Promise.allSettled(writePromiseList);

  await writeNewPodcastJSON(newList);

  console.log(`\n\n translate終了\n\n`);
};

main();
