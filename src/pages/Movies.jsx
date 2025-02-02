import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../features/contentSlice';
import SpacingGrid from '../components/SpacingGrid';
import CustomPagination from '../components/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';

const Movies = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.content);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchContent('movie'));
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  const filteredAndSortedItems = items
    .filter(item => item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = filteredAndSortedItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mt: 10, mb: 2, textAlign: 'center' }}>
        Peliculas
      </Typography>
      <SpacingGrid items={paginatedItems} />
      <CustomPagination 
        count={totalPages}
        page={page}
        onChange={handlePageChange}
      />
      <Footer />
    </Box>
  );
};

export default Movies;  
