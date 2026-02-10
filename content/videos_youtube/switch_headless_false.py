import sys
import glob
import re

def switch_headless(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Match YAML frontmatter block
        match = re.match(r"(?s)^---\n(.*?)\n---\n(.*)", content)
        if not match:
            print(f"⚠️ Skipping: no frontmatter → {filepath}")
            return

        frontmatter, body = match.groups()

        # Only switch headless: true → false
        if "headless: true" in frontmatter:
            new_frontmatter = frontmatter.replace("headless: true", "headless: false")
            print(f"✅ Switched headless → false → {filepath}")
        elif "headless: false" in frontmatter:
            print(f"⚪ Already false → {filepath}")
            return
        else:
            print(f"🔹 No headless key → {filepath}")
            return

        # Recombine content
        updated = f"---\n{new_frontmatter}\n---\n{body}"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated)

    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

def main():
    if len(sys.argv) < 2:
        print("Usage: python switch_headless_false.py \"content/videos_youtube/*.md\"")
        return
    for filepath in glob.glob(sys.argv[1], recursive=True):
        switch_headless(filepath)

if __name__ == "__main__":
    main()
