# Gopher for Codex

A plush cyan Go gopher with animated actions and 16 look directions for Codex.

<table>
  <tr>
    <td align="center"><img src="idle-preview.gif" width="96" alt="Idle animation"><br>Idle</td>
    <td align="center"><img src="running-right-preview.gif" width="96" alt="Run right animation"><br>Run right</td>
    <td align="center"><img src="running-left-preview.gif" width="96" alt="Run left animation"><br>Run left</td>
    <td align="center"><img src="waving-preview.gif" width="96" alt="Wave animation"><br>Wave</td>
    <td align="center"><img src="jumping-preview.gif" width="96" alt="Jump animation"><br>Jump</td>
    <td align="center"><img src="failed-preview.gif" width="96" alt="Failed animation"><br>Failed</td>
    <td align="center"><img src="waiting-preview.gif" width="96" alt="Wait animation"><br>Wait</td>
    <td align="center"><img src="running-preview.gif" width="96" alt="Working animation"><br>Working</td>
    <td align="center"><img src="review-preview.gif" width="96" alt="Review animation"><br>Review</td>
  </tr>
</table>

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
