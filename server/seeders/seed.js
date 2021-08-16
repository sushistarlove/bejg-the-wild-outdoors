const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');

db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    // await User.create(userSeed);

    // for (let i = 0; i < postSeed.length; i++) {
    //   const { _id, user_id } = await Post.create(postSeed[i]);
    //   const user = await User.findOneAndUpdate(
    //     { _id: user_id },
    //     {
    //       $addToSet: {
    //         posts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
