# 🖥️ Terminal commands

The following commands are intended for [Linux](https://en.wikipedia.org/wiki/Linux). If you want to use them on [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), I recommend using [Windows Terminal](https://github.com/microsoft/terminal) along with [BASH](https://www.gnu.org/software/bash/), which is automatically installed with [Git for Windows](https://git-scm.com/downloads).

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [WGET](https://www.gnu.org/software/wget/)

```bash
wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- wget sdxl
```

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [ARIA2C](https://aria2.github.io/)

```bash
aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh && chmod +x dl.sh && ./dl.sh aria2c sdxl
```

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [CURL](https://curl.se/)

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- curl sdxl
```

### Download with [GIT](https://git-scm.com/)

```bash
git clone --single-branch --branch sdxl https://github.com/Avaray/stable-diffusion-simple-wildcards && mv stable-diffusion-simple-wildcards/wildcards/*.txt . > /dev/null 2>&1 && rm -rf stable-diffusion-simple-wildcards
```

# 🧩 Download manually

### [⬇️ Download as a ZIP archive](https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/sdxl.zip)

### Download individual files (20 files in total)

- [angles](./wildcards/angles.txt)
- [animations](./wildcards/animations.txt)
- [anime](./wildcards/anime.txt)
- [artists](./wildcards/artists.txt)
- [artists2](./wildcards/artists2.txt)
- [artists2_tagged](./wildcards/artists2_tagged.txt)
- [cameras](./wildcards/cameras.txt)
- [camera_films](./wildcards/camera_films.txt)
- [clothes_bottom](./wildcards/clothes_bottom.txt)
- [clothes_upper](./wildcards/clothes_upper.txt)
- [colors](./wildcards/colors.txt)
- [emotions](./wildcards/emotions.txt)
- [hairstyles](./wildcards/hairstyles.txt)
- [jobs](./wildcards/jobs.txt)
- [lighting](./wildcards/lighting.txt)
- [locations](./wildcards/locations.txt)
- [materials](./wildcards/materials.txt)
- [nationalities](./wildcards/nationalities.txt)
- [videogames](./wildcards/videogames.txt)
- [weather](./wildcards/weather.txt)

