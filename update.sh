#set -e
shopt -s dotglob
./step1.sh
git log --all --pretty=format: --name-only --diff-filter=A > /tmp/test
(! cat /tmp/test | sed '/^[[:space:]]*$/d' | git check-ignore --no-index --stdin) || { echo 'gitignored files are in history! Run change_history.sh before proceeding!' ; exit 1; }
git add .
git rm -r --cached .
git add .
#echo Starting cacheBuild
#cacheBuild
#echo cacheBuild done
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git push --set-upstream origin main || git push --set-upstream origin main --force
