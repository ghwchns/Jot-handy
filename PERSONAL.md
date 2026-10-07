# Jot

Jot is a personal macOS build of [Handy](https://github.com/cjpais/Handy), based on
the stable `v0.9.8` release. It uses a neutral gray interface and a note-and-speech
icon. Audio capture, transcription, model selection, and shortcut behavior remain
the upstream implementation.

The `personal` branch is the production branch for this fork. Imported `main`
tracks upstream history. The original MIT license and upstream credits apply.

## Build

Use Rust stable, Bun, CMake, and Xcode. Follow [BUILD.md](BUILD.md) for dependencies.

```sh
bun install --frozen-lockfile
bun run lint
bun run format:check
cd src-tauri
cargo clippy --release --locked
cd ..
bun run tauri build --bundles app
```

For installations that should preserve macOS permissions across rebuilds, use
the same local signing identity each time. Supply it through a local Tauri config
override for `bundle.macOS.signingIdentity`; keep that override outside this repo.
An Apple Development signature is not Developer ID notarization.

## Updates and existing data

The official self-updater is disabled in this build. Review upstream releases
periodically and merge useful changes into `personal`; build and verify them
before replacing the installed app. Updates are useful for capture, shortcut,
model, and macOS compatibility fixes. A cosmetic change alone does not require
an update.

The bundle identifier `com.pais.handy`, executable name, model cache, settings,
and history paths are retained so the existing installation keeps its data and
shortcut settings. Install only one active app with that identifier. Keep the
official app backup outside `/Applications` for rollback. No personal settings,
recordings, models, or signing credentials belong in this public repository.

## Icon

The canonical icon is `src-tauri/icons/icon.png`, also served as
`public/app-icon.png`. Platform icons are generated with Tauri's icon command.
The icon was generated using the built-in Imagegen tool with this prompt:

> Use case: logo-design. Asset type: macOS application icon for a small personal
> local dictation tool, named Jot. Create one elegant, unpretentious, highly legible
> app icon in neutral gray only. A charcoal-gray rounded-square macOS tile,
> centered with generous transparent outer margins. On the tile, one off-white
> paper note with a subtly folded upper-right corner; on that note a compact
> charcoal speech waveform above two short horizontal text strokes, conveying
> speech becoming a note. Simple restrained geometry, rounded line ends, clean
> crisp flat shapes, very subtle paper depth, no glossy finish. Readable at 32
> pixels. The rounded-square tile should occupy about 80% of the canvas width
> and height, perfectly centered. Keep outside the tile truly transparent. No
> text, letters, cartoon faces, hands, pink, bright colors, decorative effects,
> watermarks, mockup devices, or surrounding scene. Square composition,
> production app icon.
