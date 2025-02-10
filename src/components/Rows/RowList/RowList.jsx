import React from 'react'
import Rows from '../Rows/Rows'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <div>
      <Rows
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Rows
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Rows
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Rows
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Rows
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Rows
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}

export default RowList
