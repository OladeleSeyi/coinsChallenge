const schema = {
  schema: `type Query {
    calculatePrice(
      type: RequestType!
      margin: Float!
      exchangeRate: Float!
    ): Float!
  }
  
  enum RequestType {
    buy
    sell
  }
  `,
};

export default schema;
