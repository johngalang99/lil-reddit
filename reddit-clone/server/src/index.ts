import { MikroORM, RequiredEntityData } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !__prod__,
  });

  const post = orm.em.create(Post, {
    title: 'my first post',
  } as RequiredEntityData<Post>);
  orm.em.persistAndFlush(post);
};

console.log('hello world');
