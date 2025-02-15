import { getRequestConfig } from "next-intl/server"; 

export default getRequestConfig(async ({locale}) => { 
  // console.log(locale)
  const messages = (await import(`../messages/${locale}.json`)).default
  return {
    locale,
    messages: messages,
  };
});