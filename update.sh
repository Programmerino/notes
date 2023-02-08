#set -e
shopt -s dotglob
sudo umount /home/davis/Documents/Obsidian/ObsidianVault/storage
mv /home/davis/Documents/Obsidian/ObsidianVault/storage/* /home/davis/Zotero/storage/
sudo mount --bind /home/davis/Zotero/storage/ "/home/davis/Documents/Obsidian/ObsidianVault/storage"
grep -rlw --include="*.md" -e "#protected" * >> .gitignore
awk -i inplace '!seen[$0]++' .gitignore
git log --all --pretty=format: --name-only --diff-filter=A > /tmp/test
(! cat /tmp/test | sed '/^[[:space:]]*$/d' | git check-ignore --no-index --stdin) || { echo 'gitignored files are in history! Run change_history.sh before proceeding!' ; exit 1; }
git add .
git rm -r --cached .
git add .
echo Starting cacheBuild
cacheBuild
echo cacheBuild done
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git push || git push --set-upstream origin main --force
