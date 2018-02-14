export const db = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/ReactWebpackNode';

export default {
  db
};
