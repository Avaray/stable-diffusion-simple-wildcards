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
git clone --depth 1 --single-branch --branch sdxl https://github.com/Avaray/stable-diffusion-simple-wildcards && mv stable-diffusion-simple-wildcards/wildcards/*.txt . > /dev/null 2>&1 && rm -rf stable-diffusion-simple-wildcards
```

# 🧩 Download manually

### [⬇️ Download as a ZIP archive](https://github.com/Avaray/stable-diffusion-simple-wildcards/releases/latest/download/stable-diffusion-simple-wildcards-sdxl.zip)

### Download individual files (17 files in total)

- [artists2](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists2.txt)
- [jobs](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/jobs.txt)
- [camera_films](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/camera_films.txt)
- [cameras](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/cameras.txt)
- [clothes_upper](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/clothes_upper.txt)
- [nationalities](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/nationalities.txt)
- [locations](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/locations.txt)
- [angles](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/angles.txt)
- [hairstyles](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/hairstyles.txt)
- [emotions](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/emotions.txt)
- [materials](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/materials.txt)
- [lighting](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/lighting.txt)
- [artists2_tagged](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists2_tagged.txt)
- [clothes_bottom](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/clothes_bottom.txt)
- [colors](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/colors.txt)
- [artists](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists.txt)
- [weather](https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/weather.txt)

