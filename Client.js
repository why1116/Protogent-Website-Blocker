// ==UserScript==
// @name Protegent Website Blocker
// @description Redirects to a blocked page if the website is not whitelisted
// @version 1.0
// @match *://*/*
// @run-at document-start
// @grant none
// ==/UserScript==

var whitelist = ["beanzgdpsv2.ps.fhgdps.com","bing.com", "protegent360.com", "stackoverflow.com", "github.com", "google.com", "youtube.com", "discord.com", "localhost", "drive.google.com", "photonengine.com", "unity.com", "duolingo.com", "character.ai", "openai.com", "facebook.com", "emeraldchat.com", "gmail.com", "speedtest.net", "guilded.gg", "meta.com", "oculus.com", "gitlab.com"];

var currentDomain = window.location.hostname;

var isAllowed = whitelist.some(function(allowedDomain) {
    return currentDomain.endsWith(allowedDomain);
});

if (!isAllowed) {
    var urlObject = new URL(window.location.href);
    var baseDomain = urlObject.hostname.split('.').slice(-2).join('.'); // Extract the base domain

    var lastVisited = encodeURIComponent(baseDomain);
    var blockedPageURL = "https://beanzgdpsv2.ps.fhgdps.com/WebsiteBlocked/index.html?blocked=" + lastVisited;
    window.location.replace(blockedPageURL);
}