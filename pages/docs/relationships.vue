<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Relationships</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Khadem supports expressive relationship definitions between models such as 
        <code>hasOne</code>, <code>hasMany</code>, <code>belongsTo</code>, 
        <code>belongsToMany</code>, and polymorphic relations using <code>morphOne</code>, 
        <code>morphMany</code>, and <code>morphTo</code>.
      </p>
    </header>

    <!-- One-to-One -->
    <DocSection title="hasOne">
      <template #description>
        Defines a one-to-one relationship. For example, a <code>User</code> has one <code>Profile</code>.
      </template>
      <CodeBlock :code="hasOneCode" language="dart" title="hasOne Example" />
    </DocSection>

    <!-- One-to-Many -->
    <DocSection title="hasMany">
      <template #description>
        Defines a one-to-many relationship. For example, a <code>User</code> has many <code>Posts</code>.
      </template>
      <CodeBlock :code="hasManyCode" language="dart" title="hasMany Example" />
    </DocSection>

    <!-- Belongs To -->
    <DocSection title="belongsTo">
      <template #description>
        Defines an inverse of a <code>hasOne</code> or <code>hasMany</code>. For example, a <code>Post</code> belongs to a <code>User</code>.
      </template>
      <CodeBlock :code="belongsToCode" language="dart" title="belongsTo Example" />
    </DocSection>

    <!-- Belongs to Many -->
    <DocSection title="belongsToMany">
      <template #description>
        Defines a many-to-many relationship using a pivot table.
      </template>
      <CodeBlock :code="belongsToManyCode" language="dart" title="belongsToMany Example" />
    </DocSection>

    <!-- Polymorphic -->
    <DocSection title="morphOne & morphMany">
      <template #description>
        Polymorphic relationships allow a model to belong to more than one other model using a single association.
      </template>
      <CodeBlock :code="morphManyCode" language="dart" title="morphMany Example" />
    </DocSection>

    <!-- morphTo -->
    <DocSection title="morphTo">
      <template #description>
        The inverse of a morphOne/morphMany. Used on the polymorphic model itself.
      </template>
      <CodeBlock :code="morphToCode" language="dart" title="morphTo Example" />
    </DocSection>

    <!-- Loading Relations -->
    <DocSection title="Loading Relationships">
      <template #description>
        Use <code>withRelations()</code> to eagerly load defined relationships in your queries.
      </template>
      <CodeBlock :code="loadingRelationsCode" language="dart" title="Eager Loading" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Relationships',
  meta: [{ name: 'description', content: 'Relationship definitions and usage in Khadem ORM' }]
});

const hasOneCode = `
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'profile': hasOne<Profile>(
      foreignKey: 'user_id',
      relatedTable: 'profiles',
      factory: () => Profile()
    )
  };
}
`;

const hasManyCode = `
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post()
    )
  };
}
`;

const belongsToCode = `
class Post extends KhademModel<Post> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    )
  };
}
`;

const belongsToManyCode = `
class Role extends KhademModel<Role> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'users': belongsToMany<User>(
      pivotTable: 'role_user',
      foreignPivotKey: 'role_id',
      relatedPivotKey: 'user_id',
      relatedTable: 'users',
      localKey: 'id',
      factory: () => User()
    )
  };
}
`;

const morphManyCode = `
class Post extends KhademModel<Post> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'comments': morphMany<Comment>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: 'comments',
      factory: () => Comment()
    )
  };
}
`;

const morphToCode = `
class Comment extends KhademModel<Comment> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'commentable': morphTo<KhadamModel>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: '', // not needed here
      factory: () => throw UnimplementedError()
    )
  };
}
`;

const loadingRelationsCode = `
// Load posts with their user and paginated comments (and nested user inside each comment)
final post = await Post().query
  .where('id', '=', 1)
  .withRelations(['user', 'comments:paginated:page=1:perPage=10.user'])
  .first();

final user = post?.relation.get('user');
final comments = post?.relation.get('comments');
`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
</style>
