import type { UrlListItem } from "./config.ts";
import type { NewItem } from "./translate.ts";

/**
 * url_list.jsonの書き出し
 * @param urlList
 * @returns
 */
export const writeUrlList = (urlList: UrlListItem[]) => {
  return Deno.writeTextFile(
    "./json/url_list.json",
    JSON.stringify(urlList, null, 2)
  );
};

/**
 * url_list.jsonの書き出し
 * @param urlList
 * @returns
 */
export const writePodcastJSON = (hashEncoded: string, jsObj: any) => {
  return Deno.writeTextFile(
    `./json/${hashEncoded}.json`,
    JSON.stringify(jsObj, null, 2)
  );
};

/**
 * blank.yamlの書き出し
 * @param actionYml
 * @returns
 */
export const writeAction = (actionYml: string) => {
  return Deno.writeTextFile(".github/workflows/blank.yml", actionYml);
};

/**
 * shellscript にローカルxml取得用のスクリプトを書き出す
 * @param actionText
 * @returns
 */
export const writeLocalShellScript = (actionText: string) => {
  return Deno.writeTextFile("local/downloadxml.sh", actionText);
};

/**
 * rss.xmlの書き出し
 * @param hashEncoded
 * @param xmlString
 * @returns
 */
export const writePodcastXML = (hashEncoded: string, xmlString: string) => {
  return Deno.writeTextFile(`./rss/${hashEncoded}.xml`, xmlString);
};



/**
 * new_list.jsonの書き出し
 * @param urlList
 * @returns
 */
export const writeNewPodcastJSON = (newList: NewItem[]) => {
  return Deno.writeTextFile(
    "./json/new_list.json",
    JSON.stringify(newList, null, 2)
  );
};

