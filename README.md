# Gopher for Codex

A plush cyan Go gopher with animated actions and 16 look directions for Codex.

![Jump animation preview](jumping-preview.gif)

## Install with npm

Requires Node.js and npm. Works on macOS, Linux, and Windows:

```sh
npx --yes github:gwakuh/codex-gopher-pet
```

## Install from the terminal

On macOS or Linux, download the two pet files directly:

```sh
pet_dir="${CODEX_HOME:-$HOME/.codex}/pets/gopher"
mkdir -p "$pet_dir"
for file in pet.json spritesheet.webp; do
  curl -fsSL "https://raw.githubusercontent.com/gwakuh/codex-gopher-pet/main/$file" -o "$pet_dir/$file"
done
```

Both methods install `pet.json` and `spritesheet.webp` under `~/.codex/pets/gopher` by default. Set `CODEX_HOME` if Codex uses another home directory. On Windows, the default path is `%USERPROFILE%\.codex\pets\gopher\`.

Restart Codex, then select **Gopher** in Settings → Pets. Run the same install command again to update it.

To remove it, delete the `gopher` folder from your Codex `pets` directory.
