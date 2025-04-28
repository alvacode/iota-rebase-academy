// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
    site: 'https://iota.academy',
    integrations: [
        starlight({
            title: 'IOTA Rebase Academy',
            description: 'IOTA Rebase Academy',
            tableOfContents: false,
            customCss: [
                './src/assets/css/custom-styles.css'
            ],
            defaultLocale: 'root',
            components: {
                PageFrame: './src/components/MyPageFrame.astro',
                ThemeSelect: './src/components/EmptyThemeSelect.astro',
            },
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'sitemap',
                        href: '/sitemap-index.xml',
                    },
                },
                {
                    tag: 'link',
                    attrs: {
                        rel: 'icon',
                        href: '/favicon.ico',
                    },
                },
                {
                    tag: 'script',
                    attrs: {
                        async: true,
                        src: 'https://www.googletagmanager.com/gtag/js?id=G-7JB7YPGTF2',
                        type: 'text/partytown',
                    },
                },
                {
                    tag: 'script',
                    content: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-7JB7YPGTF2');
                        `,
                    attrs: {
                        type: 'text/partytown',
                    },
                },
            ],
            locales: {
                root: {
                    label: 'Español',
                    lang: 'es',
                },
            },
            social: [
                { icon: 'x.com', label: 'Twitter', href: 'https://github.com/withastro/starlight' },
                { icon: 'youtube', label: 'Youtube', href: 'https://github.com/withastro/starlight' },
            ],
            sidebar: [
                {
                    label: 'El Protocolo',
                    items: [
                        { label: '¿Qué es IOTA Rebase?', slug: 'el-protocolo/que-es-iota-rebase' },
                        {
                            label: 'Arquitectura',
                            items: [
                                {
                                    label: 'Seguridad',
                                    slug: 'el-protocolo/arquitectura/seguridad',
                                },
                                {
                                    label: 'Ciclo de vida de una transacción',
                                    slug: 'el-protocolo/arquitectura/ciclo-vida-transaccion',
                                },
                                {
                                    label: 'Comité de validadores',
                                    slug: 'el-protocolo/arquitectura/comite-validadores',
                                },
                            ]
                        },
                    ],
                },
                {
                    label: 'SDKs y CLI',
                    items: [],
                },
                {
                    label: 'Smart Contracts con MOVE',
                    items: [],
                },
                {
                    label: 'Identidad Digital',
                    items: [],
                }
            ],
		}),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
        sitemap(),
    ],
});