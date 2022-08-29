/**
 * 1. configファイルの取得
 * 1. URLリストの書き出し rss/urllist.json
 * 1. github actionファイルの書き出し .github/workflows/blank.yml
 */
import { getEncodedUrl } from "./config.ts";
import { templateAction } from "./action.ts";
import { writeUrlList, writeAction, writeLocalShellScript } from "./write.ts";
import { isSoundCloud } from "./soundcloud.ts";

const main = async () => {
  // hashをエンコードしたデータを作成
  const encoded = getEncodedUrl();

  // URLリストの書き出し rss/url_list.json
  await writeUrlList(encoded);

  // github actionファイルの書き出し .github/workflows/blank.yml
  // anchorの時だけ sed を使って lastBuildDateを削除する（anchorfmで毎時くらいで差分が出るため）
  const ymlText = encoded
    .map((d) => {
      // soundcloudはcurlだと空文字を返すのでスキップする
      if (isSoundCloud(d.url)) {
        return ``;
      }
      return `          # ${d.name}
          echo '${d.url}'
          curl ${d.url} --compressed > rss/${d.hashEncoded}.xml
`;
    })
    .join("\n");

  const actionYml = templateAction(ymlText);

  await writeAction(actionYml);

  // shellscript にローカルxml取得用のスクリプトを書き出す
  await writeLocalShellScript(ymlText);
};

main();
