const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "hannah-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2bbhwgva13.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fZ3XofyFi",
    APP_CLIENT_ID: "2embh2inkauuieqtbll9uisk62",
    IDENTITY_POOL_ID: "us-east-1:2a9a76ff-e661-4ed2-b1a1-17434326dfa3"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "hannah-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3e5begkyx8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_iL67u9S5n",
    APP_CLIENT_ID: "536a5gmmm401rr9h0tmdi3qr72",
    IDENTITY_POOL_ID: "us-east-1:d48ac491-c598-4d2d-a639-e204e6ad44fc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
