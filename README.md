# Transport NSW real-time - TimeFrame

Your project is live at:

**[https://vercel.com/h-mannings-projects/v0-transport-nsw-real-time](https://vercel.com/h-mannings-projects/v0-transport-nsw-real-time)**

The "original code" in my project was done all though the terminal window on the Raspberry Pi. 
I was unable to create any files to demonstrate on my Git Repository - Plese refer to the explainer video for screenshots of my work. 

Listed below is my process to connect to the Raspberry Pi 5 - and my attempts to attatch relevant info from the raspberry Pi into the github repo.

Last login: Sun Oct 19 21:16:53 on ttys001
hanakomanning@Hanakos-MacBook-Air ~ % node install node
zsh: command not found: node
hanakomanning@Hanakos-MacBook-Air ~ % brew install node
==> Fetching downloads for: node
==> Downloading https://ghcr.io/v2/homebrew/core/node/manifests/24.10.0-1
######################################################################### 100.0%
==> Fetching dependencies for node: brotli, c-ares, icu4c@77, libnghttp2, libnghttp3, ca-certificates, openssl@3, libngtcp2, libuv, simdjson, readline, sqlite, uvwasi, lz4, xz and zstd
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/manifests/1.1.0-2
######################################################################### 100.0%
==> Fetching brotli
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/blobs/sha256:64750425b75
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/c-ares/manifests/1.34.5-1
######################################################################### 100.0%
==> Fetching c-ares
==> Downloading https://ghcr.io/v2/homebrew/core/c-ares/blobs/sha256:76858a7f6dd
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/77/manifests/77.1
######################################################################### 100.0%
==> Fetching icu4c@77
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/77/blobs/sha256:19f6b5fef
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp2/manifests/1.67.1
######################################################################### 100.0%
==> Fetching libnghttp2
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp2/blobs/sha256:01a4aa0
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp3/manifests/1.12.0
######################################################################### 100.0%
==> Fetching libnghttp3
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp3/blobs/sha256:1eb2c78
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2025-
######################################################################### 100.0%
==> Fetching ca-certificates
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:bf
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/manifests/3.6.0
######################################################################### 100.0%
==> Fetching openssl@3
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/blobs/sha256:9a8fa2ae
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libngtcp2/manifests/1.17.0
######################################################################### 100.0%
==> Fetching libngtcp2
==> Downloading https://ghcr.io/v2/homebrew/core/libngtcp2/blobs/sha256:382644b0
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/manifests/1.51.0-1
######################################################################### 100.0%
==> Fetching libuv
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/blobs/sha256:47f6323a3b3a
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/simdjson/manifests/4.0.7
######################################################################### 100.0%
==> Fetching simdjson
==> Downloading https://ghcr.io/v2/homebrew/core/simdjson/blobs/sha256:847446278
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.3.1
######################################################################### 100.0%
==> Fetching readline
==> Downloading https://ghcr.io/v2/homebrew/core/readline/blobs/sha256:3afa0c228
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.50.4-2
######################################################################### 100.0%
==> Fetching sqlite
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/blobs/sha256:ac752e123cf
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/uvwasi/manifests/0.0.23-1
######################################################################### 100.0%
==> Fetching uvwasi
==> Downloading https://ghcr.io/v2/homebrew/core/uvwasi/blobs/sha256:3bbe2380eb1
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.10.0-1
######################################################################### 100.0%
==> Fetching lz4
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:5bd143b7b78498
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.8.1
######################################################################### 100.0%
==> Fetching xz
==> Downloading https://ghcr.io/v2/homebrew/core/xz/blobs/sha256:dcd7823f2624cbc
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.7-1
######################################################################### 100.0%
==> Fetching zstd
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:55a4e0a4a92f5
######################################################################### 100.0%
==> Fetching node
==> Downloading https://ghcr.io/v2/homebrew/core/node/blobs/sha256:b59155fcc0b6d
######################################################################### 100.0%
==> Installing dependencies for node: brotli, c-ares, icu4c@77, libnghttp2, libnghttp3, ca-certificates, openssl@3, libngtcp2, libuv, simdjson, readline, sqlite, uvwasi, lz4, xz and zstd
==> Installing node dependency: brotli
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/manifests/1.1.0-2
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/72b36368116298518fd66e638dfbe8cb541d8db2d33e279683bbdb4b79c73e0d--brotli-1.1.0-2.bottle_manifest.json
==> Pouring brotli--1.1.0.arm64_sequoia.bottle.2.tar.gz
🍺  /opt/homebrew/Cellar/brotli/1.1.0: 28 files, 1.7MB
==> Installing node dependency: c-ares
==> Downloading https://ghcr.io/v2/homebrew/core/c-ares/manifests/1.34.5-1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/c52b1c91460667312755a235f78ac192a45bff39befbba6da9aa72a17263c559--c-ares-1.34.5-1.bottle_manifest.json
==> Pouring c-ares--1.34.5.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/c-ares/1.34.5: 176 files, 1MB
==> Installing node dependency: icu4c@77
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/77/manifests/77.1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/35ec2c3adb94255ba47424a4334da9616d97e1ec6d59ed907b368535018bed0a--icu4c@77-77.1.bottle_manifest.json
==> Pouring icu4c@77--77.1.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/icu4c@77/77.1: 277 files, 81.3MB
==> Installing node dependency: libnghttp2
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp2/manifests/1.67.1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/4ab02c0d5b434fceba7c6d80df57d28c94c7e93f966dce66b789029ded4773e3--libnghttp2-1.67.1.bottle_manifest.json
==> Pouring libnghttp2--1.67.1.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libnghttp2/1.67.1: 14 files, 739.5KB
==> Installing node dependency: libnghttp3
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp3/manifests/1.12.0
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/870c7405e7536d3964d6a4063f552f6ba7db08a1057381685a9f9c177df71c9f--libnghttp3-1.12.0.bottle_manifest.json
==> Pouring libnghttp3--1.12.0.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libnghttp3/1.12.0: 20 files, 589.2KB
==> Installing node dependency: ca-certificates
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2025-
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/4d4fbd31e178e7d46676ee46b8a629a56cf084bda67d2ae2d543a7a9b8d0718a--ca-certificates-2025-09-09-1.bottle_manifest.json
==> Pouring ca-certificates--2025-09-09.all.bottle.1.tar.gz
==> Regenerating CA certificate bundle from keychain, this may take a while...
🍺  /opt/homebrew/Cellar/ca-certificates/2025-09-09: 4 files, 232.9KB
==> Installing node dependency: openssl@3
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/manifests/3.6.0
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/403c903e557d19d801f4c6b4f635c9553af72a487024139a5773e636c884ef9e--openssl@3-3.6.0.bottle_manifest.json
==> Pouring openssl@3--3.6.0.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openssl@3/3.6.0: 7,609 files, 36.0MB
==> Installing node dependency: libngtcp2
==> Downloading https://ghcr.io/v2/homebrew/core/libngtcp2/manifests/1.17.0
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/f9ac96017064e1c9c23c32050e1fedb487cd3f6a744fc6c8bfd3a3ee8fa90605--libngtcp2-1.17.0.bottle_manifest.json
==> Pouring libngtcp2--1.17.0.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libngtcp2/1.17.0: 21 files, 1.3MB
==> Installing node dependency: libuv
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/manifests/1.51.0-1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/3134253b57ab9327739c97027f8b90160da109e06dda0dc4d2d222a6df0ab9b8--libuv-1.51.0-1.bottle_manifest.json
==> Pouring libuv--1.51.0.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/libuv/1.51.0: 34 files, 1.2MB
==> Installing node dependency: simdjson
==> Downloading https://ghcr.io/v2/homebrew/core/simdjson/manifests/4.0.7
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/b037dadb18347fedfc8816e145a3fee0a418844d6deb50c11adeb4ac69564964--simdjson-4.0.7.bottle_manifest.json
==> Pouring simdjson--4.0.7.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/simdjson/4.0.7: 17 files, 5.9MB
==> Installing node dependency: readline
==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.3.1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/52cb2bb3f0d9e66789968b865501c41ed80dc303eb488939476b309f1d350dc5--readline-8.3.1.bottle_manifest.json
==> Pouring readline--8.3.1.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/readline/8.3.1: 56 files, 2.6MB
==> Installing node dependency: sqlite
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.50.4-2
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/cc0b46a30077b6cb9f6927fc0c81145398349a0ba416b914b1e5485d0d678231--sqlite-3.50.4-2.bottle_manifest.json
==> Pouring sqlite--3.50.4.arm64_sequoia.bottle.2.tar.gz
🍺  /opt/homebrew/Cellar/sqlite/3.50.4: 13 files, 4.9MB
==> Installing node dependency: uvwasi
==> Downloading https://ghcr.io/v2/homebrew/core/uvwasi/manifests/0.0.23-1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/d9fc39e8e8eb3c4e33b14bafb8f46ce7c30a8814a9d2ff809f4a27525ec96893--uvwasi-0.0.23-1.bottle_manifest.json
==> Pouring uvwasi--0.0.23.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/uvwasi/0.0.23: 15 files, 282.7KB
==> Installing node dependency: lz4
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.10.0-1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/8e11e90eb21a06e0f199af9d80e011e3693c77dd353b2477579d95c8471a5802--lz4-1.10.0-1.bottle_manifest.json
==> Pouring lz4--1.10.0.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/lz4/1.10.0: 24 files, 713.6KB
==> Installing node dependency: xz
==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.8.1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/86a115cc1d43ff8a480fd907f812e70a403e1675d8a7223f61bbb08cbd2adc27--xz-5.8.1.bottle_manifest.json
==> Pouring xz--5.8.1.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/xz/5.8.1: 96 files, 2.5MB
==> Installing node dependency: zstd
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.7-1
Already downloaded: /Users/hanakomanning/Library/Caches/Homebrew/downloads/14f45413747fef87558cd195b1104e55d9739f9574f146051dbd6569ded74a94--zstd-1.5.7-1.bottle_manifest.json
==> Pouring zstd--1.5.7.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/zstd/1.5.7: 32 files, 2.2MB
==> Installing node
==> Pouring node--24.10.0.arm64_sequoia.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/node/24.10.0: 2,468 files, 75.7MB
==> Running `brew cleanup node`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Caveats
zsh completions have been installed to:
  /opt/homebrew/share/zsh/site-functions
hanakomanning@Hanakos-MacBook-Air ~ % npm
npm <command>

Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

All commands:

    access, adduser, audit, bugs, cache, ci, completion,
    config, dedupe, deprecate, diff, dist-tag, docs, doctor,
    edit, exec, explain, explore, find-dupes, fund, get, help,
    help-search, init, install, install-ci-test, install-test,
    link, ll, login, logout, ls, org, outdated, owner, pack,
    ping, pkg, prefix, profile, prune, publish, query, rebuild,
    repo, restart, root, run, sbom, search, set, shrinkwrap,
    star, stars, start, stop, team, test, token, undeprecate,
    uninstall, unpublish, unstar, update, version, view, whoami

Specify configs in the ini-formatted file:
    /Users/hanakomanning/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@11.6.0 /opt/homebrew/lib/node_modules/npm
hanakomanning@Hanakos-MacBook-Air ~ % mkdir code
hanakomanning@Hanakos-MacBook-Air ~ % cd code
hanakomanning@Hanakos-MacBook-Air code % npx create-next-app@latest
Need to install the following packages:
create-next-app@15.5.6
Ok to proceed? (y) 

✔ What is your project named? … timeframe
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/hanakomanning/code/timeframe.

Using npm.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 397 packages, and audited 398 packages in 24s

165 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created timeframe at /Users/hanakomanning/code/timeframe

npm notice
npm notice New patch version of npm available! 11.6.0 -> 11.6.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.6.2
npm notice To update run: npm install -g npm@11.6.2
npm notice
hanakomanning@Hanakos-MacBook-Air code % ssh-keygen           
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/hanakomanning/.ssh/id_ed25519): 
Created directory '/Users/hanakomanning/.ssh'.
Enter passphrase for "/Users/hanakomanning/.ssh/id_ed25519" (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/hanakomanning/.ssh/id_ed25519
Your public key has been saved in /Users/hanakomanning/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:EC3PXP9Jbns3InJqPxY4i/xxifrTTHmfVwvYXJ58uE0 hanakomanning@Hanakos-MacBook-Air.local
The key's randomart image is:
+--[ED25519 256]--+
|      ..         |
|      ... .      |
|      .= . .     |
|       .+   . .. |
|        S . =++o.|
|         o.=.=*+E|
|      . .o*oo.o==|
|       o.=oB .o==|
|       .++B.o ..+|
+----[SHA256]-----+
hanakomanning@Hanakos-MacBook-Air code % cd        
hanakomanning@Hanakos-MacBook-Air ~ % cat ./.ssh/id_ed25519
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDjcV+eoFUjzODK0IAESytOJ2el9xb2YEbstoaGRgGyAgAAALCPWaxOj1ms
TgAAAAtzc2gtZWQyNTUxOQAAACDjcV+eoFUjzODK0IAESytOJ2el9xb2YEbstoaGRgGyAg
AAAEDuNwGTT9hnQoQEgbAECdSQ5ylu0vwa0mmf1ssonZ8MveNxX56gVSPM4MrQgARLK04n
Z6X3FvZgRuy2hoZGAbICAAAAJ2hhbmFrb21hbm5pbmdASGFuYWtvcy1NYWNCb29rLUFpci
5sb2NhbAECAwQFBg==
-----END OPENSSH PRIVATE KEY-----
hanakomanning@Hanakos-MacBook-Air ~ % ssh-keygen -t rsa -b 4096 -C "hanako.manning@student.uts.edu.au"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hanakomanning/.ssh/id_rsa): 
Enter passphrase for "/Users/hanakomanning/.ssh/id_rsa" (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/hanakomanning/.ssh/id_rsa
Your public key has been saved in /Users/hanakomanning/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:4NxHLeVaDhozmtMTmDAyynPOjS6uuAxFyvveOXgQSzA hanako.manning@student.uts.edu.au
The key's randomart image is:
+---[RSA 4096]----+
|  o o       .    |
|.E o o o   +     |
|.o+.  + = + +    |
|.o=ooo * B *     |
|..o+o.* S o .    |
| .oo   . o       |
|.o .o            |
|= o..o.          |
|=+.o.o.          |
+----[SHA256]-----+
hanakomanning@Hanakos-MacBook-Air ~ % cat ./.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC0PDevrXgbXX+RXNz1vJIhR4Su/Zb5hp4dDft7WiMtpUnWLPyXi3Pu0A3DY8Li/SGtsJb8ZZTBk/yC6qYdsNlMolznkEdYmUaD7tCYewFx2m9NWquyvaeTzJiujLf5/hbNUgylI6r//r7fiGz7Rzv1/yN7rKjfmYa3paIxW1Ua5eSrz/h1WfRiHiOs1y4+dZR4YcEYyqrwkhS2Ej0BEB6SrdP/FWBvotfx9l4tT5k9kCfoQ2XnEDgkx0c5WyMemNLsC8OCemO+Dsrh0uYTX0hzdo3RXO+V0XS2wAZmsa1k0sQkCo7cEom5NYdlw5yC2PNTeAPD4TUCkvD+E+euwtmsbfc/xfKrxaoiUnbTMahbO7FkPwoKcAP9Loz8fcyDogLHGZK5zpJRjYJ1eKLSivUs3J4kT/s9lmpbz6c5Os0qU/O6+LFSRNDPfKCwn8aUVWl5L0cLJgNcm0pNmcRLidiQtFbx3cKjglRButvgLD5hlLW43KYTCQQTJBEEMfZGbtq1imGCYvocu59YIXbzwsFfDYPjC8hQMgTzUEbP8SuKzY9YJeTZq8cu65FEnsOshfG2NlTbo8WPVumqFk5afjNPBYyJpK52g4Prj6L+FVA4AUJHp2MZkbJyduO8vfgKFqtttvlCFnVH8YM8rOwWKi1H+9lTsboXSEYZJCvuL+l3YQ== hanako.manning@student.uts.edu.au
hanakomanning@Hanakos-MacBook-Air ~ % 
hanakomanning@Hanakos-MacBook-Air ~ % 
hanakomanning@Hanakos-MacBook-Air ~ % 
hanakomanning@Hanakos-MacBook-Air ~ % cd code 
hanakomanning@Hanakos-MacBook-Air code % cd timeframe 
hanakomanning@Hanakos-MacBook-Air timeframe % echo "# timeframe" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/h-manning/timeframe.git
git push -u origin main

Reinitialized existing Git repository in /Users/hanakomanning/code/timeframe/.git/
[main 31210aa] first commit
 Committer: Hanako Manning <hanakomanning@Hanakos-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+)
Username for 'https://github.com': ^C
hanakomanning@Hanakos-MacBook-Air timeframe % git config --global user.name "Hanako" 
hanakomanning@Hanakos-MacBook-Air timeframe % git config --global user.email "hanako.manning@student.uts.edu.au""
dquote> git init                              
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:h-manning/timeframe.git
git push -u origin main
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:h-manning/timeframe.git
git push -u origin main
Reinitialized existing Git repository in /Users/hanakomanning/code/timeframe/.git/
On branch main
nothing to commit, working tree clean
error: remote origin already exists.
Username for 'https://github.com': h-manning
Password for 'https://h-manning@github.com': 
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://github.com/h-manning/timeframe.git/'
hanakomanning@Hanakos-MacBook-Air timeframe % ]
zsh: command not found: ]
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % npx shadcn@latest add "https://v0.app/chat/b/b_2QnXbn6B4PA?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Fov2B9L96cC3-fD7.YbVQImPz2oBxo8rjMeRmCqXx3i0E12bmYvCXSVT1g0J3Vb0ROO2EM_KY3pc.JcVaErQzJLOhtUaw86g6WQ"
Need to install the following packages:
shadcn@3.4.2
Ok to proceed? (y) 

npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
✔ You need to create a components.json file to add components. Proceed? … yes
✔ Which color would you like to use as the base color? › Neutral
✔ Writing components.json.
Please review v0-generated code before incorporating it into your project to ensure completeness and accuracy.

hanakomanning@Hanakos-MacBook-Air timeframe % npx run dev
Need to install the following packages:
run@1.5.0
Ok to proceed? (y) 

Watching /Users/hanakomanning/code/timeframe and all sub-directories not excluded by your .gitignore. Will not monitor dotfiles.
Found & ignored ./.git ; is listed in .gitignore
Found & ignored ./app ; is listed in .gitignore
Found & ignored ./nextjs-tnsw-bus-120 ; is listed in .gitignore
Found & ignored ./node_modules ; is listed in .gitignore
Found & ignored ./public ; is listed in .gitignore
Found & ignored ./src ; is listed in .gitignore
Found & ignored ./README.md ; is listed in .gitignore
Found & ignored ./components.json ; is listed in .gitignore
Found & ignored ./eslint.config.mjs ; is listed in .gitignore
Found & ignored ./next-env.d.ts ; is listed in .gitignore
Found & ignored ./next.config.ts ; is listed in .gitignore
Found & ignored ./package-lock.json ; is listed in .gitignore
Found & ignored ./package.json ; is listed in .gitignore
Found & ignored ./postcss.config.mjs ; is listed in .gitignore
Found & ignored ./tsconfig.json ; is listed in .gitignore

Starting: dev
node:internal/modules/cjs/loader:1423
  throw err;
  ^

Error: Cannot find module '/Users/hanakomanning/code/timeframe/dev'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1420:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1058:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1063:22)
    at Module._load (node:internal/modules/cjs/loader:1226:37)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.10.0
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % 
hanakomanning@Hanakos-MacBook-Air timeframe % python3
Python 3.13.5 (v3.13.5:6cb20a219a8, Jun 11 2025, 12:23:45) [Clang 16.0.0 (clang-1600.0.26.6)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> exit()
hanakomanning@Hanakos-MacBook-Air timeframe % ssh hanapi@raspberrypi.local
The authenticity of host 'raspberrypi.local (fe80::2838:22bf:913f:5aeb%en0)' can't be established.
ED25519 key fingerprint is SHA256:WrXbzywmMdgA0xca1mX4Hhg6jnAqNzbHbF12gnVBcO0.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'raspberrypi.local' (ED25519) to the list of known hosts.
hanapi@raspberrypi.local's password: 
Linux raspberrypi 6.12.47+rpt-rpi-2712 #1 SMP PREEMPT Debian 1:6.12.47-1+rpt1 (2025-09-16) aarch64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Sat Oct 25 20:10:40 2025 from 192.168.0.141
hanapi@raspberrypi:~ $ Connection to raspberrypi.local closed by remote host.
Connection to raspberrypi.local closed.
hanakomanning@Hanakos-MacBook-Air timeframe % ssh hanapi@raspberrypi.local
hanapi@raspberrypi.local's password: 
Linux raspberrypi 6.12.47+rpt-rpi-2712 #1 SMP PREEMPT Debian 1:6.12.47-1+rpt1 (2025-09-16) aarch64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Sat Oct 25 20:26:23 2025 from fe80::144b:68a3:fcfc:829b%wlan0
hanapi@raspberrypi:~ $ htop
hanapi@raspberrypi:~ $ ps -ef 
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 20:42 ?        00:00:00 /sbin/init splash
root           2       0  0 20:42 ?        00:00:00 [kthreadd]
root           3       2  0 20:42 ?        00:00:00 [pool_workqueue_release]
root           4       2  0 20:42 ?        00:00:00 [kworker/R-kvfree_rcu_reclaim]
root           5       2  0 20:42 ?        00:00:00 [kworker/R-rcu_gp]
root           6       2  0 20:42 ?        00:00:00 [kworker/R-sync_wq]
root           7       2  0 20:42 ?        00:00:00 [kworker/R-slub_flushwq]
root           8       2  0 20:42 ?        00:00:00 [kworker/R-netns]
root           9       2  0 20:42 ?        00:00:00 [kworker/0:0-events]
root          10       2  0 20:42 ?        00:00:00 [kworker/0:0H-events_highpri]
root          11       2  0 20:42 ?        00:00:00 [kworker/0:1-events_power_efficient]
root          12       2  0 20:42 ?        00:00:00 [kworker/u16:0-v3d_render]
root          13       2  0 20:42 ?        00:00:00 [kworker/R-mm_percpu_wq]
root          14       2  0 20:42 ?        00:00:00 [rcu_tasks_kthread]
root          15       2  0 20:42 ?        00:00:00 [rcu_tasks_rude_kthread]
root          16       2  0 20:42 ?        00:00:00 [rcu_tasks_trace_kthread]
root          17       2  0 20:42 ?        00:00:00 [ksoftirqd/0]
root          18       2  0 20:42 ?        00:00:00 [rcu_preempt]
root          19       2  0 20:42 ?        00:00:00 [rcu_exp_par_gp_kthread_worker/0]
root          20       2  0 20:42 ?        00:00:00 [rcu_exp_gp_kthread_worker]
root          21       2  0 20:42 ?        00:00:00 [migration/0]
root          22       2  0 20:42 ?        00:00:00 [cpuhp/0]
root          23       2  0 20:42 ?        00:00:00 [cpuhp/1]
root          24       2  0 20:42 ?        00:00:00 [migration/1]
root          25       2  0 20:42 ?        00:00:00 [ksoftirqd/1]
root          26       2  0 20:42 ?        00:00:00 [kworker/1:0-events]
root          27       2  0 20:42 ?        00:00:00 [kworker/1:0H-kblockd]
root          28       2  0 20:42 ?        00:00:00 [cpuhp/2]
root          29       2  0 20:42 ?        00:00:00 [migration/2]
root          30       2  0 20:42 ?        00:00:00 [ksoftirqd/2]
root          31       2  0 20:42 ?        00:00:00 [kworker/2:0-cgroup_destroy]
root          32       2  0 20:42 ?        00:00:00 [kworker/2:0H-events_highpri]
root          33       2  0 20:42 ?        00:00:00 [cpuhp/3]
root          34       2  0 20:42 ?        00:00:00 [migration/3]
root          35       2  0 20:42 ?        00:00:00 [ksoftirqd/3]
root          36       2  0 20:42 ?        00:00:00 [kworker/3:0-events_power_efficient]
root          37       2  0 20:42 ?        00:00:00 [kworker/3:0H-events_highpri]
root          38       2  0 20:42 ?        00:00:00 [kworker/u17:0-events_unbound]
root          39       2  0 20:42 ?        00:00:00 [kworker/u18:0-events_unbound]
root          40       2  0 20:42 ?        00:00:00 [kworker/u19:0-events_unbound]
root          41       2  0 20:42 ?        00:00:00 [kworker/u20:0-kvfree_rcu_reclaim]
root          42       2  0 20:42 ?        00:00:00 [kdevtmpfs]
root          43       2  0 20:42 ?        00:00:00 [kworker/R-inet_frag_wq]
root          44       2  0 20:42 ?        00:00:00 [kauditd]
root          45       2  0 20:42 ?        00:00:00 [khungtaskd]
root          46       2  0 20:42 ?        00:00:00 [oom_reaper]
root          47       2  0 20:42 ?        00:00:00 [kworker/u17:1-events_unbound]
root          48       2  0 20:42 ?        00:00:00 [kworker/R-writeback]
root          49       2  0 20:42 ?        00:00:00 [kcompactd0]
root          50       2  0 20:42 ?        00:00:00 [kcompactd1]
root          51       2  0 20:42 ?        00:00:00 [kcompactd2]
root          52       2  0 20:42 ?        00:00:00 [kcompactd3]
root          53       2  0 20:42 ?        00:00:00 [kcompactd4]
root          54       2  0 20:42 ?        00:00:00 [kcompactd5]
root          55       2  0 20:42 ?        00:00:00 [kcompactd6]
root          56       2  0 20:42 ?        00:00:00 [kcompactd7]
root          57       2  0 20:42 ?        00:00:00 [kworker/R-kintegrityd]
root          58       2  0 20:42 ?        00:00:00 [kworker/1:1-mm_percpu_wq]
root          59       2  0 20:42 ?        00:00:00 [kworker/R-kblockd]
root          60       2  0 20:42 ?        00:00:00 [kworker/R-blkcg_punt_bio]
root          61       2  0 20:42 ?        00:00:00 [kworker/u18:1-async]
root          62       2  0 20:42 ?        00:00:00 [kworker/u18:2-events_unbound]
root          63       2  0 20:42 ?        00:00:00 [kworker/u18:3-kvfree_rcu_reclaim]
root          64       2  0 20:42 ?        00:00:00 [watchdogd]
root          65       2  0 20:42 ?        00:00:00 [kworker/2:1-events]
root          66       2  0 20:42 ?        00:00:00 [kworker/2:1H-kblockd]
root          67       2  0 20:42 ?        00:00:00 [kworker/R-rpciod]
root          68       2  0 20:42 ?        00:00:00 [kworker/R-xprtiod]
root          69       2  0 20:42 ?        00:00:00 [kworker/u19:1-events_unbound]
root          70       2  0 20:42 ?        00:00:00 [kswapd0]
root          71       2  0 20:42 ?        00:00:00 [kswapd1]
root          72       2  0 20:42 ?        00:00:00 [kswapd2]
root          73       2  0 20:42 ?        00:00:00 [kswapd3]
root          74       2  0 20:42 ?        00:00:00 [kswapd4]
root          75       2  0 20:42 ?        00:00:00 [kswapd5]
root          76       2  0 20:42 ?        00:00:00 [kswapd6]
root          77       2  0 20:42 ?        00:00:00 [kswapd7]
root          78       2  0 20:42 ?        00:00:00 [kworker/R-nfsiod]
root          79       2  0 20:42 ?        00:00:00 [kworker/R-kthrotld]
root          80       2  0 20:42 ?        00:00:00 [kworker/3:1-pm]
root          81       2  0 20:42 ?        00:00:00 [kworker/3:2-events]
root          82       2  0 20:42 ?        00:00:00 [kworker/3:3-mm_percpu_wq]
root          83       2  0 20:42 ?        00:00:00 [kworker/3:4-rcu_gp]
root          84       2  0 20:42 ?        00:00:00 [kworker/3:5-pm]
root          85       2  0 20:42 ?        00:00:00 [kworker/u20:1-events_unbound]
root          87       2  0 20:42 ?        00:00:00 [hwrng]
root          88       2  0 20:42 ?        00:00:00 [kworker/R-iscsi_conn_cleanup]
root          89       2  0 20:42 ?        00:00:00 [kworker/R-nvme-wq]
root          90       2  0 20:42 ?        00:00:00 [kworker/R-nvme-reset-wq]
root          91       2  0 20:42 ?        00:00:00 [kworker/R-nvme-delete-wq]
root          92       2  0 20:42 ?        00:00:00 [kworker/R-DWC Notification WorkQ]
root          93       2  0 20:42 ?        00:00:00 [kworker/R-uas]
root          94       2  0 20:42 ?        00:00:00 [kworker/3:1H-kblockd]
root          95       2  0 20:42 ?        00:00:01 [kworker/u21:0-brcmf_wq/mmc1:0001:1]
root          96       2  0 20:42 ?        00:00:00 [kworker/u22:0]
root          97       2  0 20:42 ?        00:00:00 [kworker/u23:0]
root          98       2  0 20:42 ?        00:00:00 [kworker/u24:0]
root          99       2  0 20:42 ?        00:00:00 [kworker/u25:0]
root         100       2  0 20:42 ?        00:00:00 [kworker/u20:2+events_unbound]
root         101       2  0 20:42 ?        00:00:00 [irq/38-aerdrv]
root         102       2  0 20:42 ?        00:00:00 [kworker/R-sdhci]
root         103       2  0 20:42 ?        00:00:00 [kworker/u20:3-events_unbound]
root         104       2  0 20:42 ?        00:00:00 [irq/161-mmc0]
root         105       2  0 20:42 ?        00:00:00 [kworker/R-sdhci]
root         106       2  0 20:42 ?        00:00:00 [kworker/u20:4-async]
root         107       2  0 20:42 ?        00:00:00 [kworker/u20:5]
root         108       2  0 20:42 ?        00:00:00 [irq/162-mmc1]
root         111       2  0 20:42 ?        00:00:00 [kworker/u20:6-events_unbound]
root         114       2  0 20:42 ?        00:00:00 [kworker/0:1H-kblockd]
root         115       2  0 20:42 ?        00:00:00 [kworker/R-mmc_complete]
root         165       2  0 20:42 ?        00:00:00 [kworker/1:1H-events_highpri]
root         169       2  0 20:42 ?        00:00:00 [kworker/0:2-cgroup_bpf_destroy]
root         170       2  0 20:42 ?        00:00:00 [kworker/2:2-mm_percpu_wq]
root         171       2  0 20:42 ?        00:00:00 [kworker/R-v3d_bin]
root         172       2  0 20:42 ?        00:00:00 [kworker/R-v3d_render]
root         173       2  0 20:42 ?        00:00:00 [kworker/R-v3d_tfu]
root         174       2  0 20:42 ?        00:00:00 [kworker/R-v3d_csd]
root         175       2  0 20:42 ?        00:00:00 [kworker/R-v3d_cache_clean]
root         176       2  0 20:42 ?        00:00:00 [kworker/R-v3d_cpu]
root         202       2  0 20:42 ?        00:00:00 [jbd2/mmcblk0p2-8]
root         203       2  0 20:42 ?        00:00:00 [kworker/R-ext4-rsv-conversion]
root         222       2  0 20:42 ?        00:00:00 [kworker/R-mld]
root         223       2  0 20:42 ?        00:00:00 [kworker/R-ipv6_addrconf]
root         224       2  0 20:42 ?        00:00:00 [kworker/u16:1-v3d_render]
root         243       2  0 20:42 ?        00:00:00 [kworker/1:2H-kblockd]
root         255       2  0 20:42 ?        00:00:00 [kworker/2:2H-kblockd]
root         326       1  0 20:42 ?        00:00:00 /usr/lib/systemd/systemd-journald
root         342       2  0 20:42 ?        00:00:00 [kworker/u17:2-flush-179:0]
root         345       2  0 20:42 ?        00:00:00 [kworker/1:2-mm_percpu_wq]
root         350       2  0 20:42 ?        00:00:00 [kworker/u19:2]
systemd+     378       1  0 20:42 ?        00:00:00 /usr/lib/systemd/systemd-timesyncd
root         380       2  0 20:42 ?        00:00:00 [kworker/0:3-events]
root         387       1  0 20:42 ?        00:00:00 /usr/lib/systemd/systemd-udevd
root         408       2  0 20:42 ?        00:00:00 [kworker/0:2H-kblockd]
root         413       2  0 20:42 ?        00:00:00 [kworker/2:3-events_power_efficient]
root         453       2  0 20:42 ?        00:00:00 [kworker/3:2H]
root         508       2  0 20:42 ?        00:00:00 [spi10]
root         510       2  0 20:42 ?        00:00:00 [irq/172-vc4 hdmi hpd connected]
root         511       2  0 20:42 ?        00:00:00 [irq/173-vc4 hdmi hpd disconnected]
root         512       2  0 20:42 ?        00:00:00 [cec-vc4-hdmi-0]
root         513       2  0 20:42 ?        00:00:00 [irq/174-vc4 hdmi cec rx]
root         514       2  0 20:42 ?        00:00:00 [irq/175-vc4 hdmi cec tx]
root         523       2  0 20:42 ?        00:00:00 [irq/176-vc4 hdmi hpd connected]
root         524       2  0 20:42 ?        00:00:00 [irq/177-vc4 hdmi hpd disconnected]
root         525       2  0 20:42 ?        00:00:00 [cec-vc4-hdmi-1]
root         526       2  0 20:42 ?        00:00:00 [irq/178-vc4 hdmi cec rx]
root         527       2  0 20:42 ?        00:00:00 [irq/179-vc4 hdmi cec tx]
root         546       2  0 20:42 ?        00:00:00 [card1-crtc0]
root         547       2  0 20:42 ?        00:00:00 [card1-crtc1]
root         548       2  0 20:42 ?        00:00:00 [card1-crtc2]
root         549       2  0 20:42 ?        00:00:00 [card1-crtc3]
root         557       2  0 20:42 ?        00:00:00 [kworker/R-cfg80211]
root         572       2  0 20:42 ?        00:00:00 [kworker/R-brcmf_wq/mmc1:0001:1]
root         573       2  0 20:42 ?        00:00:00 [brcmf_wdog/mmc1:0001:1]
root         577       2  0 20:42 ?        00:00:00 [kworker/2:4]
root         584       2  0 20:42 ?        00:00:00 [irq/184-1000800000.codec]
root         611       2  0 20:42 ?        00:00:00 [kworker/u21:1-hci0]
root         628       2  0 20:42 ?        00:00:00 [kworker/u21:2]
root         635       2  0 20:42 ?        00:00:00 [kworker/u21:3]
_rpc         674       1  0 20:42 ?        00:00:00 /usr/sbin/rpcbind -f -w
root         729       1  0 20:42 ?        00:00:00 /usr/libexec/accounts-daemon
avahi        731       1  0 20:42 ?        00:00:00 avahi-daemon: running [raspberrypi.local]
root         732       1  0 20:42 ?        00:00:00 /usr/libexec/bluetooth/bluetoothd
message+     734       1  0 20:42 ?        00:00:00 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
polkitd      738       1  0 20:42 ?        00:00:00 /usr/lib/polkit-1/polkitd --no-debug --log-level=notice
avahi        741     731  0 20:42 ?        00:00:00 avahi-daemon: chroot helper
root         744       1  0 20:42 ?        00:00:00 /usr/lib/systemd/systemd-logind
root         745       1  0 20:42 ?        00:00:00 /usr/libexec/udisks2/udisksd
root         775       1  0 20:42 ?        00:00:00 /usr/sbin/cron -f
root         783       1  0 20:42 ?        00:00:00 /usr/sbin/blkmapd
root         853       1  0 20:42 ?        00:00:00 /usr/sbin/NetworkManager --no-daemon
root         854       1  0 20:42 ?        00:00:00 /usr/sbin/wpa_supplicant -u -s -O DIR=/run/wpa_supplicant GROUP=netdev
root         875       2  0 20:42 ?        00:00:00 [kworker/u16:2-v3d_tfu]
root         881       1  0 20:42 ?        00:00:00 /usr/sbin/ModemManager
root         882       2  0 20:42 ?        00:00:00 [krfcommd]
root         996       1  0 20:42 ?        00:00:00 /usr/sbin/cupsd -l
vnc         1000       1  0 20:42 ?        00:00:00 /bin/sh /usr/sbin/wayvnc-run.sh
root        1013       1  0 20:42 ?        00:00:00 /usr/sbin/lightdm
vnc         1026    1000 30 20:42 ?        00:01:28 wayvnc --detached --gpu --config /etc/wayvnc/config --socket /tmp/wayvnc/wayvncctl.sock
root        1028       1  0 20:42 ?        00:00:00 sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups
lp          1039     996  0 20:42 ?        00:00:00 /usr/lib/cups/notifier/dbus dbus://
root        1049       1  0 20:42 ?        00:00:00 /sbin/agetty -o -- \u --noreset --noclear --keep-baud 115200,57600,38400,9600 - vt220
root        1050    1013  0 20:42 ?        00:00:00 lightdm --session-child 11 14
hanapi      1062       1  0 20:42 ?        00:00:00 /usr/lib/systemd/systemd --user
root        1094       1  0 20:42 ?        00:00:00 python /usr/sbin/wayvnc-control.py
hanapi      1097    1062  0 20:42 ?        00:00:00 /usr/bin/dbus-daemon --session --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
hanapi      1098    1062  0 20:42 ?        00:00:00 /usr/bin/pipewire
hanapi      1099    1050  3 20:42 ?        00:00:09 /usr/bin/labwc -m
hanapi      1100    1062  0 20:42 ?        00:00:00 /usr/bin/pipewire -c filter-chain.conf
hanapi      1102    1062  0 20:42 ?        00:00:00 /usr/bin/wireplumber
hanapi      1103    1062  0 20:42 ?        00:00:00 /usr/bin/pipewire-pulse
hanapi      1113    1062  0 20:42 ?        00:00:00 /usr/bin/mpris-proxy
hanapi      1155    1099  0 20:42 ?        00:00:00 /usr/bin/ssh-agent /usr/bin/labwc-pi
hanapi      1211       1  0 20:42 ?        00:00:00 /bin/sh /usr/bin/lwrespawn /usr/bin/pcmanfm-pi
hanapi      1212       1  0 20:42 ?        00:00:00 /bin/sh /usr/bin/lwrespawn /usr/bin/wf-panel-pi
hanapi      1213       1  0 20:42 ?        00:00:00 /usr/bin/kanshi
hanapi      1248       1  0 20:42 ?        00:00:00 /usr/libexec/polkit-mate-authentication-agent-1
hanapi      1260       1  0 20:42 ?        00:00:00 systemd-inhibit --what=handle-power-key gtk-nop
hanapi      1262    1212  0 20:42 ?        00:00:00 /usr/bin/wf-panel-pi
hanapi      1264    1211  0 20:42 ?        00:00:00 /bin/sh /usr/bin/pcmanfm-pi
hanapi      1266    1260  0 20:42 ?        00:00:00 gtk-nop
hanapi      1267    1264  0 20:42 ?        00:00:00 pcmanfm --desktop
hanapi      1298    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfsd
hanapi      1305    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfsd-fuse /run/user/1000/gvfs -f
hanapi      1323    1062  0 20:42 ?        00:00:00 /usr/libexec/xdg-desktop-portal
hanapi      1332    1062  0 20:42 ?        00:00:00 /usr/libexec/xdg-permission-store
hanapi      1333    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfs-udisks2-volume-monitor
hanapi      1338    1062  0 20:42 ?        00:00:00 /usr/libexec/xdg-document-portal
root        1349    1338  0 20:42 ?        00:00:00 fusermount3 -o rw,nosuid,nodev,fsname=portal,auto_unmount,subtype=portal -- /run/user/1000/doc
hanapi      1354    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfs-mtp-volume-monitor
hanapi      1355    1062  0 20:42 ?        00:00:00 /usr/libexec/xdg-desktop-portal-gtk
hanapi      1360    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfs-goa-volume-monitor
hanapi      1370    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfs-gphoto2-volume-monitor
hanapi      1378    1062  0 20:42 ?        00:00:00 /usr/libexec/gvfs-afc-volume-monitor
hanapi      1388    1062  0 20:42 ?        00:00:00 /usr/libexec/xdg-desktop-portal-wlr
hanapi      1389    1298  0 20:42 ?        00:00:00 /usr/libexec/gvfsd-trash --spawner :1.19 /org/gtk/gvfs/exec_spaw/0
root        1521       1  0 20:42 ?        00:00:00 /usr/sbin/cups-browsed
hanapi      1523       1  0 20:42 ?        00:00:01 /usr/lib/chromium/chromium --js-flags=--no-decommit-pooled-pages --force-renderer-accessibility --enable-remote-extensions --show-component-extension-option
hanapi      1559       1  0 20:42 ?        00:00:00 /usr/lib/chromium/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler --database=/home/hanapi/.config/chromium/Crash Rep
hanapi      1562    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --no-zygote-sandbox --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerr
hanapi      1563    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-sta
hanapi      1566       1  0 20:42 ?        00:00:00 /usr/lib/chromium/chrome_crashpad_handler --no-periodic-tasks --monitor-self-annotation=ptype=crashpad-handler --database=/home/hanapi/.config/chromium/Cras
hanapi      1569    1563  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-sta
hanapi      1582       1  1 20:42 ?        00:00:03 /usr/bin/Xwayland -auth /home/hanapi/.Xauthority :0 -rootless -core -terminate 10 -listenfd 32 -listenfd 33 -displayfd 84 -wm 81
hanapi      1583    1582  0 20:42 ?        00:00:00 xsettingsd
hanapi      1601    1562  7 20:42 ?        00:00:21 /usr/lib/chromium/chromium --type=gpu-process --enable-gpu-rasterization --ozone-platform=x11 --use-angle=gles --crashpad-handler-pid=0 --enable-crash-repor
hanapi      1607    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --use-angle=gles --crashp
hanapi      1616    1569  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --use-angle=gles --cra
hanapi      1647    1569  0 20:43 ?        00:00:00 /usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-t
hanapi      1648    1569  4 20:43 ?        00:00:12 /usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-t
root        1660       1  0 20:43 ?        00:00:00 /usr/libexec/upowerd
root        1685       2  0 20:43 ?        00:00:00 [kworker/u16:3-v3d_cpu]
root        1686       2  0 20:43 ?        00:00:00 [kworker/u17:3-events_unbound]
root        1697       2  0 20:43 ?        00:00:00 [kworker/u19:3-events_unbound]
root        1699       2  0 20:43 ?        00:00:00 [kworker/u16:4-v3d_tfu]
root        1708       1  2 20:43 ?        00:00:05 /usr/libexec/packagekitd
root        1741    1028  0 20:44 ?        00:00:00 sshd-session: hanapi [priv]
hanapi      1765    1741  0 20:44 ?        00:00:00 sshd-session: hanapi@pts/0
hanapi      1766    1765  0 20:44 pts/0    00:00:00 -bash
root        1782       1  0 20:47 ?        00:00:00 login -- hanapi
root        1783       2  0 20:47 ?        00:00:00 [kworker/0:4-events]
hanapi      1790    1782  0 20:47 tty1     00:00:00 -bash
hanapi      1804    1766  0 20:47 pts/0    00:00:00 ps -ef
hanapi@raspberrypi:~ $ ps -ef |grep chromium
hanapi      1523       1  0 20:42 ?        00:00:01 /usr/lib/chromium/chromium --js-flags=--no-decommit-pooled-pages --force-renderer-accessibility --enable-remote-extensions --show-component-extension-options --enable-gpu-rasterization --no-default-browser-check --disable-pings --media-router=0 --enable-remote-extensions --load-extension= --use-angle=gles https://hm-timeframe.vercel.app --kiosk --start-fullscreen --noerrdialogs --disable-infobars --disable-session-crashed-bubble --disable-features=TranslateUI
hanapi      1559       1  0 20:42 ?        00:00:00 /usr/lib/chromium/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler --database=/home/hanapi/.config/chromium/Crash Reports --annotation=channel=built on Debian GNU/Linux 13 (trixie) --annotation=lsb-release=Debian GNU/Linux 13 (trixie) --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=141.0.7390.107 --initial-client-fd=5 --shared-client-connection
hanapi      1562    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --no-zygote-sandbox --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable
hanapi      1563    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable
hanapi      1566       1  0 20:42 ?        00:00:00 /usr/lib/chromium/chrome_crashpad_handler --no-periodic-tasks --monitor-self-annotation=ptype=crashpad-handler --database=/home/hanapi/.config/chromium/Crash Reports --annotation=channel=built on Debian GNU/Linux 13 (trixie) --annotation=lsb-release=Debian GNU/Linux 13 (trixie) --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=141.0.7390.107 --initial-client-fd=4 --shared-client-connection
hanapi      1569    1563  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable
hanapi      1601    1562  7 20:42 ?        00:00:23 /usr/lib/chromium/chromium --type=gpu-process --enable-gpu-rasterization --ozone-platform=x11 --use-angle=gles --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable --gpu-preferences=UAAAAAAAAAAgAAAAAAAAAAAAAAAAAGAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAABgAAAAAAAAAAQAAAAAAAAAIAAAAAAAAAAgAAAAAAAAA --shared-files --metrics-shmem-handle=4,i,7723086380478765346,303772240751649956,262144 --field-trial-handle=3,i,11003331618798813645,2524394522626003784,262144 --disable-features=TranslateUI --variations-seed-version
hanapi      1607    1523  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --use-angle=gles --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --metrics-shmem-handle=4,i,633470376569086948,15118320570444633430,524288 --field-trial-handle=3,i,11003331618798813645,2524394522626003784,262144 --disable-features=TranslateUI --variations-seed-version
hanapi      1616    1569  0 20:42 ?        00:00:00 /usr/lib/chromium/chromium --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --use-angle=gles --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --metrics-shmem-handle=4,i,3388891256204732609,13136271122163559617,524288 --field-trial-handle=3,i,11003331618798813645,2524394522626003784,262144 --disable-features=TranslateUI --variations-seed-version
hanapi      1647    1569  0 20:43 ?        00:00:00 /usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-trial-disabled-features=CanvasTextNg|WebAssemblyCustomDescriptors --change-stack-guard-on-fork=enable --js-flags=--no-decommit-pooled-pages --ozone-platform=x11 --lang=en-GB --num-raster-threads=2 --enable-main-frame-before-activation --renderer-client-id=6 --time-ticks-at-unix-epoch=-1761385365246192 --launch-time-ticks=15787957 --shared-files=v8_context_snapshot_data:100 --metrics-shmem-handle=4,i,4580727521064104144,16583834918066874726,2097152 --field-trial-handle=3,i,11003331618798813645,2524394522626003784,262144 --disable-features=TranslateUI --variations-seed-version
hanapi      1648    1569  4 20:43 ?        00:00:13 /usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-trial-disabled-features=CanvasTextNg|WebAssemblyCustomDescriptors --change-stack-guard-on-fork=enable --js-flags=--no-decommit-pooled-pages --ozone-platform=x11 --lang=en-GB --num-raster-threads=2 --enable-main-frame-before-activation --renderer-client-id=5 --time-ticks-at-unix-epoch=-1761385365246192 --launch-time-ticks=15791001 --shared-files=v8_context_snapshot_data:100 --metrics-shmem-handle=4,i,9409261002355627823,555057077806040756,2097152 --field-trial-handle=3,i,11003331618798813645,2524394522626003784,262144 --disable-features=TranslateUI --variations-seed-version
hanapi      1806    1766  0 20:47 pts/0    00:00:00 grep --color=auto chromium
hanapi@raspberrypi:~ $ kill 1566
hanapi@raspberrypi:~ $ systemctl status
● raspberrypi
    State: running
    Units: 417 loaded (incl. loaded aliases)
     Jobs: 0 queued
   Failed: 0 units
    Since: Sat 2025-10-25 20:42:46 AEDT; 6min ago
  systemd: 257.8-1~deb13u2
  Tainted: unmerged-bin
   CGroup: /
           ├─init.scope
           │ └─1 /sbin/init splash
           ├─system.slice
           │ ├─ModemManager.service
           │ │ └─881 /usr/sbin/ModemManager
           │ ├─NetworkManager.service
           │ │ └─853 /usr/sbin/NetworkManager --no-daemon
           │ ├─accounts-daemon.service
           │ │ └─729 /usr/libexec/accounts-daemon
           │ ├─avahi-daemon.service
           │ │ ├─731 "avahi-daemon: running [raspberrypi.local]"
           │ │ └─741 "avahi-daemon: chroot helper"
           │ ├─bluetooth.service
           │ │ └─732 /usr/libexec/bluetooth/bluetoothd
           │ ├─cron.service
           │ │ └─775 /usr/sbin/cron -f
           │ ├─cups-browsed.service
           │ │ └─1521 /usr/sbin/cups-browsed
           │ ├─cups.service
           │ │ ├─ 996 /usr/sbin/cupsd -l
           │ │ └─1039 /usr/lib/cups/notifier/dbus dbus://
           │ ├─dbus.service
           │ │ └─734 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
           │ ├─lightdm.service
           │ │ └─1013 /usr/sbin/lightdm
           │ ├─nfs-blkmap.service
           │ │ └─783 /usr/sbin/blkmapd
           │ ├─polkit.service
           │ │ └─738 /usr/lib/polkit-1/polkitd --no-debug --log-level=notice
           │ ├─rpcbind.service
           │ │ └─674 /usr/sbin/rpcbind -f -w
           │ ├─ssh.service
           │ │ └─1028 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"
           │ ├─system-serial\x2dgetty.slice
           │ │ └─serial-getty@ttyAMA10.service
           │ │   └─1049 /sbin/agetty -o "-- \\u" --noreset --noclear --keep-baud 115200,57600,38400,9600 - vt220
           │ ├─systemd-journald.service
           │ │ └─326 /usr/lib/systemd/systemd-journald
           │ ├─systemd-logind.service
           │ │ └─744 /usr/lib/systemd/systemd-logind
           │ ├─systemd-timesyncd.service
           │ │ └─378 /usr/lib/systemd/systemd-timesyncd
           │ ├─systemd-udevd.service
           │ │ └─udev
           │ │   └─387 /usr/lib/systemd/systemd-udevd
           │ ├─terminal-on-lightdm.service
           │ │ ├─1523 /usr/lib/chromium/chromium --js-flags=--no-decommit-pooled-pages --force-renderer-accessibility --enable-remote-extensions --show-component-extension-options --enable-gpu-rasterization >
           │ │ ├─1559 /usr/lib/chromium/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler "--database=/home/hanapi/.config/chromium/Crash Reports" "--annotation=channel=>
           │ │ ├─1562 "/usr/lib/chromium/chromium --type=zygote --no-zygote-sandbox --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard>
           │ │ ├─1563 "/usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable"
           │ │ ├─1569 "/usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable"
           │ │ ├─1601 "/usr/lib/chromium/chromium --type=gpu-process --enable-gpu-rasterization --ozone-platform=x11 --use-angle=gles --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Lin>
           │ │ ├─1607 "/usr/lib/chromium/chromium --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --use-angle=gles --crashpad-handler-pid=0 --enable-cr>
           │ │ ├─1616 "/usr/lib/chromium/chromium --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --use-angle=gles --crashpad-handler-pid=0 --enable>
           │ │ ├─1647 "/usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-trial-disabled-features=Canva>
hanapi@raspberrypi:~ $ systemctl status terminal-on-lightdm.service
● terminal-on-lightdm.service - Start Terminal on LightDM Startup
     Loaded: loaded (/etc/systemd/system/terminal-on-lightdm.service; enabled; preset: enabled)
     Active: active (running) since Sat 2025-10-25 20:42:57 AEDT; 6min ago
 Invocation: dfe87424173b46c6ac99be08f4b6e1a0
   Main PID: 1523 (chromium)
      Tasks: 90 (limit: 9570)
        CPU: 54.834s
     CGroup: /system.slice/terminal-on-lightdm.service
             ├─1523 /usr/lib/chromium/chromium --js-flags=--no-decommit-pooled-pages --force-renderer-accessibility --enable-remote-extensions --show-component-extension-options --enable-gpu-rasterization -->
             ├─1559 /usr/lib/chromium/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler "--database=/home/hanapi/.config/chromium/Crash Reports" "--annotation=channel=bu>
             ├─1562 "/usr/lib/chromium/chromium --type=zygote --no-zygote-sandbox --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-o>
             ├─1563 "/usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable"
             ├─1569 "/usr/lib/chromium/chromium --type=zygote --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --change-stack-guard-on-fork=enable"
             ├─1601 "/usr/lib/chromium/chromium --type=gpu-process --enable-gpu-rasterization --ozone-platform=x11 --use-angle=gles --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux>
             ├─1607 "/usr/lib/chromium/chromium --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --use-angle=gles --crashpad-handler-pid=0 --enable-cras>
             ├─1616 "/usr/lib/chromium/chromium --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --use-angle=gles --crashpad-handler-pid=0 --enable-c>
             ├─1647 "/usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-trial-disabled-features=CanvasT>
             └─1648 "/usr/lib/chromium/chromium --type=renderer --crashpad-handler-pid=0 --enable-crash-reporter=,built on Debian GNU/Linux 13 (trixie) --noerrdialogs --origin-trial-disabled-features=CanvasT>

Oct 25 20:43:01 raspberrypi chromium[1523]: [1523:1578:1025/204301.414547:ERROR:dbus/bus.cc:408] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types ar>
Oct 25 20:43:01 raspberrypi chromium[1523]: [1523:1523:1025/204301.417739:ERROR:dbus/object_proxy.cc:573] Failed to call method: org.freedesktop.DBus.NameHasOwner: object_path= /org/freedesktop/DBus: unknown>
Oct 25 20:43:01 raspberrypi chromium[1523]: [1523:1578:1025/204301.418260:ERROR:dbus/bus.cc:408] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types ar>
Oct 25 20:43:01 raspberrypi chromium[1523]: [1523:1523:1025/204301.418664:ERROR:dbus/object_proxy.cc:573] Failed to call method: org.freedesktop.DBus.NameHasOwner: object_path= /org/freedesktop/DBus: unknown>
Oct 25 20:43:05 raspberrypi chromium[1523]: [1523:1579:1025/204305.512630:ERROR:google_apis/gcm/engine/registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
Oct 25 20:43:30 raspberrypi chrome[1523]: [1523:1574:1025/204330.547243:INFO:chrome/browser/extensions/extension_garbage_collector.cc:184] Garbage collection for extensions on file thread is complete.
Oct 25 20:43:30 raspberrypi chromium[1523]: [1523:1579:1025/204330.706154:ERROR:google_apis/gcm/engine/registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
Oct 25 20:44:28 raspberrypi chromium[1523]: [1523:1579:1025/204428.898404:ERROR:google_apis/gcm/engine/registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
Oct 25 20:46:14 raspberrypi chromium[1523]: [1523:1579:1025/204614.546189:ERROR:google_apis/gcm/engine/registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
Oct 25 20:49:55 raspberrypi chromium[1523]: [1523:1579:1025/204955.507780:ERROR:google_apis/gcm/engine/registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
hanapi@raspberrypi:~ $ systemctl stop terminal-on-lightdm.service
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to stop 'terminal-on-lightdm.service'.
Authenticating as: hanapi
Password: 
hanapi@raspberrypi:~ $ systemctl stop terminal-on-lightdm.service
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to stop 'terminal-on-lightdm.service'.
Authenticating as: hanapi
Password: 
==== AUTHENTICATION COMPLETE ====
hanapi@raspberrypi:~ $ systemctl start terminal-on-lightdm.service
==== AUTHENTICATING FOR org.freedesktop.systemd1.manage-units ====
Authentication is required to start 'terminal-on-lightdm.service'.
Authenticating as: hanapi
Password: 
==== AUTHENTICATION COMPLETE ====
hanapi@raspberrypi:~ $ reboot
Call to Reboot failed: Interactive authentication required.
hanapi@raspberrypi:~ $ sudo reboot
hanapi@raspberrypi:~ $ Read from remote host raspberrypi.local: Connection reset by peer
Connection to raspberrypi.local closed.
client_loop: send disconnect: Broken pipe
hanakomanning@Hanakos-MacBook-Air timeframe % ssh hanapi@raspberrypi.local
hanapi@raspberrypi.local's password: 
Linux raspberrypi 6.12.47+rpt-rpi-2712 #1 SMP PREEMPT Debian 1:6.12.47-1+rpt1 (2025-09-16) aarch64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Sat Oct 25 20:44:06 2025 from fe80::c4d:fff1:5f74:c34b%wlan0
hanapi@raspberrypi:~ $ git
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
hanapi@raspberrypi:~ $ git clone git@github.com:h-manning/timeframe-zpp.git
Cloning into 'timeframe-zpp'...
The authenticity of host 'github.com (4.237.22.38)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
hanapi@raspberrypi:~ $ git clone https://github.com/h-manning/timeframe-zpp.git
Cloning into 'timeframe-zpp'...
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (38/38), done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 38 (delta 6), reused 32 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (38/38), 40.75 KiB | 1.23 MiB/s, done.
Resolving deltas: 100% (6/6), done.
hanapi@raspberrypi:~ $ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  timeframe-zpp  Videos
hanapi@raspberrypi:~ $ cd timeframe
-bash: cd: timeframe: No such file or directory
hanapi@raspberrypi:~ $ cd timeframe-zpp/
hanapi@raspberrypi:~/timeframe-zpp $ ls
app  components  components.json  lib  next.config.mjs  package.json  pnpm-lock.yaml  postcss.config.mjs  public  README.md  styles  tsconfig.json
hanapi@raspberrypi:~/timeframe-zpp $ cat README.md 
# Transport NSW real-time

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/h-mannings-projects/v0-transport-nsw-real-time)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/otgG71U4OrQ)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/h-mannings-projects/v0-transport-nsw-real-time](https://vercel.com/h-mannings-projects/v0-transport-nsw-real-time)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/otgG71U4OrQ](https://v0.app/chat/projects/otgG71U4OrQ)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
hanapi@raspberrypi:~/timeframe-zpp $ git status 
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
hanapi@raspberrypi:~/timeframe-zpp $ git fetch
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 940 bytes | 940.00 KiB/s, done.
From https://github.com/h-manning/timeframe-zpp
   9aa868e..4a18c20  main       -> origin/main
hanapi@raspberrypi:~/timeframe-zpp $ git pull 
Updating 9aa868e..4a18c20
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
hanapi@raspberrypi:~/timeframe-zpp $ nano README.md 
hanapi@raspberrypi:~/timeframe-zpp $ Read from remote host raspberrypi.local: No route to host
Connection to raspberrypi.local closed.
client_loop: send disconnect: Broken pipe
hanakomanning@Hanakos-MacBook-Air timeframe % 

