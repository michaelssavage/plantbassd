"""
The following code takes a text file with items in the following format:

OPM006 - Ring Ring EP by Fonzo (ec2a)
https://fonzomusic.bandcamp.com/album/opm006-ring-ring-ep
album=3938394788
First up is Fonzo who hit us with his newest EP on the first day of March. He goes speedy on it with Capo Lee supplying grimey vocals on ‘Ring Ring’, before handbrake turning into grubby late nighter ‘Acid Baile Techno Tool’. OPM006 is sprinkled with these unpredictable elements throughout and is complete with a DJ ADHD remix.


and returns the following:

<MusicRelease
  pic="/under-the-radar/march/1.jpg"
  title="OPM006 - Ring Ring EP by Fonzo"
  link="https://fonzomusic.bandcamp.com/album/opm006-ring-ring-ep"
  titleLabel="(ec2a)"
  embed="album=3938394788"
>
  First up is Fonzo who hit us with his newest EP on the first day of March. He goes speedy on it
  with Capo Lee supplying grimey vocals on ‘Ring Ring’, before handbrake turning into grubby late
  nighter ‘Acid Baile Techno Tool’. OPM006 is sprinkled with these unpredictable elements throughout
  and is completed with a DJ ADHD remix.
</MusicRelease>

"""

import re


def extract_title_label(title_line):
    match = re.search(r"\((.*?)\)", title_line)
    if match:
        return match.group(0)
    else:
        return ""


def generate_music_release(title, link, description, pic, titleLabel, embed):

    if titleLabel:
        return f"""
<MusicRelease
  pic="{pic}"
  title="{title}"
  link="{link}"
  titleLabel="{titleLabel}"
  embed="{embed}"
>
  {description.strip()}
</MusicRelease>
          """

    return f"""
<MusicRelease
  pic="{pic}"
  title="{title}"
  link="{link}"
  embed="{embed}"
>
  {description.strip()}
</MusicRelease>
      """


def process_text_document(file_path, month):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    music_releases = []
    index = 0
    nmbr = 1
    while index < len(lines) - 1:
        pic = f"/under-the-radar/{month}/{nmbr}.jpg"
        title = lines[index].strip()
        link = lines[index + 1].strip()
        embed = lines[index + 2].strip()
        description = lines[index + 3].strip()

        titleLabel = extract_title_label(title)
        if titleLabel:
            title = title.replace(titleLabel, "").strip()

        music_releases.append(
            generate_music_release(title, link, description, pic, titleLabel, embed)
        )

        # Increment index for the next music release
        index += 5
        nmbr += 1

    return music_releases


def main():
    file_path = input("file location: ")
    if not file_path:
        file_path = "utr.txt"
    month = input("month: ")
    music_releases = process_text_document(file_path, month)

    with open("result.mdx", "w", encoding="utf-8") as result_file:
        for release in music_releases:
            result_file.write(release)
            result_file.write("\n\n")

    print("Results have been saved to result.mdx")


if __name__ == "__main__":
    main()
