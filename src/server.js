require('dotenv').config();

const { Translate } = require('@google-cloud/translate').v2;
const auth = JSON.parse(process.env.GT_API_SERVICE_ACC)

const translate = new Translate({
	credentials: auth,
	projectId:auth.projectId
}
);

const text = 'Locate mother-tongue';
const target = 'pt-br';

async function translateText() {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();