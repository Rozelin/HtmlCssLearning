### Git flow with git commands

1) Clone remote repository (get link under button `Clone with HTTPS` in required repo)

> git clone https://github.com/Rozelin/HtmlCssLearning.git

You will get local copy or remote repo on branch `Master`. 
In GitBash console you will see name of current branch in blue color.

Then create new branch (your working branch) out of Master. Set any appropriate branch name instead of `yourNewBranchName`

> git checkout -b yourNewBranchName

Now you see `yourNewBranchName` in git bash console instead of `Master`

Do your changes in this branch. And when you are ready to save these chahges, check which files are unsaved (untracked by Git)

> git status 

This command will show you new or changed files in `red` color.
If you see some files or folders which should not be saved to Git (folder `node_modules` for example), add these files or folders to `.gitignore` file and check `>git status` again. These files should dissappear from `red list`.

To save changed files add these files to tracked list

> git add -u

(-u stands for `untracked` ) or
> git add .

(. stands for `all`) or 
> git add <fileName>

if you need to add any separate file.

Check if files were added. `> git status` will show these files in `green` color.

Now you can commit these files (save to current branch).

> git commit -m 'This is a readable message which describes what was done in this commit'

NOTE: -m stands for `message`. Message is obligatory and shall be wrapped in quotes.

Now check if commit was saved.

> git log

You will see list of latest commits including those which were made to parent branch (Master in this case).

> Ctrl + c 

to quit from log list.

Now checkout Master branch back

> git checkout master

NOTE: you do not need `-b` if you check out existing local branch.

Check files in your folders/IDE - they are the same as they were in Master branch before all your changes.
Now checkout your working branch again.

> git checkout yourNewBranchName

Check files in your folders/IDE

To save your working branch to remote repository do:
> git push origin yourNewBranchName

This command creates new branch `yourNewBranchName` at the remote repo.

If you need to get branch from remote repo, you may fetch it like this:
> git checkout -b remoteBranch origin/remoteBranch 

This will create local `remoteBranch` which will track remote `remoteBranch` branch.
To get latest changes from remote `remoteBranch` branch
> git checkout remoteBranch  
> git pull origin remoteBranch

(this will get changes only for this branch) or 
> git fetch 

(`fetch` will get changes for whole repository)



