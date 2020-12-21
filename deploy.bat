# 构建
npm run build
# 导航到构建输出目录
cd public

git init
git add -A
git commit -m 'deploy'

# 推到仓库的 master 分支
git push -f https://github.com/cuijiahuan/cuijiahuan.github.io master

cd -