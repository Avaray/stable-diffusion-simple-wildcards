# 🖥️ Terminal commands

The following commands are intended for [Linux](https://en.wikipedia.org/wiki/Linux). If you want to use them on [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), I recommend using [Windows Terminal](https://github.com/microsoft/terminal) along with [BASH](https://www.gnu.org/software/bash/), which is automatically installed with [Git for Windows](https://git-scm.com/downloads).

### Download automatically with [BASH](https://www.gnu.org/software/bash/) script and [WGET](https://www.gnu.org/software/wget/)

```bash
wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- wget sdxl
```

### Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [ARIA2](https://github.com/aria2/aria2)

```bash
aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh && chmod +x dl.sh && ./dl.sh aria2c sdxl
```

### Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [CURL](https://curl.se/)

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- curl sdxl
```

### Download archive with [WGET](https://www.gnu.org/software/wget/) and extract files using [UNZIP](https://linux.die.net/man/1/unzip)

```bash
wget -q https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/sdxl.zip -O sdxl.zip &&
unzip -joq sdxl.zip '*.txt' &&
rm -f sdxl.zip
```

### Download with [GIT](https://git-scm.com/)

```bash
git clone --single-branch --branch sdxl https://github.com/Avaray/stable-diffusion-simple-wildcards/ &&
mv stable-diffusion-simple-wildcards/wildcards/*.txt . > /dev/null 2>&1 &&
rm -rf stable-diffusion-simple-wildcards
```

# 🧩 Download manually

### [⬇️ Download as a ZIP archive](https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip)

### Download individual files

<individual>
<ul style="list-style-type: '⬇️ '">
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/angles.txt">angles</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists.txt">artists</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists2.txt">artists2</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/artists2_tagged.txt">artists2_tagged</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/camera_films.txt">camera_films</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/cameras.txt">cameras</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/clothes_bottom.txt">clothes_bottom</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/clothes_upper.txt">clothes_upper</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/colors.txt">colors</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/emotions.txt">emotions</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/hairstyles.txt">hairstyles</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/jobs.txt">jobs</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/lighting.txt">lighting</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/locations.txt">locations</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/materials.txt">materials</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/nationalities.txt">nationalities</a></li>
<li><a href="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/wildcards/weather.txt">weather</a></li>
</ul>
</individual>