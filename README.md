# 📑 Simple Wildcards Collection for Stable Diffusion


<!-- This is my collection of useful [Wildcards](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#wildcards). I created most of them using [ChatGPT](https://chat.openai.com) and [Claude](https://claude.ai/) to streamline my work with [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and avoid using the [Dynamic Prompts](https://github.com/adieyal/sd-dynamic-prompts/tree/main?tab=readme-ov-file#basic-usage), which I used before. Through my experience, I've found that Wildcards are more convenient to use. -->

**Wildcards** in this collection are mainly created for realistic scenes with people. Hoever, they can be used for other types of art as well. They will give you inspiration and boost your creativity.

Since I work with these Wildcards myself, I catch problematic keywords and remove them. Sometimes I also add new keywords, and even entire files. I'm constantly looking for new ideas to expand this collection.

The main idea is to not overcomplicate things. Dealing with thousands of weirdly named wildcards may be overwhelming. I believe it's better to have a few that you can remember and use effectively.

# 💻 Preparations

To use these Wildcards, you need an extension. You can use one of the following:

- [sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts) `Recommended`
- [stable-diffusion-webui-wildcards](https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards)

Most likely, after installing the extension, you'll need to restart Stable Diffusion (or the [rented server instance](https://cloud.vast.ai/?ref_id=62878&creator_id=42512&name=null)) for the extension to work correctly. **A simple reload of WebUI may not be sufficient ❗️❗️❗️**

If you installed the extension using the [Provisioning Script](https://github.com/ai-dock/stable-diffusion-webui/blob/main/config/provisioning/default.sh) from [AI-Dock](https://github.com/ai-dock/stable-diffusion-webui), a restart will not be necessary 👌

### Optional steps

If you decided to use [sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts), I recommend you to enable one useful option in the extension settings.  
`Settings > Uncategorised > Dynamic Prompts > Save template to metadata: Write prompt template into the PNG `

# 💾 Installation

Once you have a working Wildcards extension, you need wildcard `.txt` files in appropriate directory. In the case of the two mentioned plugins, it will be the `wildcards` directory in the main directory of the extension.

The path to the directory may look like this:  
`stable-diffusion-webui/extensions/sd-dynamic-prompts/wildcards/`  
`stable-diffusion-webui/extensions/stable-diffusion-webui-wildcards/wildcards/`

Navigate to **the proper directory** and download the files.  
You can download them by using one of the following commands:

## Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [WGET](https://www.gnu.org/software/wget/)

```bash
wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh | bash -s -- wget
```

## Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [ARIA2](https://github.com/aria2/aria2)

```bash
aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh && chmod +x dl.sh && ./dl.sh aria2c
```

## Download automatically with [BASH](https://www.gnu.org/software/bash/) script using [CURL](https://curl.se/) `slowest`

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/scripts/download.sh | bash -s -- curl
```

<!-- For every command above, you need to have [XARGS](https://www.man7.org/linux/man-pages/man1/xargs.1.html) installed on your system.   -->

You can find alternative ways to download files in the [DOWNLOAD.md](DOWNLOAD.md) file.

# ⚡️ Usage

A **Wildcard** is essentially a file name that contains a list of keywords, one per line. If we have a file named `colors.txt`, you can use the wildcard in a prompt as `__colors__`. Stable Diffusion will replace `__colors__` with a random keyword from the `colors.txt` file.

Let's say you want to generate a scene with a woman in a random location. Let her clothing be random as well.  
`photography of __nationalities__ woman BREAK wearing __colors__ __clothes_upper__ BREAK in __locations__`

The initial prompt will look like this:  
`photography of Polish woman BREAK wearing black dress BREAK in restaurant`

With [sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts), you can also use [Variables](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#variables)

`${c=__colors__} woman in __locations__ BREAK ${c} shirt BREAK ${c} skirt BREAK ${c} boots`

The prompt will look like this:  
`woman in park BREAK pink shirt BREAK pink skirt BREAK pink boots`

> You can read more about `BREAK` keyword [in this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/15bty86/prompt_trick_for_more_consistent_results_in/).

**WARNING**: Prompting `Nationalities` and `Artists` does not work well with `Pony Diffusion` checkpoints because these checkpoints were trained on completely different data and lack the knowledge about many things.  
You need to use it with good checkpoints focused on real people. I recommend using one of following checkpoints:

- [WildCardX-XL](https://civitai.com/models/239561/wildcardx-xl) `SDXL 1.0`
- [ZavyChromaXL](https://civitai.com/models/119229/zavychromaxl) `SDXL 1.0`
- [\_CHINOOK\_](https://civitai.com/models/400589/chinook) `SDXL 1.0`
- [epiCRealism XL](https://civitai.com/models/277058/epicrealism-xl) `SDXL 1.0`

For `Nationalities` it's good to be around `CFG Scale 6-7` to see how prompt affect the generated person. You can read more about it [here](https://dav.one/using-prompts-to-modify-face-and-body-in-stable-diffusion). For `Artists` it's better to have `CFG Scale 2-5` to achieve best results. In both cases Checkpoint will have the biggest impact on the final result.

# 🍺 Original Sources and Copyrights

- The list of Nationalities `nationalities.txt` was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/13oea0i/photorealistic_portraits_of_200_ethinicities/), modified and expanded by me.
- The list of Light types `lighting.txt` was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/1cjwi04/made_this_lighting_guide_for_myself_thought_id/), modified and expanded by me.
- The first list of Artists `artists.txt` was obtained from the [Stable Diffusion Cheat-Sheet](https://supagruen.github.io/StableDiffusion-CheatSheet/) website.
- The second list of Artists `artists2.txt` was obtained from the [SDXL Artist Style Studies](https://sdxl.parrotzone.art/).  
  File `artists2_tagged.txt` contains only artists with tags.
- The lists of Cameras `cameras.txt` and Films `films.txt` were obtained from the [SDXL 1.0 Artistic Studies](https://supagruen.github.io/StableDiffusion-CheatSheet/) ([repo](https://github.com/rikkar69/SDXL-artist-study/tree/master/data/lists)).
- The rest of the files were created by me. For wildcards I used using [ChatGPT](https://chat.openai.com) and [Claude](https://claude.ai/).

# 📝 Contributing

If you believe something is missing, that something could be useful, or that something should be removed, go ahead - [fork this repository, edit the files, and submit a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).  
Catch me on [Discord](https://discord.gg/) if you have any questions or suggestions: `avaray_`

You can also support me on [GitHub Sponsors](https://github.com/sponsors/Avaray), [Patreon](patreon.com/Avaray_), or [Buy Me a Coffee](https://buymeacoffee.com/avaray).

<!-- <a href="https://buymeacoffee.com/avaray" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-green.png" alt="Buy Me A Coffee" height="41" width="174"></a> -->
