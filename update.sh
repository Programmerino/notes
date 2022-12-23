sudo mount --bind /home/davis/Zotero/storage/ "/home/davis/Documents/Obsidian/ObsidianVault/storage"
git add .
git rm -r --cached .
git add .
cachixFull
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git push