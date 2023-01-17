import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getPodcast from '../../loaders/podcast';
import Sidebar from '../../components/Podcast/Sidebar/Sidebar';

const loader = async ({ params }) => {
  const podcast = await getPodcast(params.podcastId);
  return { podcast };
};

function Podcast() {
  const { podcast } = useLoaderData();

  return (
    <div data-testid="podcast">
      {
        podcast && (
          <Container>
            <Row>
              <Sidebar
                image={podcast.results[0].artworkUrl600}
                title={podcast.results[0].collectionName}
                author={podcast.results[0].artistName}
                description={podcast.results[0].description}
              />
            </Row>
          </Container>
        )
      }
    </div>
  );
}

export { loader, Podcast };
