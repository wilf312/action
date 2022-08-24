/**
 * 1. configファイルの取得
 * 1. URLリストの書き出し rss/urllist.json
 * 1. github actionファイルの書き出し .github/workflows/blank.yml
 */
import { urlList } from "./config.ts";
import { templateAction } from "./action.ts";

const main = async () => {
  // hashをエンコードしたデータを作成
  const encoded = urlList.map((d) => {
    return {
      ...d,
      hashEncoded: encodeURI(d.hash),
    };
  });

  // URLリストの書き出し rss/url_list.json
  await Deno.writeTextFile(
    "./rss/url_list.json",
    JSON.stringify(encoded, null, 2)
  );

  // github actionファイルの書き出し .github/workflows/blank.yml

  // # あらBfm
  // curl https://anchor.fm/s/319a2820/podcast/rss --compressed >> rss/arkb.xml
  const ymlText = encoded
    .map((d) => {
      return `          # ${d.name}
          curl ${d.url} --compressed >> rss/${d.hashEncoded}.xml
`;
    })
    .join("\n");

  const actionYml = templateAction(ymlText);

  await Deno.writeTextFile(".github/workflows/blank.yml", actionYml);
};

main();
