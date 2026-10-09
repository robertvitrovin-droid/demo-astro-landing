import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://robertvitrovin-droid.github.io', base: '/demo-astro-landing/', build: { inlineStylesheets: 'always' }, compressHTML: true });
