# What is WowSandbox?
WowSandbox is a total frontend replacement for WoW Private Servers using the TrinityCore. It is made up on a nodejs backend api, and a react frontend. I saw a ton of php cms systems and handrolled php websites when doing my research... and I figured it would be a fun project to completely modernize it.  I am using React 16.4 / Node 8 / Bootstrap 4 / Font Awesome 5.

# Getting Started
To setup the stack, you need a few groups of files
* WoW 3.3.5a Client
* My Sql Bin 5.5.9.0 -> `\Database\mysql\bin`
* WoW 3.3.5a Database Scripts -> `\Database\mysql\data`
* WoW 3.3.5a Maps (dbc, maps, vmaps, mmaps) -> `\Services\data`

# Patching your client
* Navigate to `~/Data/enUS` inside your WoW Client folder.
* Open `realmlist.wtf`
* Add or update: `set realmlist 127.0.0.1`
* Add or update: `set patchlist 127.0.0.1`

Once you have all the files, to run the stack, you must execute two npm commands.
* npm run setup
* npm start
There you go!

# Does it come with addons?
Actually yes, I included some addons in `\Frontend\Website\Addons` and intend on creating a page in the frontend for these to be downloaded via the frontend website. Go check them out!

# What if I dont use TrinityCore?
Easy, replace the needed files in the `\Services` folder and update the npm scripts `start-auth` and  `start-world` in `package.json`.

# Does this work for repacks/versions later than 3.3.5a?
Yes, see above.

# When will it be done?
Who knows, When its done. I want to keep this project fun and stress free.