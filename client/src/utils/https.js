import https from "https";
import querystring from "querystring";

const postOptions = {
  hostname: "wma-googlebooks.herokuapp.com",
  path: "/api/books",
  method: "POST",
  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
  },
}

const postData = {
  title: "Catcher in the Rye",
  authors: "J. D. Salinger"
}

export default {
  getBooks: (url) => {
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        if(response.statusCode >= 200 && response.statusCode < 300) {
          let data = '';
          response.on('data', (chunk) => data += chunk );
          response.on('end', () => resolve(data));
        } else {
          reject(new Error(response.statusCode));
        }
      });
      request.on('error', (err) => reject(err));
    });
  },
  saveBook: () => {
    return new Promise((resolve, reject) => {
      const request = https.request(postOptions, (response) => {
        if(response.statusCode !== 200) {
          reject(new Error(response.statusCode));
        }
      });
      request.write(postData);
      request.on('error', (err) => reject(err));
      request.end();
    });
  }
}
