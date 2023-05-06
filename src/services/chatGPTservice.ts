import axios from 'axios';
export default async function generate(
  jobTitle: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string,
){
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  console.log(OPENAI_API_KEY);
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const prompt = `Could you rewrite following experience into resume experience?\n. I have worked at ${company} as ${jobTitle} between ${startDate} and ${endDate} at ${location}. ${description}`;
  const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
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
    return "";
  }
}
