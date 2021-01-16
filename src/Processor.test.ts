import { Processor } from "./Processor";

test('Processor processes data.', () => {
	const testData = [
		{
			"first": {
				ip: "127.0.0.1",
				description: "localhost"
			},
			"second": {
				connection: "wireless",
				ip: "127.0.0.2",
				description: "testhost"
			},
		}
	];

	const processed = Processor.process(JSON.stringify(testData));
	expect(processed).toContain("127.0.0.2 testhost.lan");
});
