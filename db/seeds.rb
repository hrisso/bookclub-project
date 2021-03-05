# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Review.destroy_all
Book.destroy_all
User.destroy_all

@barbara = User.create!(username: "barbara", email:"barbara@email.com", password: "123456")
@elwoods = User.create!(username: "elwoods", email:"elwood@email.com", password: "123456")
@scott = User.create!(username: "scott", email:"scott@email.com", password: "123456")
@sage = User.create!(username: "sage", email:"sage@email.com", password: "123456")
@apple = User.create!(username: "apple", email:"apple@email.com", password: "123456")

puts "#{User.count} users created"

@one = Book.create!(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Books::Lovecraft.paragraph, img_url:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", user:@barbara)
@two = Book.create!(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Books::Lovecraft.paragraph, img_url:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", user:@elwoods)
@three = Book.create!(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Books::Lovecraft.paragraph, img_url:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", user:@scott)
@four = Book.create!(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Books::Lovecraft.paragraph, img_url:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", user:@sage)
@five = Book.create!(title: Faker::Book.title, author: Faker::Book.author, description: Faker::Books::Lovecraft.paragraph, img_url:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", user:@barbara)

puts "#{Book.count} books created"

Review.create!(title: 'Great Book', user: @barbara, book: @one, content: Faker::Hipster.paragraph(sentence_count: 2))
Review.create!(title: 'Nice Read', user: @sage, book: @one, content: Faker::Hipster.paragraph(sentence_count: 2))

puts "#{Review.count} reviews created"
