grep -rlw --include="*.md" -e "#protected" * >> .gitignore
awk -i inplace '!seen[$0]++' .gitignore
git add .
git rm -r --cached .
git add .
git ls-files --others -i --exclude-standard > /tmp/ignored
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git filter-repo --invert-paths --paths-from-file /tmp/ignored --force --debug
