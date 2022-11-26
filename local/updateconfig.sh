pwd

# ファイルをコピー
cp -f ./src/config.ts ../voicecamp/


# configをプッシュ
cd ../voicecamp/
git add ./config.ts
git commit -m "update config"
git push