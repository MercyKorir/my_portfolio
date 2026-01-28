import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
}

const defaultSEO = {
  title: "Mercy Chelangat - Full Stack Engineer | React & TypeScript Developer",
  description:
    "Full Stack Engineer with 3+ years of experience building scalable web applications using React, TypeScript, Node.js, and modern frameworks.",
  keywords:
    "Full Stack Developer, React Developer, TypeScript, Frontend Engineer, Web Developer, Software Engineer, Mercy Chelangat",
  ogImage: "https://mercykorir.github.io/my_portfolio/og-image.png",
  ogUrl: "https://mercykorir.github.io/my_portfolio/",
  twitterHandle: "@mc_dev7878",
  canonicalUrl: "https://mercykorir.github.io/my_portfolio/",
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  twitterHandle,
  canonicalUrl,
}) => {
  useEffect(() => {
    const pageTitle = title || defaultSEO.title;
    document.title = pageTitle;

    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        const [attr, value] = selector.replace(/[[\]]/g, "").split("=");
        element.setAttribute(attr, value.replace(/['"]/g, ""));
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag(
      'meta[name="description"]',
      description || defaultSEO.description,
    );

    updateMetaTag('meta[name="keywords"]', keywords || defaultSEO.keywords);

    updateMetaTag('meta[property="og:title"]', pageTitle);
    updateMetaTag(
      'meta[property="og:description"]',
      description || defaultSEO.description,
    );
    updateMetaTag('meta[property="og:image"]', ogImage || defaultSEO.ogImage);
    updateMetaTag('meta[property="og:url"]', ogUrl || defaultSEO.ogUrl);

    updateMetaTag('meta[name="twitter:title"]', pageTitle);
    updateMetaTag(
      'meta[name="twitter:description"]',
      description || defaultSEO.description,
    );
    updateMetaTag('meta[name="twitter:image"]', ogImage || defaultSEO.ogImage);
    updateMetaTag(
      'meta[name="twitter:creator"]',
      twitterHandle || defaultSEO.twitterHandle,
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        canonicalUrl || defaultSEO.canonicalUrl,
      );
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute(
        "href",
        canonicalUrl || defaultSEO.canonicalUrl,
      );
      document.head.appendChild(canonicalLink);
    }
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogUrl,
    twitterHandle,
    canonicalUrl,
  ]);

  return null;
};

export default SEO;
