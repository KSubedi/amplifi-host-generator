
# Amplifi Hosts Generator



This web app lets you convert JSON data you get by inspecting Ubiquiti Amplifi router's Web UI to hosts file format. This was built so I could export hosts from my router's DHCP client table to pihole so IP's could resolve to readable hostnames.

  

## How to use

With Chrome, go to [http://amplifi.lan](http://amplifi.lan) from your local network, login and go to System Info on top right corner. Right click and hit 'Inspect' to open the devtools, then go to the network tab. You should see an entry for `info-async.php` on the network connection list, click that and go to the response sub tab. Copy all of that json info.

  

Then run this tool using `npm i && npm start`, which should automatically open a window that goes to [http://localhost:3000](http://localhost:3000). You need `node` and `npm` installed in your system for this to work, but you probably already figured that out by now.

You can also access the pre built version available online at [https://ksubedi.github.io/amplifi-host-generator/](https://ksubedi.github.io/amplifi-host-generator/)

Paste the JSON you copied into the input field and hit process to get the hosts file list. You can then paste this into `/etc/hosts` file on your pihole.

  

## Other

This app might break if Ubiquiti changes the format of api down the line. Please open an issue on this repo if you notice that, I will try to update it with the new format.

This project uses React under the hood. You can run tests with `npm run test`.
