import https from "https";
import querystring from "querystring";

const postOptions = {
  hostname: "wma-googlebooks.herokuapp.com",
  path: "/api/books",
  method: "POST",
  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  //GET REQUEST (Google Search - Books)
  searchBooks: (parameters) => {

    const query = parameters.includes(" ") ? parameters.trim().split(" ").join("+")
    : parameters.trim();

    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        console.log("RESPONSE CODE", response.statusCode);
        if(response.statusCode >= 200 && response.statusCode < 300) {
          let data = '';
          response.on('data', (chunk) => data += chunk);
          response.on('end', () => resolve(JSON.parse(data)));
        } else {
          reject(new Error(response.statusCode));
        }
      })
      request.on('error', (err) => reject(err));
    });
  },
  //GET REQUEST (loading ALL books from the database)
  getBooks: (url) => {
    return new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        if(response.statusCode >= 200 && response.statusCode < 300) {
          let data = '';
          response.on('data', (chunk) => data += chunk );
          response.on('end', () => {
            resolve(JSON.parse(data));
          });
        } else {
          reject(new Error(response.statusCode));
        }
      });
      request.on('error', (err) => reject(err));
    });
  },
  //POST REQUEST (adding a book to database)
  saveBook: (title, authors, description, thumbnail, previewLink) => {
    const postData = querystring.stringify({
      "title": title || "No Title Provided",
      "authors": authors || "No Author Provided",
      "description": description || "No Description Provided",
      "thumbnail": thumbnail || "No Thumbnail Provided",
      "previewLink": previewLink || "No Preview Link Provided"
    });

    return new Promise((resolve, reject) => {
      const request = https.request(postOptions, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        })
      });
      request.write(postData);
      request.end();
      request.on('error', (err) => reject(err));
    });
  }
  //END OF EXPORT
}
