const schema = {
  schema: `type Query {
    calculatePrice(
      type: RequestType!
      margin: Float!
      exchangeRate: Float!
    ): Float!
  }
  
  enum RequestType {
    # What type of transaction is this ?
    buy
    sell
  }
  `,
};

export default schema;
