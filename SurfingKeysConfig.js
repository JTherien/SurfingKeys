/* Todo
- o: Open URL (Similar to how Vimium does it, `go` seems to accomplish this but unless it is a proper url, it will just resolve to a google search)
- r: Open subreddit (Similar to how Vimium does search, "https://old.reddit.com/r/%s"
- Disable features that I do not need
- Change interactive input box theme to tokyonight
*/

//https://blog.yech.xyz/posts/surfingkeys_vimium_like_setting/
// api.mapkey("ou", "Open a URL", 'Normal.openOmnibar({type: "URLs"})');

// unmap for reddit
api.unmap("j", /old.reddit.com/);
api.unmap("k", /old.reddit.com/);
api.unmap("z", /old.reddit.com/);
api.unmap("C", /old.reddit.com/);

// disable for roll20
api.unmapAllExcept([], /app.roll20.net/);

// unmap close window
api.unmap("x");

// unmap and remap search engines
api.unmap("sg");
api.unmap("sd");
api.unmap("se");
api.unmap("sw");
api.unmap("ss");
api.unmap("sh");
api.unmap("sy");

api.removeSearchAlias("b");
api.addSearchAlias("b", "brave", "https://www.search.brave.com/search?q=");
// api.addSearchAlias("r", "subreddit", "https://old.reddit.com/r/");

api.unmap("om");
api.unmap("og");
api.unmap("od");
api.unmap("ob");
api.unmap("oe");
api.unmap("ow");
api.unmap("os");
api.unmap("oy");
api.unmap("ox");
api.unmap("oh");

api.unmap("r");

// History
api.map("H","S");
api.map("L","D");

// follow links hotkeys
api.Hints.setCharacters("qweasdzxc");


// set theme - tokyonight
settings.theme = `.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    
    --fg: #c0caf5;
    --bg: #1a1b26;
    --bg2: #15161e;
    --sel-bg: #33467c;
    --cyan: #7dcfff;
    --green: #9ece6a;
    --magenta: #bb9af7;
    --red: #f7768e;
    --yellow: #e0af68;
    --white: #a9b1d6;
    
    background: var(--bg);
    color: var(--fg);
}
.sk_theme tbody {
    color: var(--bg);
}
.sk_theme input {
    color: var(--fg);
}
.sk_theme .url {
    color: var(--magenta);
}
.sk_theme .annotation {
    color: var(--cyan);
}
.sk_theme .omnibar_highlight {
    color: var(--cyan);
}
.sk_theme .omnibar_timestamp {
    color: var(--fg);
}
.sk_theme .omnibar_visitcount {
    color: var(--fg);
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: var(--bg2);
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: var(--sel-bg);
}
.sk_theme .omnibar_folder {
    color: var(--green);
}
.sk_theme .separator {
    color: var(--green);
}

.sk_theme .prompt {
    color: var(--white);
}

#sk_status, #sk_find {
    font-size: 20pt;
}`;
