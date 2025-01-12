# 📑 Wildcards Collection for Stable Diffusion

![Nationalities](/images/animation.webp)

**Wildcards** in this collection are mainly created for realistic scenes with people. However, they can be used for other types of art as
well. They will give you inspiration and boost your creativity.

Since I work with these Wildcards myself, I catch problematic keywords and remove them. Sometimes I also add new keywords, and even entire
files. I'm constantly looking for new ideas to expand this collection.

The main idea is to not overcomplicate things. Dealing with thousands of weirdly named wildcards may be overwhelming. I believe it's better
to have a few that you **can remember** and **use effectively**.

# 💻 Preparations

Some [UIs](https://dav.one/useful-links-for-daily-work-with-stable-diffusion/#user-interfaces) support Wildcards out of the box, but some
don't.\
Below you can find instructions on how to use Wildcards in specific UIs.

## [Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) and other UIs based on [WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

You need to install an extension. I recommend using
[sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts?tab=readme-ov-file#installation).

Most likely, after installing the extension, you'll need to restart UI for the extension to work correctly.\
**A simple reload of WebUI may not be sufficient**.

The **path** to the Wildcards directory should look like this:\
`../stable-diffusion-webui/extensions/sd-dynamic-prompts/wildcards/`

## [ComfyUI](https://github.com/comfyanonymous/ComfyUI)

You need to install custom Node. At the moment, `ImpactWildcardProcessor` from
[ComfyUI-Impact-Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack) seems to be a good choice. You can install it using
[ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager) and
[here](https://github.com/ltdrdata/ComfyUI-extension-tutorials/blob/Main/ComfyUI-Impact-Pack/tutorial/ImpactWildcard.md) is a tutorial on
how to use it.

The **path** to the Wildcards directory should look like this:\
`../ComfyUI/custom_nodes/ComfyUI-Impact-Pack/custom_wildcards/`

## [Fooocus](https://github.com/lllyasviel/Fooocus)

Fooocus supports Wildcards out of the box.

The **path** to the Wildcards directory should look like this:\
`../Fooocus/wildcards/`

# 💾 Installation

You need to install the wildcard `.txt` files into the appropriate directory (refer to the [preparations](#-preparations) section). Navigate
to **the proper directory** and download the files with one of the following commands:

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [WGET](https://www.gnu.org/software/wget/)

```bash
wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- wget sdxl
```

<details>
<summary>Show more commands</summary>

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [ARIA2C](https://aria2.github.io/)

```bash
aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh && chmod +x dl.sh && ./dl.sh aria2c sdxl
```

### Download automatically with [BASH](https://www.gnu.org/software/bash/) and [CURL](https://curl.se/)

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/sdxl/scripts/download.sh | bash -s -- curl sdxl
```

You can find more ways to download the wildcards in [DOWNLOAD.md](docs/DOWNLOAD.md) file.

</details>

# ⚡️ Usage

A **Wildcard** is essentially a name of a file that contains a list of keywords. If you have a file named `colors.txt`, you can use the
wildcard in your prompt as `__colors__`. Stable Diffusion will replace `__colors__` with a random keyword from the `colors.txt` file.

Let's say you want to generate a scene with a woman in a random location. Let her clothing be random as well.

> photography of **\_\_nationalities\_\_** woman, wearing **\_\_colors\_\_** **\_\_clothes_upper\_\_**, standing in **\_\_locations\_\_**

The initial prompt will look like this:

> photography of **Spanish** woman, wearing **black dress**, standing in **restaurant**

<details>
<summary>Show things available only in sd-dynamic-prompts extension</summary>

You can also use [Variables](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#variables)

> **\${c=\_\_colors\_\_}** woman in **\_\_locations\_\_**, **\${c}** shirt, **\${c}** skirt, **\${c}** boots

The prompt will look like this:

> woman in **dressing room**, **pink** shirt, **pink** skirt, **pink** boots

To get [multiple values](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#choosing-multiple-values) from one wildcard,
you can specify amount of values you want to get.

> photography of toy cars, **{4$$\_\_colors\_\_}**

The prompt will look like this:

> photography of toy cars, **red**, **blue**, **green**, **yellow**

</details>

<details>
<summary>Show Warning</summary>

### WARNING

Checkpoints that are based on `Pony Diffusion` may not work with some of these Wildcards. `Pony Diffusion` checkpoints were trained on
completely different data and lack the knowledge about many things. `Nationalities`, `Artists`, `Cameras` and `Films` most likely will not
work at all. If you are planning to use these Wildcards for generating realistic scenes, you should use good checkpoints focused on real
people. I recommend using one of following checkpoints:

- [RealVis](https://civitai.com/models/139562?modelVersionId=789646) `SDXL 1.0`
- [WildCardX](https://civitai.com/models/239561/wildcardx-xl) `SDXL 1.0`
- [ZavyChroma](https://civitai.com/models/119229/zavychromaxl) `SDXL 1.0`
- [\_CHINOOK\_](https://civitai.com/models/400589/chinook) `SDXL 1.0`

For `Nationalities` it's good to be around `CFG Scale 6-7` to see how prompt affect the generated person (you can read more about it
[here](https://dav.one/using-prompts-to-modify-face-and-body-in-stable-diffusion)). For `Artists` it's better to have `CFG Scale 2-5` to
achieve best results. In both cases Checkpoint will have the biggest impact on the final result. Every checkpoint is different.

</details>

# 🍺 Original Sources and Copyrights

- The list of Nationalities `nationalities.txt` was inspired by
  [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/13oea0i/photorealistic_portraits_of_200_ethinicities/).
- The list of Light types `lighting.txt` was inspired by
  [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/1cjwi04/made_this_lighting_guide_for_myself_thought_id/).
- The first list of Artists `artists.txt` was obtained from the
  [Stable Diffusion Cheat-Sheet](https://supagruen.github.io/StableDiffusion-CheatSheet/).
- The second list of Artists `artists2.txt` was obtained from the [SDXL Artist Style Studies](https://sdxl.parrotzone.art/).
- The lists of Cameras `cameras.txt` and Films `camera_films.txt` were obtained from the
  [SDXL 1.0 Artistic Studies](https://rikkar69.github.io/SDXL-artist-study/).
- Lists of Characters from Videogames `videogame.txt`, Animations `animation.txt` and Anime `anime.txt` were created by
  [etude2k](https://civitai.com/user/etude2k) and posted on
  [CivitAI](https://civitai.com/models/338658/pony-diffusions-characters-wildcards).

# 📝 Contributing

If you believe something is missing, that something could be useful, or that something should be removed, go ahead -
[fork this repository, edit the files, and submit a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

Catch me on [Discord](https://discord.gg/) if you have any questions or suggestions: `avaray_`

You can also support me on [GitHub Sponsors](https://github.com/sponsors/Avaray), [Patreon](https://www.patreon.com/c/avaray_), or
[Buy Me a Coffee](https://buymeacoffee.com/avaray).
