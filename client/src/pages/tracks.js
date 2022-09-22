import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACK = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACK);
  console.log(data);
  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout grid>
        {data?.tracksForHome.map((track) => (
          <TrackCard track={track}></TrackCard>
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
