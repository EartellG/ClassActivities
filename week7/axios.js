import axios from "axios";
import { title } from "process";

axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then(response => {
    const data = response.data;
    const title = data.map(post => post.title);
    console.log(title);
  });
