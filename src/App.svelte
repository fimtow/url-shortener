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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
<div class="columns is-mobile is-centered">
	<div class="column is-half">
		<h1 class="title is-1">URL shortener</h1>
		<div class="field">
			<p class="control has-icons-left">
				<input class="input is-normal is-primary" type="text" placeholder="Enter URL" bind:value={myurl}>
				<span class="icon is-small is-left">
					<i class="fas fa-link"></i>
				</span>
			</p>
		</div>
		<button class="button is-primary" type="button" on:click={shrink}>
			<span class="icon">
				<i class="fas fa-compress-alt"></i>
			  </span>
			<span>Shrink</span>
		</button>
		<button class="button is-primary is-light" type="button" on:click={copy}>
			<span class="icon">
				<i class="far fa-copy"></i>
			</span>
			<span>Copy</span>
		</button>
	</div>
</div>


