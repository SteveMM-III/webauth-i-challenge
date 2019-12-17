exports.seed = knex => {
  knex( 'roles' )
    .insert( [
      { name: "admin"    },
      { name: "TLs"      },
      { name: "students" }
    ] );
};
