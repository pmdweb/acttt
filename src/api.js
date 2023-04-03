module.exports = {
	async index(req, res) {
		res.send(`
		<html>
		  <body>
		  <br/>
		  	<h3>Tech Task #1 - Google Translate API usage:</h3>
			<form action="/submit" method="POST">
			  <label>
				Translate to:<br />
				<select>
				</select>
				<input type="email" name="email" />
			  </label>
			  <br /><br />
			  <label>
				Text To Translate:<br />
				<textarea type="text-area" name="text" >Translation box.</textarea>
			  </label><br/>
			  <button type="submit">Enviar</button>
			</form>
		  </body>
		</html>
	  `);
	},
	async index2(req, res) {
		res.send(`
		<html>
		  <body>
		  <br/>
		  	<h3>Tech Task #1 - Google Translate API usage:</h3>
			<form action="/submit" method="POST">
			  <label>
				Translate to:<br />
				<select>
				</select>
				<input type="email" name="email" />
			  </label>
			  <br /><br />
			  <label>
				Text To Translate:<br />
				<textarea type="text-area" name="text" >Translation box.</textarea>
			  </label><br/>
			  <button type="submit">Enviar</button>
			</form>
		  </body>
		</html>
	  `);
	}
}