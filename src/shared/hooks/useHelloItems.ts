import { useQuery } from '@tanstack/react-query';
import { fetchHelloItems } from '../lib/api/mock-data';

export function useHelloItems() {
  return useQuery({
    queryKey: ['hello-items'],
    queryFn: fetchHelloItems,
  });
}
