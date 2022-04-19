# Bkuptool API JS

Course: NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID

Instructor: Rodrigo Manginho

Link: https://www.udemy.com/course/tdd-com-mango/

## Steps

**Git Configuration**

```console
$> git config --global core.editor code

$> git config --global --edit

$> git config --global core.pager 'less --raw-control-chars'
```

**Git Config file content:**
```markdown
[user]
    email = `email`
    name = `username`
[core]
    editor = code --wait
[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    l = !git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
    unstage = git reset HEAD
    undo = git checkout .
```

### Typescript + ESlint

```console
$> npm i -D typescript @types/node
```

```console
$> npm install --save-dev typescript@^4 eslint@^7.12.1 eslint-plugin-promise@^5.0.0 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 @typescript-eslint/eslint-plugin@^4.0.1 eslint-config-standard-with-typescript@latest
```

## Links

- [typescript](https://www.typescriptlang.org/)
- [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [node.green](https://node.green/#ES2020)
- [standardjs](https://standardjs.com/)
- [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) or
- [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslintignore](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file) 
- [prittierignore](https://prettier.io/docs/en/ignore.html)
- [Husky](https://github.com/typicode/husky) or
- [Husky](https://typicode.github.io/husky/#/) 
- [lint-staged](https://github.com/okonet/lint-staged)
- [Correção Husky + Lint-staged](https://stackoverflow.com/questions/66109623/husky-lint-staged-not-working-on-windows-command-not-found)
- [Prittier](https://www.npmjs.com/package/prettier) 
- [Husky + LintStaged](https://laurieontech.com/posts/husky/)
 

