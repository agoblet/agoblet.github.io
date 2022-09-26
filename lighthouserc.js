module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    collect: {
      url: [
        "http://localhost/",
        "http://localhost/content",
        "http://localhost/about",
        "http://localhost/notfound",
        "http://localhost/projects",
      ],
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
