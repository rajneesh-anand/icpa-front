import prisma from "@/libs/prisma";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const blogs = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      slug: true,
    },
  });

  const services = await prisma.services.findMany({});
  const courses = await prisma.courses.findMany({});

  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.icpaglobalconsultant.com",
  }[process.env.NODE_ENV];

  const staticPages = [
    "https://www.icpaglobalconsultant.com/about",
    "https://www.icpaglobalconsultant.com/contact",
    "https://www.icpaglobalconsultant.com/services",
    "https://www.icpaglobalconsultant.com/courses",
    "https://www.icpaglobalconsultant.com/course/amazon",
    "https://www.icpaglobalconsultant.com/course/flipkart",
    "https://www.icpaglobalconsultant.com/products",
    "https://www.icpaglobalconsultant.com/franchise",
    "https://www.icpaglobalconsultant.com/telephonic-consultation",
    "https://www.icpaglobalconsultant.com/blogs",
    "https://www.icpaglobalconsultant.com/courses/youtube",
    "https://www.icpaglobalconsultant.com/faq",
    "https://www.icpaglobalconsultant.com/privacy",
    "https://www.icpaglobalconsultant.com/terms-service",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
   
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}


          ${blogs
            .map((blog) => {
              return `
              <url>
                <loc>${baseUrl}/blog/${blog.slug}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
            })
            .join("")}

              ${services
                .map((item) => {
                  return `
              <url>
                <loc>${baseUrl}/service/${item.slug}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
                })
                .join("")}
                ${courses
                  .map((item) => {
                    return `
                  <url>
                    <loc>${baseUrl}/course/${item.slug}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1.0</priority>
                  </url>
                `;
                  })
                  .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
