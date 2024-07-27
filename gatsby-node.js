// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     {
//       allWpPost {
//         nodes {
//           id
//           slug
//           categories {
//             nodes {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.error("There was an error fetching posts", result.errors)
//   }

//   const { allWpPost } = result.data

//   // Define the template to use
//   const template = require.resolve(`./src/templates/posts.js`)

//   if (allWpPost.nodes.length) {
//     allWpPost.nodes.map(post => {
//       actions.createPage({
//         path: `${post.categories.nodes[0].slug}/${post.slug}`,
//         component: template,
//         context: post,
//       })
//     })
//   }
// }
