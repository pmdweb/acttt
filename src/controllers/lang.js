
const { Translate } = require('@google-cloud/translate').v2;
const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)

const translate = new Translate({
	credentials: auth,
	projectId: auth.projectId
});


const text = 'Alchemy Cloud Technical Task';
const target = 'pt-br'//JSON.parse(process.env.GT_API_SERVICE_ACC) ;

async function locateLanguage(toTranslate) {
	try {
		let location = await translate.detect(text)
		return location[0].language
	} catch (error) {
		console.log('Error finding the language: '+error)
	}
}

async function translateText(text, target) {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
	translations.forEach((translation, i) => {
	  console.log(`${text[i]} => (${target}) ${translation}`);
  });
}
  
async function translation() { 
	const origin = await locateLanguage(text);
	console.log(`Original Language: ${origin}`);
	console.log(`Target Language: ${target}`);
	translateText(text,target);
}

translation();