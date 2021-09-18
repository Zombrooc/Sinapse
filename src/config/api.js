import useSWR from 'swr'
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export function useFetch(url) {
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error }
}