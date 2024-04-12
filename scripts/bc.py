"""
The following code takes a bandcamp embed code as input and returns the specific
ID used.

eg:

<iframe style="border: 0; width: 350px; height: 470px;" 
src="https://bandcamp.com/EmbeddedPlayer/album=2908653836/size=large/bgcol=ffffff/linkcol=0687f5/
tracklist=false/transparent=true/" seamless><a href=
"https://faoithalamhrecords.bandcamp.com/album/from-the-river-to-the-sea-various-artists-compilation"
>From the River to the Sea - Various Artists Compilation by Faoi Thalamh Records</a></iframe>

It returns ID: album=2908653836
"""

import re
import pyperclip


def extract_id(input_string):
    # Define the pattern to match either album or track ID
    pattern = r"(album|track)=(\d+)"

    # Use re.search to find the match in the input string
    match = re.search(pattern, input_string)

    # Check if a match is found
    if match:
        # Extract and return the ID type and value
        id_type, id_value = match.groups()
        result = f"{id_type}={id_value}"

        # Copy the result to the clipboard
        pyperclip.copy(result)

        return result
    else:
        # Return None if no match is found
        return None


# Continuously prompt the user for input until they type "q" or "quit"
while True:
    # Get user input from the terminal
    input_string = input("Enter the string (type 'q' or 'quit' to exit): ")

    # Check if the user wants to exit
    if input_string.lower() in ("q", "quit"):
        print("Exiting the program.")
        break

    # Call the function to extract the album or track ID
    result = extract_id(input_string)

    # Display the result
    if result:
        print(f"ID: {result}")
        print("Result copied to clipboard.")
    else:
        print("No album or track ID found.")
