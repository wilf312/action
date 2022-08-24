export const templateAction = (ymlText: string) => {
  return `# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
  schedule:
    # 毎時30分前後に実行
    - cron: "30 * * * *"

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Denoの読み込み
      # https://github.com/denoland/setup-deno
      - uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: arkb
        run: |
          git config --global user.email "g.okada.wilf+github@gmail.com"
          git config --global user.name "okada genya(CI)"

${ymlText}
          # 書き出したxmlをJSONに変換
          deno run --allow-write --allow-read src/translate.ts

          # 書き出したファイルをコミットする
          if [[ -z $(git status -s) ]]; then
            echo "no commit change"
            exit 0
          else 
            git add .
            git commit -m "ci"
            git push
          fi
`;
};
