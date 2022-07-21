import axios from 'axios';
import {useState} from "react";

import {User} from "../interfaces/user";

export const useApi = () : [User[], boolean, Function, Function, boolean] => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState([]);
  let currentLink = '';

  const fetchData = async (apiUrl: string) => {
    if (currentLink === apiUrl && !isError) return;

    currentLink = apiUrl;
    setLoading(true);

    try {
      const response = await axios({
        method: 'get',
        url: apiUrl,
      });
      const { data } = response;

      // @ts-ignore
      setData(Array.isArray(data) ? data : [data]);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [data, isLoading, fetchData, setData, isError];
}
