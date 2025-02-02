import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../features/contentSlice';
import SpacingGrid from '../components/SpacingGrid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import CustomPagination from '../components/Pagination';

const Series = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.content);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchContent('series'));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  const filteredAndSortedItems = items
    .filter(item => item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredAndSortedItems.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mt: 10, mb: 2, textAlign: 'center' }}>
        Series
      </Typography>
      <SpacingGrid items={currentItems} />
      <CustomPagination 
        count={pageCount}
        page={page}
        onChange={handlePageChange}
      />
      <Footer />
    </Box>
  );
};

export default Series;