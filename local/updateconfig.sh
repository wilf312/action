pwd

# ファイルをコピー
cp -f ./src/config.ts ../voicecamp/


# configをプッシュ
cd ../voicecamp/
git add ./config.ts
git commit -m "update config"
git push

# サムネの更新
cd ../voicecamp-thumbnail/
sh local/update_thumb.sh
git add .
git commit -m "update config"
git push
