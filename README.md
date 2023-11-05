# 📑 Simple Wildcards for Stable Diffusion WebUI

This is my collection of useful Wildcards. I created them using [ChatGPT](https://chat.openai.com) to streamline my work with [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and avoid using the [Dynamic Prompts](https://github.com/adieyal/sd-dynamic-prompts) extension, which I used before. Through my experience, I've found that Wildcards are more convenient to use.

The purpose of these Wildcards is to introduce randomness and diversity into the created graphics. They are mainly intended to help you in creating scenes with people.

# 📦 Installation 
To use these Wildcards, you need an extension. You can use the official one [stable-diffusion-webui-wildcards](https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards).  
Of course, there are other extensions that allow you to use Wildcards. I recommend the one I mentioned because it's the simplest.

Most likely, after installing the extension, you'll need to restart Stable Diffusion (or the [rented server](https://cloud.vast.ai/?ref_id=62878&creator_id=42512&name=null)) for the extension to work correctly. A simple reload of WebUI may not be sufficient.

Once you have a working Wildcards extension, you just need to copy wildcard files to the appropriate directory.  
In the case of [stable-diffusion-webui-wildcards](https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards), it will be   `stable-diffusion-webui/extensions/stable-diffusion-webui-wildcards/wildcards/`

You can download these files as a [compressed archive](https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip) and extract them on your machine, or you can download them using [Git](https://git-scm.com/docs/git-clone), whichever is more convenient for you.

# ⚡️ Usage
Let's say you want to generate a scene with a woman in a random location. Let her clothing be random as well.  
`photography of __nationalities__ woman BREAK wearing __colors__ __clothes_upper__ BREAK in __locations__`

The initial prompt will look as follows:  
`photography of Polish woman BREAK wearing purple jacket BREAK in city street`


# 📝 Contributing
If you believe something is missing, that something could be useful, or that something should be removed, go ahead - [fork this repository, edit the files, and submit a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).
