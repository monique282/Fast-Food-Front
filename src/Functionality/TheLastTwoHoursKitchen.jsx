export default function theLastTwoHoursKitchen(readyRequests, setShowOnly2hours) {
    const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;
    const now = new Date();
    const ordersInLastTwoHours = readyRequests.filter((pedido) => {
      const dateCreation = new Date(pedido.createdAt);
      return now - dateCreation <= twoHoursInMilliseconds;
    });

    const orderedByDate = ordersInLastTwoHours.sort((a, b) => {
      const dataA = new Date(a.createdAt);
      const dataB = new Date(b.createdAt);
      return dataB - dataA;
    });

    setShowOnly2hours(orderedByDate);
  }