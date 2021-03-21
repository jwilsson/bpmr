import { gql, request } from 'graphql-request';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import useSWR from 'swr';

import SearchField from '../components/SearchField';
import Results from '../components/Results';

import { Track } from '../types/track';

type Props = {
  query: string,
  tracks: Track[],
};

const TRACKS_QUERY = gql`
  query getTracks($query: String!) {
    tracks(query: $query) {
      album {
        images {
          height
          url
          width
        }
        name
      }
      artists {
        name
      }
      audioFeatures {
        tempo
      }
      externalUrls {
        spotify
      }
      id
      name
    }
  }
`;

const fetcher = (document: string, query: any) => {
  const url = process.env.NEXT_PUBLIC_API_URL || '';

  if (!query) {
    return Promise.resolve();
  }

  return request(url, document, {
    query,
  });
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q = '' } = query;
  let tracks = [];

  if (q.length) {
    const data = await fetcher(TRACKS_QUERY, q);

    tracks = data.tracks;
  }

  return {
    props: {
      query: q,
      tracks,
    },
  };
};

const IndexPage = ({ query, tracks = [] }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, error, isValidating } = useSWR([TRACKS_QUERY, searchTerm], fetcher);

  const results = data ? data.tracks : tracks;

  return (
    <div className="max-w-screen-lg mx-auto p-12">
      <SearchField
        query={query}
        onSubmit={setSearchTerm}
      />

      <Results error={error} isLoading={!!searchTerm && isValidating} tracks={results} />
    </div>
  );
};

export default IndexPage;
