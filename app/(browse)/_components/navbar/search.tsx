'use client';

import qs from 'query-string';
import { SearchIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

interface SearchProps {
  searchQuery: string;
}
export const Search = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, getValues } = useForm<SearchProps>({ mode: 'onSubmit' });
  const values = getValues();

  const onValid = () => {
    const { searchQuery } = values;
    if (!searchQuery) return;
  };

  const onInvalid = () => {
    const { searchQuery } = values;
    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: {
          term: searchQuery,
        },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className='relative w-full lg:w-[400px] flex items-center'
    >
      <Input
        {...(register('searchQuery'), { placeholder: 'Search' })}
        type='text'
        className='rounded-l-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
      />
      {values.searchQuery && (
        <X
          className='absolute top-2.5 right-14 h-5 w-5 text-muted-foreground hover:opacity-75 transition'
          onClick={() => reset()}
        />
      )}
      <Button type='submit' size='sm' variant='secondary' className='rounded-l-none'>
        <SearchIcon className='h-5 w-5 text-muted-foreground' />
      </Button>
    </form>
  );
};
