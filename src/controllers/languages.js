const { Translate } = require('@google-cloud/translate').v2;

//import translate from '../Configs/api'

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
		const id = req.params.id
		const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
		const translate = new Translate({
			credentials: auth,
			projectId: auth.projectId
		});
		try {
			const [languages] = await translate.getLanguages(id);
			return res.status(200).json(languages)
		} catch (error) {
			return res.status(400).json(error)
		}
	},
	async detectLanguage(req, res) {
		try {
			const text = req.body
		  const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
		  const translate = new Translate({
			credentials: auth,
			projectId: auth.projectId
		  });
		  const [detections] = await translate.detect(text.texto);
		  return res.status(200).json(detections)
		} catch (error) {
		  console.log(error)
		  return res.status(400).json(error)
		}
	  },
	async translateText(req, res) {
		const text = req.body.texto
		const target = req.body.target
		const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)
		const translate = new Translate({
			credentials: auth,
			projectId: auth.projectId
		});
		try {
			let [translations] = await translate.translate(text, target);
			return res.status(200).json([translations])
		} catch (error) {
			return res.status(400).json(error)
		}
	}
}