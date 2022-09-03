
deno run --allow-write src/main.ts

deno run --allow-net --allow-write src/curlIgnoredDownload.ts

sh local/downloadxml.sh

deno run --allow-write --allow-read src/translate.ts
