## Download automatically with [BASH](https://www.gnu.org/software/bash/) script and [WGET](https://www.gnu.org/software/wget/)

```bash
wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh | bash -s -- wget
```

## Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [ARIA2](https://github.com/aria2/aria2)

```bash
aria2c -q -d -o - https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh | bash -s -- aria2c
```

## Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [CURL](https://curl.se/) `slowest`

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh | bash -s -- curl
```

## Download with [WGET](https://www.gnu.org/software/wget/) and extract files using [unzip](https://linux.die.net/man/1/unzip)

```bash
wget -q https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip -O main.zip &&
unzip -joq main.zip '*.txt' &&
rm -f main.zip
```

## Download with [GIT](https://git-scm.com/)

```bash
git clone https://github.com/Avaray/stable-diffusion-simple-wildcards/ &&
mv stable-diffusion-simple-wildcards/*.txt . &&
rm -rf stable-diffusion-simple-wildcards
```

## Download manually

Click [this link](https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip) and have fun 🤠
