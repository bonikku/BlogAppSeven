# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(email: 'woleet@example.com', name: "Wolee T.", password: 'password', password_confirmation: 'password', role: User.roles[:admin])
User.create(email: 'john@example.com', name: "John", password: 'password', password_confirmation: 'password')

15.times do |x|
  post = Post.create(title: "Title #{x} from seeded post",
                     body: "Body #{x} from seeded posts",
                     user_id: User.first.id)

  5.times do |y|
    Comment.create(body: "Comment number #{y}",
                   user_id: User.second.id,
                   post_id: post.id)
  end
end

# Benchmark

elapsed = Benchmark.measure do
  posts = []
  user1 = User.first
  user2 = User.second
  100.times do |x|
    puts "Creating post #{x + 1}"
    post = Post.new(title: "Title #{x + 1} from seeded post",
                    body: "Body #{x + 1} from seeded posts",
                    user: user1)

    15.times do |y|
      puts "Creating comment #{y + 1} for post #{x + 1}"
      post.comments.build(body: "Comment number #{y + 1}",
                          user: user2,
                          post_id: post.id)
    end
    posts.push(post)
  end
  Post.import(posts, recursive: true)
end

puts "It took #{elapsed.real} seconds to create 100 posts with 15 comments each"