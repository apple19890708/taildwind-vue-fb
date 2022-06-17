npm run build
cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/apple19890708/taildwind-vue-fb.git
git push -f origin main:gh-pages