export class Processor {
	static process(json: string): string {
		try {
			const jsonData = JSON.parse(json);
			const devices: any[] = [];
			let outputText = "";

			jsonData.forEach(function (node: any) {
				Object.keys(node).forEach(key => {
					const device = node[key];

					if (
						device.connection &&
						device.ip
					) {
						devices.push(device);
					}
				});
			});

			devices.forEach(device => {
				outputText += `${device.ip} ${this.getHostName(device)}.lan\n`;
			});

			return outputText;
		} catch (error) {
			console.error(error);
			return "Invalid Data";
		}
	}

	static escapeRegExp(str: string) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}

	static replaceAll(str: string, match: string, replacement: string): string {
		return str.replace(new RegExp(this.escapeRegExp(match), 'g'), () => replacement);
	}


	private static getHostName(device: any) {
		let output: string = device.description ||
			device.ip ||
			(new Date()).getUTCMilliseconds().toString();

		console.log(output);

		output = this.replaceAll(output, " ", "-");
		output = this.replaceAll(output, ".", "-");
		output = this.replaceAll(output, "’", "");
		output = this.replaceAll(output, "'", "");

		output = output.toLowerCase();

		return output;
	}
}