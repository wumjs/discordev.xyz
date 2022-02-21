module.exports = {
  bot: {
    token: "",
    prefix: "+",
    owners: ["",""],
    mongourl: "",
    servers: {
      token: "",
      prefix: "-"
    }
  },

  website: {
    callback: "",
    secret: "",
    clientID: "", // Bot client id.
    tags: ["Moderation", "Fun", "Minecraft", "Economy", "Guard", "NSFW", "Anime", "Invite", "Music", "Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish"],
    reporttags: ["Choose one...","NSFW content","API abuse","Malicious use of bot page","Copycat","Doesn't work","Other"],
    languages: [
      { flag: 'gb', code: 'en', name: 'English' },
      { flag: 'in', code: 'hi', name: 'हिंदी' },
      { flag: 'in', code: 'te', name: 'తెలుగు' },
      { flag: 'tr', code: 'tr', name: 'Türkçe' },
      { flag: 'de', code: 'de', name: 'Deutsch' },
      { flag: 'it', code: 'it', name: 'Italiano' },
      { flag: 'ne', code: 'ne', name: 'नेपाली' },
      { flag: 'ar', code: 'ar', name: 'العربية' },
      { flag: 'fr', code: 'fr', name: 'French' },
      { flag: 'pl', code: 'pl', name: 'Polish' }
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development"
        },
        {
          icon: "fal fa-play",
          name: "Stream"
        },
        {
          icon: "fal fa-camera",
          name: "Media"
        },
        {
          icon: 'fal fa-building',
          name: 'Company'
        },
        {
          icon: 'fal fa-gamepad',
          name: 'Game'
        },
        {
          icon: 'fal fa-icons',
          name: 'Emoji'
        },
        {
          icon: 'fal fa-robot',
          name: 'Bot List'
        },
        {
          icon: 'fal fa-server',
          name: 'Server List'
        },
        {
          icon: 'fal fa-moon-stars',
          name: 'Turkish'
        },
        {
          icon: 'fab fa-discord',
          name: 'Support'
        },
        {
          icon: 'fal fa-volume',
          name: 'Sound'
        },
        {
          icon: 'fal fa-comments',
          name: 'Chatting'
        },
        {
          icon: 'fal fa-lips',
          name: 'NSFW'
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange"
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest"
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay"
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme"
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop"
        },
        {
          icon: "fal fa-desktop",
          name: "Technology"
        },
        {
          icon: "fal fa-laugh",
          name: "Fun"
        },
        {
          icon: "fal fa-share-alt",
          name: "Social"
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor"
        },
        {
          icon: 'fal fa-palette',
          name: 'Design'
        },
        {
          icon: 'fal fa-users',
          name: 'Community'
        }
      ]
    }
  },

  server: {
    id: "88720", // DisBots.xyz Server ID
    invite: "https:/",
    dblinvite: "",
    roles: {
      yonetici: "928031757666746449", // Team roleid
      manager: "928566852324573245",// Community Manager Role Id
      booster: "928033045213229086", // Server booster Role ID
      sponsor: "929795159984599110", // Sponsor Role id
      community: "930847241265094736", // Community Role id
      supporter: "934465804467068938",// Supporter Role  id
      partnerRole: "944553232145993748", // Partner Role id
      site_creator: "928031757666746449",// Site Creator Role id
      administrator: "928566852324573245", // Team Role id Again
      moderator: "928556950873047090", // bot tester Role id
      moderatorrole: "934465804467068938", // Server Moderator Role id
      profile: {
        sitecreator:"929837700662583296", // Site Creator Role id
        booster: "928033045213229086",// Server booster Role ID
        community: "930847241265094736",// Community Role id
        sponsor: "929795159984599110", // Sponsor Role id
        supporter: "934465804467068938", // Supporter Role id
        manager: "928566852324573245", // Community Manager Role Id
        partnerRole: "944553232145993748" // Partner Role id
      },
      codeshare: {
        python: "PY",
        javascript: "JS",
        html: "HTML",
        substructure: "Substructure",
        bdfd: "BDFD", // Bot Designer For Discord
        fiveInvite: "5 INVITES",
        tenInvite: "10 INVITES",
        fifteenInvite: "15 INVITES",
        twentyInvite: "20 INVITES"
      },
      botlist: {
        ownerserver: "944143955468095528", // Server Owner Role ID
        developer: "930847241265094736", // Bot Developer Role ID
        certified_developer: "933782178469384222",// Certified Bot Developer Role ID
        boosted_developer: "944143942700658698", // Boosted Bot Developer Role ID
        promoted_developer: "944144355910877224",// Promoted Bot Developer Role ID
        premium_developer: "942777088308568064",// Premium Server Owner Role ID
        bot: "930853557756911648",// Approved Bot Role ID
        boosted_bot: "928312080795312198", // Boosted Bot Role ID
        promoted_bot: "942777698630115348",// Promoted Bot Role ID
        certified_bot: "944144201996718121"// Certified Bot Role ID
      }
    },
    channels: {
      codelog: "935856969162584154", // Code Log
      login: "935857708421247036",// Login Log
      webstatus: "935857765182734376",// Website Status Log
      uptimelog: "935857821428367370",// Uptime Log
      botlog: "935857860821282816",// bot Log
      reportlog: "945070434255269908",// bot report Log
      votes: "935857887916458015"// Vote Log Log
    }
  }


}
