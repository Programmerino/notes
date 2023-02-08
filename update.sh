#set -e
shopt -s dotglob
#git filter-repo --invert-paths --paths-from-file /tmp/ignored --force --debug
sudo umount /home/davis/Documents/Obsidian/ObsidianVault/storage
mv /home/davis/Documents/Obsidian/ObsidianVault/storage/* /home/davis/Zotero/storage/
sudo mount --bind /home/davis/Zotero/storage/ "/home/davis/Documents/Obsidian/ObsidianVault/storage"
grep -rlw --include="*.md" -e "#protected" * >> .gitignore
awk -i inplace '!seen[$0]++' .gitignore
git add .
git rm -r --cached .
git add .
echo Starting cacheBuild
cacheBuild
echo cacheBuild done
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git push || git push --set-upstream origin main --force
