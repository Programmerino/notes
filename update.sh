#set -e
shopt -s dotglob
sudo umount /home/davis/Documents/Obsidian/ObsidianVault/storage
mv /home/davis/Documents/Obsidian/ObsidianVault/storage/* /home/davis/Zotero/storage/
sudo mount --bind /home/davis/Zotero/storage/ "/home/davis/Documents/Obsidian/ObsidianVault/storage"
git add .
git rm -r --cached .
git add .
echo Starting cacheBuild
cacheBuild
echo cacheBuild done
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git push