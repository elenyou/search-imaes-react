import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID c090e3506038c3963c666b480f56d85241491a935b2d4dca7bbde1a6937b8218"
      }
});