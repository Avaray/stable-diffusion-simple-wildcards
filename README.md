# 📑 Simple Wildcards Collection for Stable Diffusion

This is my collection of useful [Wildcards](https://github.com/adieyal/sd-dynamic-prompts/blob/main/docs/SYNTAX.md#wildcards). I created most of them using [ChatGPT](https://chat.openai.com) to streamline my work with [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and avoid using the [Dynamic Prompts](https://github.com/adieyal/sd-dynamic-prompts/tree/main?tab=readme-ov-file#basic-usage), which I used before. Through my experience, I've found that Wildcards are more convenient to use.

The purpose of these Wildcards is to introduce randomness and diversity into the created graphics. They are mainly intended to help you in creating scenes with people.

# 💻 Preparations

To use these Wildcards, you need an extension. You can use one of the following:

- [sd-dynamic-prompts](https://github.com/adieyal/sd-dynamic-prompts)
- [stable-diffusion-webui-wildcards](https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards)

Most likely, after installing the extension, you'll need to restart Stable Diffusion (or the [rented server instance](https://cloud.vast.ai/?ref_id=62878&creator_id=42512&name=null)) for the extension to work correctly. A simple reload of WebUI may not be sufficient.

# 💾 Installation

Once you have a working Wildcards extension, you just need to copy wildcard `.txt` files to the appropriate directory.  
In the case of the two mentioned plugins, it will be the `wildcards` folder in the main directory of the extension.  
For example `stable-diffusion-webui/extensions/stable-diffusion-webui-wildcards/wildcards/`

### How to download Wildcards ???

- You can manually download these files as a [compressed archive](https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip) and extract them by yourself.
- You can download them using [git-clone](https://git-scm.com/docs/git-clone) (output directory must be empty).

# ⚡️ Usage

Let's say you want to generate a scene with a woman in a random location. Let her clothing be random as well.  
`photography of __nationalities__ woman BREAK wearing __colors__ __clothes_upper__ BREAK in __locations__`

The initial prompt will look as follows:  
`photography of Polish woman BREAK wearing purple jacket BREAK in city street`

# 📝 Contributing

If you believe something is missing, that something could be useful, or that something should be removed, go ahead - [fork this repository, edit the files, and submit a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

# 🍺 Original sources

- The list of Nationalities was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/13oea0i/photorealistic_portraits_of_200_ethinicities/), modified and expanded by me.
- The list of Light types was inspired by [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/1cjwi04/made_this_lighting_guide_for_myself_thought_id/), modified and expanded by me.
- The list of Artists was obtained from the [Stable Diffusion Cheat-Sheet](https://supagruen.github.io/StableDiffusion-CheatSheet/) website.
