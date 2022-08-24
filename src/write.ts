import type { UrlListItem } from "./config.ts";
export const writeUrlList = (urlList: UrlListItem[]) => {
  return Deno.writeTextFile(
    "./rss/url_list.json",
    JSON.stringify(urlList, null, 2)
  );
};

export const writeAction = (actionYml: string) => {
  return Deno.writeTextFile(".github/workflows/blank.yml", actionYml);
};
