# Selector_Practice
Use `npx open cypress` to open cypress
If that doesn't work, please make sure you have  `nvm add 18` and `npm use 18` on there. 

The app lives in introdemo. 

General process to manipulate this is:
1. clone the repository using `git clone https://github.com/alexjoel42/Selector_Practice.git `
2. Use `npm install` to get the packages installed **inside of introdemo**
3. Use `npm run dev` **inside of introdemo**
4. Use `git checkout -b "name of branch"` to branch off of it
5. Edit and `npm run dev` to edit accordingly
6. Use `git status` after you add something to check what you added against the main repo
7. Use `git add .` to add all the things
8. Use `git commit -m "insert message here"` to commit
9. Use `git push` to push to your branch
10. Then I'll merge the PR :) .
11. If you notice that you're getting
```git
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
Then it's a good time to potentially git rebase. Somebody might've made a commit to main while you were hanging. Avoid this by working on a different branch

12. If you are just here to vibe and click on things, just run `npx open cypress` within the topmost directory after cloning (steps 1-2) and start playing around with the spec.cy.js file. 

Challenges could be: 
 1. Making clickButtonUntil(targetCount)  into a .cy.js function and importing it
 2. Seeing if you could do cross-origin shenangins 
 3. Selecting  Heading 1 with a link and conquering cross origin



