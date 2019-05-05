import { Arg, Query, Resolver } from 'type-graphql';
import { LibraryType } from '../types/LibraryType';
import { Library } from '../entity/Library';

@Resolver(type => LibraryType)
export class LibraryResolver {
  @Query(returns => [LibraryType])
  async libraries(): Promise<LibraryType[]> {
    return Library.find();
  }

  @Query(returns => LibraryType, { nullable: true })
  async library(@Arg('id') id: string): Promise<Library | undefined> {
    return Library.findOne(id);
  }
}
