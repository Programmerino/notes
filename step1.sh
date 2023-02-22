#!/bin/sh
shopt -s dotglob
sudo umount /home/davis/Documents/Obsidian/ObsidianVault/storage
mv /home/davis/Documents/Obsidian/ObsidianVault/storage/* /home/davis/Zotero/storage/
sudo mount --bind /home/davis/Zotero/storage/ "/home/davis/Documents/Obsidian/ObsidianVault/storage"
grep -rlw --include="*.md" -e "#protected" * >> .gitignore
awk -i inplace '!seen[$0]++' .gitignore