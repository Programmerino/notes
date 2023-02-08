git log --all --pretty=format: --name-only --diff-filter=A > /tmp/test
cat /tmp/test | sed '/^[[:space:]]*$/d' | git check-ignore --no-index --stdin >> .gitignore
grep -rlw --include="*.md" -e "#protected" * >> .gitignore
awk -i inplace '!seen[$0]++' .gitignore
git add .
git rm -r --cached .
git add .
git commit -m "$(date -d yesterday '+%B %e, %Y')"
git filter-repo --invert-paths --paths-from-file .gitignore --force --debug
git remote add origin "https://github.com/Programmerino/notes.git"
