# KDC Init

Initialize KDC Projects with npm & git. Security included!

[![ver](https://img.shields.io/npm/v/@kdcio/init?style=flat-square)](https://www.npmjs.com/package/@kdcio/init)
[![build](https://img.shields.io/github/workflow/status/kdcio/init/build?style=flat-square)](https://github.com/kdcio/init/actions?query=workflow%3Abuild)
[![size](https://img.shields.io/bundlephobia/min/@kdcio/init?style=flat-square)](https://bundlephobia.com/result?p=@kdcio/init)
[![license](https://img.shields.io/github/license/kdcio/init?style=flat-square)](https://github.com/kdcio/init/blob/master/LICENSE)

## Features

0. Install [gpg](https://gnupg.org/) - Encrypt files using a public and a secret key identified by your email address.
1. Install [git-secrets](https://github.com/awslabs/git-secrets) - Prevents you from committing passwords and other sensitive information in plain text to a git repository.
2. Install [git-secrets](https://git-secret.io/) - Encrypt files that containt passwords and other sensitive information before comitting to a git repository.
3. Run ```git init``` - Initialize git repository.
4. Run ```npm init``` - Initialize npm project.
5. Install husky and lint-staged - Enable git hooks to make use of [git-secrets](https://github.com/awslabs/git-secrets).

## Prerequisites

Please install the following before using:

- [brew](https://brew.sh/)
- [git](https://formulae.brew.sh/formula/git#default)
- [node, npm & npx](https://formulae.brew.sh/formula/node@12#default)

## Usage

```bash
npx @kdcio/init <project-name>
```
