// an example to create a new mapping `ctrl-y`
/* Todo
- Shift + H: Go back (Currently Shift + B and Shift + F, switch to H and L?)
- o: Open URL (Similar to how Vimium does it, `go` seems to accomplish this but unless it is a proper url, it will just resolve to a google search)
- r: Open subreddit (Similar to how Vimium does search, "https://old.reddit.com/r/%s"
- Disable features that I do not need
- Change interactive input box theme to tokyonight
*/

//https://blog.yech.xyz/posts/surfingkeys_vimium_like_setting/
// api.mapkey("ou", "Open a URL", 'Normal.openOmnibar({type: "URLs"})');

// unmap for reddit
//api.unmap(['j','k','z'], '/old.reddit.com/');

// follow links hotkeys
api.Hints.setCharacters('qweasdzxc');

// set theme - tokyonight
settings.theme = ``;