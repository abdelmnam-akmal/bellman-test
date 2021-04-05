import axios from "axios";

export default async function getData() {
      const response = await axios.get('js/data.json');
      return response;
}