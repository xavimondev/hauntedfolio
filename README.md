
<div align="center">
<a href=https://github.com/xavimondev/hauntedfolio target="_blank">
  <img src='https://hauntedfolio.vercel.app/og-image.avif' width="100%" alt="Banner" />
</a>
</div>

## Overview

HauntedFolio generates a fun, creepy portfolio to showcase your top repositories, languages, and bio, enhanced with spooky visuals and mysterious facts. The app creates a haunted-style video that highlights your projects in an unsettling way, offering a unique, spine-chilling way to display your skills. Powered by Cloudinary for image transformations and video generation, HauntedFolio is the perfect blend of tech and terror!


## Stack

- [Astro](https://astro.build/): The web framework for content-driven websites.
- [Cloudinary](https://cloudinary.com/): Image and Video API Platform.
- [Vercel AI SDK](https://sdk.vercel.ai/): The Vercel AI SDK to help developers build AI-powered applications.
- [Uptash](https://upstash.com/): Data caching.
- [Tailwindcss](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

## Setting Up

### PUBLIC_CLOUDINARY_CLOUD_NAME

- Go to the [Cloudinary website](https://cloudinary.com/).
- Sign in to your account or create a new one.
- Navigate to dashboard’s page, you’ll see your Cloud Name.
- Copy the Cloud Name.

### PUBLIC_CLOUDINARY_API_KEY - CLOUDINARY_API_SECRET

- Navigate to Settings.
- Under API Keys, click on Generate API Key.
- Copy the generated API Key and API Secret.

### OPENAI_API_KEY

- Go to the [OpenAI website](https://openai.com/).
- Sign in to your account or create a new one.
- Navigate to your [API settings](https://platform.openai.com/account/api-keys).
- Generate an Secret key.
- Copy the generated Secret key.

### UPSTASH_REDIS_REST_URL - UPSTASH_REDIS_REST_TOKEN

- Go to the Uptash [console](https://console.upstash.com/).
- Sign in to your account or create a new one.
- Navigate to your database.
- Copy the generated keys.

## Run Locally

1.Clone the hauntedfolio repository:

```sh
git clone https://github.com/xavimondev/hauntedfolio
```

2.Rename the `.env.example` to `.env`:

```bash
mv .example.env .env
```

3.Install dependencies:

```bash
# bun
bun install
# pnpm
pnpm install
# npm
npm install
# yarn
yarn install
```

6.Start the development mode:

```bash
# bun
bun dev
# pnpm
pnpm dev
# npm
npm run dev
# yarn
yarn dev
```

## License

This project is licensed under the **MIT License** - see the [**MIT License**](https://github.com/xavimondev/hauntedfolio/blob/main/LICENSE) file for details.