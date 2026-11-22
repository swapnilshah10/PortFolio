import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://personal.silentkillerop.me/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://personal.silentkillerop.me/Swapnil_Shah_Backend_Developer_v2.pdf', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
