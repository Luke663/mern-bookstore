import BooksSingleCard from "./BooksSingleCard";

import PropTypes from "prop-types";

// BooksCard component renders a grid of book cards.
const BooksCard = ({ books }) => {
  return (
    // Create a responsive grid layout for displaying book cards.
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Iterate over the books array and render a BooksSingleCard for each book */}
      {books.map((item) => (
        <BooksSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
  books: PropTypes.array, // Array of book objects
};

export default BooksCard;
