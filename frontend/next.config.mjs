/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com',"media.tenor.com"], // Add Cloudinary domain here
    },
    productionBrowserSourceMaps: true,
  };
  
  export default nextConfig;
  