:: 导航到构建输出目录
copy C:\Users\cuijiahuan\Documents\GitHub\cuijiahuan-blog\public C:\Users\cuijiahuan\Documents\GitHub\cuijiahuan.github.io
cd C:\Users\cuijiahuan\Documents\GitHub\cuijiahuan.github.io

git init
git add -A
git commit -m 'deploy'

:: 推到仓库的 master 分支
git push -f https://github.com/cuijiahuan/cuijiahuan.github.io master
