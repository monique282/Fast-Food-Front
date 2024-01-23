export default function Remove(setShowReview, counter, setCounter) {
  if (counter === 1) {
    setShowReview(false);
  } else {
    setCounter(counter - 1);
    console.log(counter);
  }
}
