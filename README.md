# Gopher for Codex

A plush cyan Go gopher with animated actions and 16 look directions for Codex.

<p align="center">
  <img src="idle-preview.gif" width="96" alt="Idle animation">
  <img src="waving-preview.gif" width="96" alt="Wave animation">
  <img src="jumping-preview.gif" width="96" alt="Jump animation">
  <img src="failed-preview.gif" width="96" alt="Failed animation">
</p>
<p align="center">
  <img src="running-left-preview.gif" width="96" alt="Run left animation">
  <img src="waiting-preview.gif" width="96" alt="Wait animation">
  <img src="running-preview.gif" width="96" alt="Working animation">
  <img src="review-preview.gif" width="96" alt="Review animation">
  <img src="running-right-preview.gif" width="96" alt="Run right animation">
</p>

## Install with npm

Requires Node.js and npm. Works on macOS, Linux, and Windows:

```sh
npx --yes github:gwakuh/codex-gopher-pet
```

## Install from the terminal

On macOS or Linux, clone the repository into the Codex pet directory:

```sh
mkdir -p "${CODEX_HOME:-$HOME/.codex}/pets" && git clone --depth 1 https://github.com/gwakuh/codex-gopher-pet.git "${CODEX_HOME:-$HOME/.codex}/pets/gopher"
```

Both methods place `pet.json` and `spritesheet.webp` under `~/.codex/pets/gopher` by default. Set `CODEX_HOME` if Codex uses another home directory. On Windows, the default path is `%USERPROFILE%\.codex\pets\gopher\`.

Restart Codex, then select **Gopher** in Settings → Pets. To update, rerun the npm command or run `git -C "${CODEX_HOME:-$HOME/.codex}/pets/gopher" pull` after cloning.

To remove it, delete the `gopher` folder from your Codex `pets` directory.
