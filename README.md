# SvelteKit Node Slack Backup Frontend UI

_This is not affiliated with Slack Technologies, Inc. in any way._

## What is this?

This is a SvelteKit frontend that serves as a UI for the exported slack data as a sqlite db, that is exported with a deno script.
Default location of the sqlite db is `./src/data/slack.db`.

## Notes

Techincally it's possible to transfrom this repo into a desktop app for easy access to the slack data without requiring a node server to run.

The way to to that optimally would be to compaile down a bun.js project and load it as a sidecar to a Tauri project then write minimal rust code to interact with sidecar process.

But for the foreseeable future I'll leave it as a web app, as for me a node server is not a huge hindrance plus you can share it with others, with or without a password.

## License

MIT
