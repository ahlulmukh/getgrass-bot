require("colors");
const axios = require("axios");
const fs = require("fs");

const PROXY_SOURCES = {
  "SERVER 1": "https://files.ramanode.top/airdrop/grass/server_1.txt",
  "SERVER 2": "https://files.ramanode.top/airdrop/grass/server_2.txt",
  "SERVER 3": "https://files.ramanode.top/airdrop/grass/server_3.txt",
  "SERVER 4": "https://files.ramanode.top/airdrop/grass/server_4.txt",
  "SERVER 5": "https://files.ramanode.top/airdrop/grass/server_5.txt",
  "SERVER 6": "https://files.ramanode.top/airdrop/grass/server_6.txt",
};

async function fetchProxies(url) {
  try {
    const response = await axios.get(url);
    console.log(`\nFetched proxies from ${url}`.green);
    return response.data.split("\n").filter(Boolean);
  } catch (error) {
    console.error(`Failed to fetch proxies from ${url}: ${error.message}`.red);
    return [];
  }
}

async function readLines(filename) {
  try {
    const data = await fs.promises.readFile(filename, "utf-8");
    console.log(`Loaded data from ${filename}`.green);
    return data.split("\n").filter(Boolean);
  } catch (error) {
    console.error(`Failed to read ${filename}: ${error.message}`.red);
    return [];
  }
}

module.exports = { fetchProxies, readLines };
