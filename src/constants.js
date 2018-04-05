export const URL_MAP = {
    "Zeit-Case-Study": {
        "hifi": 'https://invis.io/G5ETO6GZA',
        "lofi": 'https://invis.io/UVEAURME8'
    },
    "Marlowe-Case-Study": {
        "hifi": 'https://invis.io/P4FOZR9UYSG',
        "lofi": 'https://invis.io/MPFJYJST642'
    }
};

export const STUDIES = {
    "Marlowe-Case-Study": {
        study: 'Marlowe-Case-Study',
        title1: 'Responsive Website #2',
        img: '/assets/img/marlowe/Marlowe-mockups.png',
        description: 'For our next project we will upgrade the website of a local tattoo shop, making it responsive and creating a new appointment booking form in order to streamline the process for the shop management and artists.'
    },
    "Spotify-Square-Case-Study": {
        study: 'Spotify-Square-Case-Study',
        title1: 'Adding a Feature',
        img: '/assets/img/spotify-square/Spotify-Square-mockups.png',
        description: 'Our next project deals with syncing two tablet apps together to enable small business owners to record sales + music data for their business, while giving them the knowledge they need to optimize their playlists.'
    }
};

const STUDY_ARRAY = ['Zeit-Case-Study', 'Marlowe-Case-Study', 'Spotify-Square-Case-Study'];

export function lookupStudy(study) {
    console.log(study)
    let nextStudy = STUDY_ARRAY[STUDY_ARRAY.indexOf(study) + 1];
    console.log(nextStudy)
    console.log(STUDIES[nextStudy]);
    return STUDIES[nextStudy];
}

/*
* Zeit Lo-Fi   https://invis.io/UVEAURME8
Zeit Hi-Fi  https://invis.io/G5ETO6GZA

Marlowe Mid-Fi  https://invis.io/MPFJYJST642
Marlowe Hi-Fi  https://invis.io/P4FOZR9UYSG

Spotify + Square Lo-Fi  https://invis.io/QAG2BS77BWK
Spotify + Square Hi-Fi  https://invis.io/QKG5DT2VXFW

Helping Hands Mid-Fi  https://invis.io/KAGEWOH4UEX
Helping Hands Hi-Fi  https://invis.io/XZGLIJFFB4A

*
**/