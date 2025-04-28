// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://alvacode.github.io',
    base: 'iota-rebase-academy',
    integrations: [
		starlight({
			title: 'IOTA Rebase Academy',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [{ icon: 'twitter', label: 'Twitter', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: '¿Qué es IOTA Rebase?', slug: 'intro/que-es-iota-rebase' },
					],
				}
			],
		}),
	],
});
