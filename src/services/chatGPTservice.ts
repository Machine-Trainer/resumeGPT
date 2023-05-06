import axios from 'axios';
export default async function generate(
  jobTitle: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string,
){
  console.log(jobTitle, company, location, startDate, endDate, description);
  const OPENAI_API_KEY = '';
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
    temperature: 0.7,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  try {
    const response = await axios.post(endpoint, requestBody, { headers });
    return response.data.choices[0].message.content;
    // do something with the response data
  } catch (error) {
    console.log(error);
    return "";
  }
}
