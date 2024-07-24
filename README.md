# 📑 Simple Wildcards Collection for Stable Diffusion

This is my collection of useful [Wildcards](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#wildcards). I created most of them using [ChatGPT](https://chat.openai.com) and [Claude](https://claude.ai/) to streamline my work with [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and avoid using the [Dynamic Prompts](https://github.com/adieyal/sd-dynamic-prompts/tree/main?tab=readme-ov-file#basic-usage), which I used before. Through my experience, I've found that Wildcards are more convenient to use.

The purpose of these Wildcards is to introduce randomness and diversity into the created graphics. They are primarily intended for creating photorealistic scenes with people.

Since I work with these Wildcards myself, I catch problematic prompts and remove them. Sometimes I also add new prompts, and even entire files. I'm constantly looking for new inspirations.

# 💻 Preparations

To use these Wildcards, you need an extension. You can use one of the following:

- [sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts)
- [stable-diffusion-webui-wildcards](https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards)

Most likely, after installing the extension, you'll need to restart Stable Diffusion (or the [rented server instance](https://cloud.vast.ai/?ref_id=62878&creator_id=42512&name=null)) for the extension to work correctly. **A simple reload of WebUI may not be sufficient.** If you installed the extension using the [Provisioning Script](https://github.com/ai-dock/stable-diffusion-webui/blob/main/config/provisioning/default.sh) from [AI-Dock](https://github.com/ai-dock/stable-diffusion-webui), a restart will not be necessary.

### Optional steps

If you are using `sd-dynamic-prompts`, I recommend you to enable one useful option in the extension settings.  
`Settings` -> `Uncategorised` -> `Dynamic Prompts` -> `Save template to metadata: Write prompt template into the PNG metadata`

# 💾 Installation

Once you have a working Wildcards extension, you need wildcard `.txt` files in appropriate directory. In the case of the two mentioned plugins, it will be the `wildcards` directory in the main directory of the extension.

The path to the directory may look like this:  
`stable-diffusion-webui/extensions/sd-dynamic-prompts/wildcards/`  
`stable-diffusion-webui/extensions/stable-diffusion-webui-wildcards/wildcards/`

Navigate to **the proper directory** and download the files.  
You can download them by using one of the following commands:
## Download with [CURL](https://curl.se/) and [XARGS](https://www.man7.org/linux/man-pages/man1/xargs.1.html)

```bash
curl -s https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/files | xargs -n 1 -P 8 curl -s -fLO --retry 3 --remote-name-all
```

## Download with [WGET](https://www.gnu.org/software/wget/) and [unzip](https://linux.die.net/man/1/unzip)

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

# ⚡️ Usage

Let's say you want to generate a scene with a woman in a random location. Let her clothing be random as well.  
`photography of __nationalities__ woman BREAK wearing __colors__ __clothes_upper__ BREAK in __locations__`

The initial prompt will look as follows:  
`photography of Polish woman BREAK wearing purple jacket BREAK in city street`

With `sd-dynamic-prompts`, you can also use [Variables](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#variables)

`${c=__colors__} woman in __locations__ BREAK ${c} shirt BREAK ${c} skirt BREAK ${c} boots`

The prompt will look like this:  
`woman in park BREAK pink shirt BREAK pink skirt BREAK pink boots`

You can read more about BREAK keyword [in this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/15bty86/prompt_trick_for_more_consistent_results_in/).

**WARNING**: [Nationalities](https://github.com/Avaray/stable-diffusion-simple-wildcards/blob/main/nationalities.txt) does not work well with `Pony Diffusion` checkpoints. You need to use it with good checkpoints focused on real people. I recommend using one of following checkpoints:

- [WildCardX-XL](https://civitai.com/models/239561/wildcardx-xl) `SDXL 1.0`
- [ZavyChromaXL](https://civitai.com/models/119229/zavychromaxl) `SDXL 1.0`
- [\_CHINOOK\_](https://civitai.com/models/400589/chinook) `SDXL 1.0`
- [epiCRealism XL](https://civitai.com/models/277058/epicrealism-xl) `SDXL 1.0`

# 📝 Contributing

If you believe something is missing, that something could be useful, or that something should be removed, go ahead - [fork this repository, edit the files, and submit a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

# 🍺 Original sources

- The list of Nationalities `nationalities.txt` was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/13oea0i/photorealistic_portraits_of_200_ethinicities/), modified and expanded by me.
- The list of Light types `lighting.txt` was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/1cjwi04/made_this_lighting_guide_for_myself_thought_id/), modified and expanded by me.
- The first list of Artists `artists.txt` was obtained from the [Stable Diffusion Cheat-Sheet](https://supagruen.github.io/StableDiffusion-CheatSheet/) website.
- The second list of Artists `artists2.txt` was obtained from the [SDXL Artist Style Studies](https://sdxl.parrotzone.art/). File `artists2_tagged.txt` contains only artists with tags (prompts in this file will increase the chance of generating a specific style). To extract data from [original file](<https://github.com/proximasan/sdxl_artist_styles_studies/blob/main/static/SDXL%20Image%20Synthesis%20Style%20Studies%20Database%20(Copy%20of%20The%20List)%20-%20Artists.csv>) use `/scripts/artists2.ts` script.
