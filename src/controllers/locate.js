const { Translate } = require('@google-cloud/translate').v2;

module.exports = {
	async index(req, res) {
		const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
		const translate = new Translate({
			credentials: auth,
			projectId: auth.projectId
		});
		try {
			const id = req.body
			console.log(id)
			const [locale] = await translate.getLanguages()
			return res.status(200).json(locale)
		} catch (error) {
			console.log(error)
		}
	}
}
