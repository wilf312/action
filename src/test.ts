import { freaks } from "./freaks.ts";

// freaks のフォーマット
let freaksList = [];
const keys = Object.keys(freaks);
keys.forEach((key) => {
  const obj = freaks[key] as any;
  freaksList.push({
    key,
    ...obj,
  });
});

const a = [
  { title: "メディアヌップ", author: "Media Nup" },
  { title: "朝日新聞　ニュースの現場から", author: "朝日新聞ポッドキャスト" },
  {
    title: "Repeat Rhyme / リピートライム",
    author: "Repeat Rhyme / リピートライム",
  },
  { title: "青いTシャツ24時　-シン現代農業論-", author: "青いTシャツ竹本" },
  { title: "ほっとテック", author: "ほっとテック" },
  { title: "Zero Topic - ゼロトピック -", author: "Yamotty" },
  { title: "オールデイアメリカ", author: "All Day America" },
  { title: "ひとくちPKI", author: "Eureka" },
  { title: "furoshiki.fm", author: "furoshiki.fm" },
  {
    title: "歴史を面白く学ぶコテンラジオ （COTEN RADIO）",
    author: "COTEN inc.",
  },
  { title: "ハッピートークバラエティ「よかった探し」", author: "Rico Sengan" },
  { title: "超相対性理論", author: "超相対性理論" },
  { title: "笑福亭鶴瓶 日曜日のそれ PODCAST", author: "ニッポン放送" },
  { title: "名無しさんのポッドキャスト", author: "toricls & Keisuke69" },
  { title: "エンジニアと人生", author: "堤 修一" },
  { title: "Wantedly Engineering Podcast", author: "Wantedly Engineering" },
  { title: "ALL STAR SAAS PODCAST", author: "ALL STAR SAAS FUND" },
  { title: "Basuke's Tech Talk", author: "Basuke Suzuki" },
  { title: "火曜日のおフロ", author: "igtm, tmr, ymdarake" },
  { title: "イシュミラジオ", author: "isyumi" },
  { title: "たまにデザインFM", author: "tamadesign" },
  { title: "Submits.life", author: "Submits.life" },
  { title: "Kyashfm", author: "株式会社Kyash" },
  { title: "NeuroRadio", author: "NeuroRadio" },
  { title: "Background.radio", author: "Background Radio" },
  { title: "ポッドキャストアワード観覧席", author: "発芽どんぐりの現場から" },
  { title: "研エンの仲", author: "Ryohei & Ayaka" },
  { title: "J-WAVE TOPPAN INNOVATION WORLD ERA", author: "SPINEAR by J-WAVE" },
  { title: "弁護士放送Podcast", author: "トリカゴ放送" },
  { title: "omoiyari.fm (lean-agile podcast)", author: "yokomichi miura" },
  { title: "hikifune.fm", author: "Yohei Kikuta" },
  { title: "転職透明化ラジオ", author: "rtlaboradio" },
  { title: "mookjp のパソコンサタデーナイト", author: "mookjp" },
  { title: "Today I Learned", author: "Imai and Yusuke" },
  { title: "セキュリティのアレ", author: "セキュリティのアレ" },
  { title: "46fm", author: "seike460" },
  { title: "jamming.fm", author: "jamming.fm" },
  { title: "texta.fm", author: "Design and Engineering team at PIXTA" },
  { title: "Off Topic // オフトピック", author: "Off Topic" },
  {
    title: "Web Rush",
    author: "Dan Wahlin, John Papa, Ward Bell, Craig Shoemaker",
  },
  { title: "Secure Liaison", author: "Secure旅団" },
  { title: "AirSap", author: "AirSap" },
  { title: "いんよう！", author: "いんよう！" },
  { title: "Koiki.fm #小粋fm", author: "小粋ボーイズ" },
  { title: "銀の弾丸ラジオ", author: "Silver Bullet Club" },
  { title: "Yokohama North AM", author: "Ryo Tomidokoro" },
  { title: "The CSS Podcast", author: "The CSS Podcast" },
  { title: "FREE AGENDA by hikaru & yamotty", author: "FREE AGENDA" },
  { title: "「話し方」のハナシ", author: "高山ゆかり（話し方講師）" },
  { title: "ノウカノタネ", author: "ノウカノタネ inc." },
  { title: "Researchat.fm", author: "researchat" },
  { title: "STILL RENDERING // スティレン", author: "Yuka & Takeshi" },
  { title: "はなれより。", author: "関口裕 & 吉竹遼" },
  {
    title: "中村繪里子・吉田尚記の本格雑談くちをひらく",
    author: "ニッポン放送",
  },
  { title: "楽しいラジオ「ドングリFM」", author: "donguri.fm" },
  { title: "未来授業", author: "TOKYO FM" },
  {
    title: "Peapod by Peatix - ここでしか聞けない楽屋トーク",
    author: "Peatix",
  },
  {
    title: "日本人の英語を変える！ポッドキャスト",
    author: "会議通訳者・発音コンサルタント平松里英",
  },
  {
    title: "“MOOK STUDY”日本の歴史（ムックスタディー 日本の歴史）",
    author: "mookmook radio",
  },
  { title: "Kubernetes Podcast from Google", author: "Craig Box" },
  { title: "Google Cloud Platform Podcast", author: "Google Cloud Platform" },
  { title: "前田ヒロ", author: "前田ヒロ" },
  {
    title: "狭くて浅いやつら 漫画（マンガ）・ゲーム・映画・アニメの感想",
    author: "サワダシンヤ",
  },
  { title: "ポッドキャスト Export", author: "灰色ハイジ" },
  { title: "テストラジオ", author: "テストラジオ" },
  { title: "The Potluck", author: "The Potluck" },
  { title: "fukabori.fm", author: "iwashi" },
  { title: "ごりゅごcast", author: "goryugo & haruna1221" },
  { title: "UIT INSIDE", author: "UIT" },
  { title: "React Podcast", author: "Michael Chan" },
  { title: "mozaic.fm", author: "Jxck" },
  { title: "田舎.fm", author: "komatatsu" },
  { title: "人生fm", author: "kirimin" },
  { title: "yatteiki.fm", author: "やっていき手" },
  {
    title: "soussune - エンジニアわいわいポッドキャスト「そうっすね」",
    author: "そうっすね制作委員会",
  },
  { title: "PHPの現場", author: "Masashi Shinbara" },
  { title: "nextstep.fm", author: "nextstep.fm" },
  { title: "mosa.fm", author: "Shoya Ishimaru" },
  { title: "dex.fm", author: "Shintaro Katafuchi & Hiroshi Kurokawa" },
  { title: "Automagic Podcast", author: "Automagic Podcast" },
  { title: "ajitofm", author: "Kenta Suzuki" },
  { title: "#strobofm", author: "Shogo Sensui" },
  { title: "Turing Complete FM", author: "Rui Ueyama" },
  { title: "engineer meeting podcast", author: "エンジニアミーティング" },
  { title: "Misreading Chat", author: "Hajime Morrita, Jun Mukai" },
  { title: "しがないラジオ", author: "shiganaiRadio" },
  { title: "Rebuild", author: "Tatsuhiko Miyagawa" },
  { title: "バイリンガルニュース (Bilingual News)", author: "Michael & Mami" },
  { title: "EM . FM #EMFM", author: "EM.FM" },
];

const ouput = a
  .map((d) => {
    // rss feed　と　hash tag の探索をする
    // 最初の5文字がマッチしたら暫定で入れる
    const short1 = d.title.slice(0, 2);
    const short2 = d.author.slice(0, 2);

    const found = freaksList.find((d) => {
      return (
        JSON.stringify(d).indexOf(short1) !== -1 ||
        JSON.stringify(d).indexOf(short2) !== -1
      );
    });

    let hash = found?.hashtag?.slice(1, -1) || "hashhashhash";
    let url = found?.feed || "urlurlurl";

    return `
  {
    name: "${d.title}",
    hash: "${hash}",
    url: "${url}",
  },
`;
  })
  .join("\n");

Deno.writeTextFile("./test.txt", ouput);
