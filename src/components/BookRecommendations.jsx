import HTMLFlipBook from "react-pageflip";
import annihilationCover from "../assets/book-covers/annihilation.png";

const BookRecommendations = () => {
  return (
    <>
      <HTMLFlipBook
        width={300}
        height={500}
        maxShadowOpacity={0.5}
        showCover={true}
      >
        <div className="demoPage">Book Recommendations</div>
        <div className="book-page">
          <img className="book-image" src={annihilationCover} />
        </div>
        <div className="review-page">
          <h3>Sci-Fi Pick</h3>
          <h4>Annnihilation by Jeff VanderMeer</h4>
          <p>Gripping climate horror</p>
        </div>
        <div className="book-page">Page 4</div>
        <div className="book-page">Page 4</div>
      </HTMLFlipBook>
    </>
  );
};

export default BookRecommendations;
