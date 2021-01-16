import React, { useState } from 'react';
import './App.css';
import { Processor } from './Processor';

function App() {
	const [inputJson, setInputJson] = useState("");
	const [output, setOuput] = useState("");

	const processJson = () => {
		const processedOutput = Processor.process(inputJson);

		setOuput(processedOutput);
	}

	return (
		<div className="container">
			<div className="wrapper">
				<h2>Amplifi Host Generator</h2>

				<p>This web app lets you convert JSON data you get by inspecting Ubiquiti Amplifi router&#39;s Web UI to hosts file format. This was built so I could export hosts from my router&#39;s DHCP client table to pihole so IP&#39;s could resolve to readable hostnames.</p>
				<h3 id="how-to-use">How to use</h3>
				<p>With Chrome, go to <a href="http://amplifi.lan">http://amplifi.lan</a> from your local network, login and go to System Info on top right corner. Right click and hit &#39;Inspect&#39; to open the devtools, then go to the network tab. You should see an entry for <code>info-async.php</code> on the network connection list, click that and go to the response sub tab. Copy all of that json info.</p>
				<p>Paste the JSON you copied into the input field below and hit process to get the hosts file list. You can then paste this into <code>/etc/hosts</code> file on your pihole.</p>

				<h3>Input JSON</h3>
				<textarea
					className="form-control"
					value={inputJson}
					onChange={(e) => setInputJson(e.target.value)}
					cols={30}
					rows={10}>
				</textarea>
				<br />
				<div className="text-center">
					<button
						className="btn btn-primary"
						type="button"
						onClick={() => processJson()}
					>
						Process
					</button>
				</div>
				<hr />
				<h3>Output</h3>
				<textarea
					className="form-control"
					value={output}
					disabled={true}
					cols={30}
					rows={10}></textarea>
				<hr/>
				<pre>Made in Colorado 🏔 by <a href="https://kaushalsubedi.com">Kaushal Subedi</a></pre>
			</div>
		</div>
	);
}

export default App;
