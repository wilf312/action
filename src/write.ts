import type { UrlListItem } from "./config.ts";

/**
 * url_list.jsonの書き出し
 * @param urlList
 * @returns
 */
export const writeUrlList = (urlList: UrlListItem[]) => {
  return Deno.writeTextFile(
    "./rss/url_list.json",
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
    `./rss/${hashEncoded}.json`,
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
