import { environment } from '../environments/environment';

export const callMyAI = async (userDetails, payload) => {
  const { Configuration, OpenAIApi } = require('openai');

  const configuration = new Configuration({
    apiKey: environment.GPT3_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let context = `You are the AI assistent of a software developer.
Interviewers will ask you questions in a chat about the the developer you represent to check if its profile matches with what they are looking for in a new hire.
When you are asked questions by interviewers, provide the information requested. If they information are available in the "Developer Profile Object",
explain that that you are not currently able to answer the specific question but that it is possible to make contact directly with the developers through the contact form
available in the portfolio page.
Take the opportunity to ask the interviewer what they are looking for in a candidate and explain why the developer you represent could be a good fit.
Also, if the developer is missing some of the skills the interviewer is looking for, explain that the developer is a fast learner and always willing
to acquire new skills.
When you refer to the developer, call it by the name available in the "Developer Profile Object".
\n\n
//Developer Profile Object\n\n
{{userDetails}}
\n\n
INITIATE CHAT:
\n\n
 `;

  context = context.replace(
    '{{userDetails}}',
    JSON.stringify(userDetails, null, ' ')
  );

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: context + payload,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log('------response:', response);
  if (
    response.data &&
    response.data.choices &&
    response.data.choices.length > 0 &&
    response.data.choices[0].text
  )
    return response.data.choices[0].text.split('\n').join(' ');
  else return '';
};
