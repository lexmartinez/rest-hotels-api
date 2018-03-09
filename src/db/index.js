import monk from 'monk';

module.exports = () => {
  return monk(`${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);
}

