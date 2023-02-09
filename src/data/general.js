/* globals GLOBAL_DOMAIN, GLOBAL_PATH */

const domain = GLOBAL_DOMAIN;
const baseDir = GLOBAL_PATH;
const share = {
    title: '',
    description: '',
};

export default {
    domain,
    baseDir,
    title: '',
    description: '',
    keywords: '',
    image: '',
    link: {
        // appleTouchIcon180x180: `${baseDir}favicon/apple-touch-icon.png`,
        // icon32x32: `${baseDir}favicon/favicon-32x32.png`,
        // icon192x192: `${baseDir}favicon/android-chrome-192x192.png`,
        // icon16x16: `${baseDir}favicon/favicon-16x16.png`,
        // manifest: `${baseDir}site.webmanifest`,
        // maskIcon: {
        //     href: `${baseDir}favicon/safari-pinned-tab.svg`,
        //     color: '#5bbad5',
        // },
        // icon: `${baseDir}favicon/favicon.ico`,
    },
    meta: {
        // msapplicationTileColor: '#00aba9',
        // msapplicationTileImage: `${baseDir}favicon/mstile-144x144.png`,
        // msapplicationConfig: `${baseDir}browserconfig.xml`,
        // themeColor: '#ffffff',
        ogTitle: share.title,
        ogDescription: share.description,
        // ogImageType: 'image/jpeg',
        // ogImageWidth: '',
        // ogImageHeight: '',
        twitterTitle: share.title,
        twitterDescription: share.description,
    },
};
