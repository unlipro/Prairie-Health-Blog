const settings = {
  "name": "Kampung Inggris",
  "state": {
    "frontity": {
      "url": "https://www.kampunginggris.id",
      "title": "Kampung Inggris Pare - Kampung Inggris LC Pare Kediri",
      "description": "Terbukti Lebih dari 30.273 Alumni BERHASIL. Kampung Inggris LC - Lembaga Kursus Bahasa Inggris Terbesar Terlengkap &amp; Terfavorit di Kampung Inggris Pare Kediri"
    },
    "social": {
        "facebook": "https://www.youtube.com/channel/UCkqMfKX1LxQiiqU7UyZH4nw",
        "instagram": "https://www.instagram.com/kampunginggrislc/",
        "linkedin": "https://www.instagram.com/kampunginggrislc/",
    },
    "joinbutton" : {
        "joinbuttonlabel": "Visit Kampung Inggris",
        "joinbuttonurl": "https://www.kampunginggrislc.com/",
    },
    "others": {
        "relatedpost": "Related Posts",
    },
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "All",
              "/"
            ],
            [
              "Anxiety",
              "/category/anxiety/"
            ],
            [
              "Depression",
              "/category/depression/"
            ],
            [
              "Mental Health Tips",
              "/category/mental-health-tips/"
            ],
            [
              "Medication",
              "/category/medication/"
            ],
            [
              "COVID",
              "/category/covid/"
            ],
            [
              "Lifestyle",
              "/category/lifestyle/"
            ],
            [
              "Info Akademik",
              "/info-akademik/"
            ]
          ],
          "showSearchInHeader": true,
          "showAllContentOnArchive": true,
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          "fontSets": "us-ascii"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.kampunginggris.id",
          "params": {
            "per_page": 12,
            "type": ["post"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-gutenberg-styles"
  ]
};

export default settings;
