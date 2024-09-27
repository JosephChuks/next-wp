import Categories from "@/components/Categories";
import settings from "@/settings.json";

export const metadata = {
  title: `Categories | ${settings.seo.title}`,
  canonical: `/category`,

  openGraph: {
    url: `/category`,
    title: `Categories | ${settings.seo.title}`,
    images: [
      {
        url: `${settings.icon}`,
        width: 800,
        height: 600,
        alt: `${settings.seo.tagline}`,
        type: "image/jpeg",
      },
    ],
    siteName: `${settings.seo.title}`,
  },
};
export default async function CategoriesPage() {
  return <Categories />;
}
