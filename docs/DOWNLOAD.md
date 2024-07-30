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

- [angles](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//angles.txt)
- [animations](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//animations.txt)
- [anime](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//anime.txt)
- [artists](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//artists.txt)
- [artists2](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//artists2.txt)
- [artists2_tagged](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//artists2_tagged.txt)
- [cameras](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//cameras.txt)
- [camera_films](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//camera_films.txt)
- [clothes_bottom](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//clothes_bottom.txt)
- [clothes_upper](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//clothes_upper.txt)
- [colors](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//colors.txt)
- [emotions](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//emotions.txt)
- [hairstyles](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//hairstyles.txt)
- [jobs](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//jobs.txt)
- [lighting](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//lighting.txt)
- [locations](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//locations.txt)
- [materials](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//materials.txt)
- [nationalities](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//nationalities.txt)
- [videogames](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//videogames.txt)
- [weather](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/sdxl/wildcards//weather.txt)

