import { useEffect } from 'react';
import { companyDetails } from '../data/siteData';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) {
      element.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function useSeo({
  title,
  description,
  path = '/',
  image = '/ss-roofing-logo-colour.png',
  keywords = '',
  structuredData
}) {
  useEffect(() => {
    const canonicalUrl = `${companyDetails.websiteUrl}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${companyDetails.websiteUrl}${image}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', keywords);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', path.startsWith('/blog/') ? 'article' : 'website');
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:image"]', 'content', imageUrl);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', imageUrl);
    setMeta('meta[name="geo.placename"]', 'content', 'Hayes, Middlesex, United Kingdom');
    setLink('canonical', canonicalUrl);

    let scriptElement = document.head.querySelector('script[data-seo-schema="true"]');
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.type = 'application/ld+json';
        scriptElement.setAttribute('data-seo-schema', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(Array.isArray(structuredData) ? structuredData : structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      const existingScript = document.head.querySelector('script[data-seo-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [description, image, keywords, path, structuredData, title]);
}

export default useSeo;
