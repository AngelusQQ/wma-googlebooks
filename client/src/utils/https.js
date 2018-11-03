import Https from "https";

const get = (url) => {
  return new Promise((resolve, reject) => {
    const request = Https.request(url, (response) => {
      if(response.statusCode >= 200 && response.statusCode < 300) {
        let data = '';
        response.on('data', (chunk) => data += chunk );
        response.on('end', () => resolve(data));
      } else {
        reject(new Error(response.statusCode));
      }
    });
    request.on('error', (err) => reject(err))
  })
}

export default get;
