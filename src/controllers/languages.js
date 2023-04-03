const { Translate } = require('@google-cloud/translate').v2;

module.exports = {
	async index(req, res) {
		const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
		const translate = new Translate({
			credentials: auth,
			projectId: auth.projectId
		});
		try {
			const [languages] = await translate.getLanguages();
			return res.status(200).json(languages)
		} catch (error) {
			return res.status(400).json(error)
		}
	},
	async indexTarget(req, res) {
		try {
			const id = req.params.id
			const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
			const translate = new Translate({
				credentials: auth,
				projectId: auth.projectId
			});
			const [languages] = await translate.getLanguages(id);
			return res.status(200).json(languages)
		} catch (error) {
			console.log(error)
		}
	}
}