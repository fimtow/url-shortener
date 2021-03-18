<script>
let myurl;
const api = "https://api-ssl.bitly.com/v4/shorten";
async function shrink(){
	if(!myurl.startsWith("http://") && !myurl.startsWith("https://"))
	{
		myurl = 'http://'+myurl;
	}
	let formData = new FormData();
	formData.append('long_url', myurl);
	fetch(api, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer edbc38b1ef9b02f03ebc1fdd9637cccce4c46ffa',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ "long_url": myurl })
	}).then(data => data.json()).then(data => myurl = data.link);
};

const copy = () => {
	navigator.clipboard.writeText(myurl);
};

</script>

<input type="text" placeholder="Enter URL" bind:value={myurl}>
<button type="button" on:click={shrink}>
	Shrink
</button>
<button type="button" on:click={copy}>
	Copy
</button>