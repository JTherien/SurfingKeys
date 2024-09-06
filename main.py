import os

def merge_files(js_path, css_path, output_path):
    try:
        with open(js_path, 'r') as js_file:
            js_content = js_file.read()

        with open(css_path, 'r') as css_file:
            css_content = css_file.read()

        split_marker = 'settings.theme = ``;'
        if split_marker in js_content:
            js_parts = js_content.split(split_marker)
            merged_content = js_parts[0] + f'settings.theme = `{css_content}`;' + js_parts[1]

            with open(output_path, 'w') as output_file:
                output_file.write(merged_content)
            
            print(f'Merged file written to {output_path}')
        else:
            print(f'Marker "{split_marker}" not found in {js_path}')

    except Exception as e:
        print(f'An error occurred: {e}')

if __name__ == '__main__':

    # Define file paths
    configFile = 'settings.js'
    themeFile = 'tokyonight.css'
    flatFile = 'SurfingKeysConfig.js'

    # Call the merge function
    merge_files(configFile, themeFile, flatFile)